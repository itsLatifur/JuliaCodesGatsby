import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 18px;
  background: ${({ theme }) => theme.outline}22;
`;

const Slide = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transition: opacity 600ms ease;
`;

const Dots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

const Dot = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 0;
  background: ${(p) => (p.$active ? p.theme.textMain : p.theme.outline)};
  opacity: ${(p) => (p.$active ? 0.9 : 0.7)};
  cursor: pointer;
  padding: 0;
`;

const ProjectSlider = ({ images = [], alt = "Project slide" }) => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const timerRef = useRef(null);

  // prefers-reduced-motion
  useEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const handler = () => setReduceMotion(!!mq.matches);
      handler();
      if (mq.addEventListener) mq.addEventListener("change", handler);
      else if (mq.addListener) mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler);
        else if (mq.removeListener) mq.removeListener(handler);
      };
    } catch (_) {}
  }, []);

  // autoplay
  useEffect(() => {
    if (reduceMotion || images.length < 2 || hovering) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [images.length, hovering, reduceMotion]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <Frame
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {images.map((src, i) => (
        <Slide
          key={i}
          src={src}
          alt={alt}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          $active={i === index}
        />
      ))}
      {images.length > 1 && (
        <Dots aria-hidden="true">
          {images.map((_, i) => (
            <Dot
              key={i}
              $active={i === index}
              onClick={() => setIndex(i)}
              tabIndex={-1}
              role="presentation"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </Dots>
      )}
    </Frame>
  );
};

export { ProjectSlider };
