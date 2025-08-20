import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Simple up-arrow icon SVG that adapts to theme
const ArrowIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 5l-6.5 6.5a1 1 0 001.4 1.4L11 8.3V19a1 1 0 102 0V8.3l4.1 4.6a1 1 0 001.5-1.3L12 5z"
      fill="currentColor"
    />
  </svg>
);

const Fab = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.outline};
  color: ${({ theme }) => theme.main};
  background: ${({ theme }) => theme.textMain};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    opacity 0.22s ease;
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  /* transform driven by CSS vars to avoid overriding X translate on hover */
  --tx: 0; /* base X translate */
  --ty: ${({ $visible }) => ($visible ? "0" : "12px")};
  transform: translateX(var(--tx)) translateY(var(--ty));
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
    --ty: -2px;
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.outline};
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    right: 12%;
    bottom: calc(14px + env(safe-area-inset-bottom, 0px));
    width: 40px;
    height: 40px;
    /* keep centered via var-based X translate so hover doesn't cancel it */
    --tx: 50%;
    --ty: ${({ $visible }) => ($visible ? "0" : "12px")};
    opacity: ${({ $visible }) => ($visible ? 0.88 : 0)};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: translateX(var(--tx)) translateY(var(--ty));
  }
`;

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Fab
      aria-label="Scroll to top"
      title="Back to top"
      onClick={scrollToTop}
      $visible={visible}
    >
      <ArrowIcon />
    </Fab>
  );
};

export { ScrollTop };
