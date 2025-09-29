import React, { useEffect, useRef, useState } from "react";
import QUERIES, { Heading3, Paragraph, Midi } from "../../theming/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoaderOverlay } from "../loader";

const Frame = styled.div`
  position: relative;
`;

const ImageProj = styled.video`
  margin-bottom: 18px;
  width: 100%;
  height: auto;
  border-radius: 25px;
  overflow: hidden;
`;

const Project = styled.div`
  padding: 20px 0 40px 0;
  margin: 0;
  width: 100%;
  @media (${QUERIES.large}) {
    padding: 15px 0 32px;
  }
`;

const ProjectVideo = ({
  name = "Project Name",
  description = "Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ",
  url = "project",
  image = "", // video src
  poster,
  autoplay = false,
}) => {
  const videoRef = useRef(null);

  // Loading & state flags
  const [canLoad, setCanLoad] = useState(false);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hasShownFrame, setHasShownFrame] = useState(false);

  // Poster handling: start with poster for LCP, remove after first real frame to avoid flashing it on pause
  const initialPoster =
    poster ||
    (typeof image === "string" ? image.replace(".mp4", ".png") : undefined);
  const [posterSrc, setPosterSrc] = useState(initialPoster);

  // prefers-reduced-motion
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.matchMedia) {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = () => setReduceMotion(!!mq.matches);
        handler();
        if (mq.addEventListener) mq.addEventListener("change", handler);
        else if (mq.addListener) mq.addListener(handler);
        return () => {
          if (mq.removeEventListener) mq.removeEventListener("change", handler);
          else if (mq.removeListener) mq.removeListener(handler);
        };
      }
    } catch (_) {}
  }, []);

  const effectiveAutoplay = autoplay && !reduceMotion;

  // Reset poster/flags when media changes
  useEffect(() => {
    setHasShownFrame(false);
    setPosterSrc(
      poster ||
        (typeof image === "string" ? image.replace(".mp4", ".png") : undefined),
    );
  }, [image, poster]);

  // Lazy-load the video source
  useEffect(() => {
    const node = videoRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setCanLoad(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCanLoad(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Autoplay controller: play when in view, pause when out of view
  useEffect(() => {
    if (!effectiveAutoplay) return;
    const node = videoRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nowInView = entry.isIntersecting;
          setInView(nowInView);
          if (!canLoad) return; // wait until source attached
          try {
            if (nowInView) {
              if (!hovering) node.play().catch(() => {});
            } else {
              node.pause();
            }
          } catch (_) {}
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [effectiveAutoplay, canLoad, hovering]);

  // Cleanup: pause the exact node referenced at mount to avoid stale ref issues
  useEffect(() => {
    const node = videoRef.current;
    return () => {
      try {
        if (node && typeof node.pause === "function") node.pause();
      } catch (_) {}
    };
  }, []);

  return (
    <Project>
      <Link to={`/${url}`}>
        <Frame>
          <LoaderOverlay visible={!hasShownFrame || !canLoad} size={28} />
          <ImageProj
            ref={videoRef}
            playsInline
            muted
            loop
            preload="metadata"
            autoPlay={effectiveAutoplay && canLoad}
            poster={posterSrc}
            title={`${name} preview`}
            onTimeUpdate={(e) => {
              if (!hasShownFrame && e.currentTarget.currentTime > 0) {
                setHasShownFrame(true);
                // Drop poster after first real frame to avoid flashing it on pause
                setPosterSrc(undefined);
              }
            }}
            onMouseEnter={(e) => {
              setHovering(true);
              try {
                if (effectiveAutoplay) {
                  if (hasShownFrame) e.currentTarget.pause();
                } else {
                  e.currentTarget.play();
                }
              } catch (_) {}
            }}
            onMouseLeave={(e) => {
              setHovering(false);
              try {
                if (effectiveAutoplay) {
                  if (inView) e.currentTarget.play().catch(() => {});
                } else {
                  e.currentTarget.pause();
                }
              } catch (_) {}
            }}
            onPointerEnter={(e) => {
              setHovering(true);
              try {
                if (effectiveAutoplay) {
                  if (hasShownFrame) e.currentTarget.pause();
                } else {
                  e.currentTarget.play();
                }
              } catch (_) {}
            }}
            onPointerLeave={(e) => {
              setHovering(false);
              try {
                if (effectiveAutoplay && inView) {
                  e.currentTarget.play().catch(() => {});
                } else if (!effectiveAutoplay) {
                  e.currentTarget.pause();
                }
              } catch (_) {}
            }}
          >
            {canLoad ? <source src={`${image}`} type="video/mp4" /> : null}
          </ImageProj>
        </Frame>
        <Heading3
          style={{ textAlign: "left", margin: 0, padding: 0 }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <span>{name}</span>
        </Heading3>

        <Paragraph style={{ marginTop: "-4px" }}>{description}</Paragraph>
      </Link>
    </Project>
  );
};

export { ProjectVideo };
