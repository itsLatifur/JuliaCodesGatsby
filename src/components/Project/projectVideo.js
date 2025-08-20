import React, { useEffect, useRef, useState } from "react";
import QUERIES, { Heading3, Paragraph, Midi } from "../../theming/styles";
import { Movie } from "../../images";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectVideo = ({
  name = "Project Name",
  description = "Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ",
  url = "project",
  image = Movie, // video src
  poster,
}) => {
  const ImageProj = styled.video`
    margin-bottom: 18px;
    width: 100%;
    height: auto;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
  `;

  const Project = styled.div`
    padding: 20px 0 40px 0;
    margin: 0;
    width: 100%;
    @media (${QUERIES.large}) {
      padding: 15px 0 32px;
    }

    &:hover ${ImageProj}::before {
    }

    &:hover ${ImageProj}::after {
      opacity: 0.6;
    }
  `;

  const videoRef = useRef(null);
  const [canLoad, setCanLoad] = useState(false);

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

  return (
    <Project>
      <Link to={`/${url}`} tabIndex="-1">
        <ImageProj
          ref={videoRef}
          playsInline
          muted
          loop
          preload="metadata"
          poster={
            poster ||
            (typeof image === "string"
              ? image.replace(".mp4", ".png")
              : undefined)
          }
          title={`${name} preview`}
          onMouseEnter={(e) => {
            // lightweight hover preview without forcing autoplay
            try {
              e.currentTarget.play();
            } catch (_) {}
          }}
          onMouseLeave={(e) => {
            try {
              e.currentTarget.pause();
            } catch (_) {}
          }}
        >
          {canLoad ? <source src={`${image}`} type="video/mp4" /> : null}
        </ImageProj>
        <Heading3
          style={{
            textAlign: "left",
            margin: 0,
            padding: 0,
          }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <Link to={`/${url}`}>{name}</Link>
        </Heading3>

        <Paragraph style={{ marginTop: "-4px" }}>{description}</Paragraph>
      </Link>
    </Project>
  );
};

export { ProjectVideo };
