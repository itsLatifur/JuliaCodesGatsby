import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LandingMidi } from "../../theming/styles";
import { personalData } from "../../data";

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5000;
  background: ${({ theme }) => theme.main};
  border-bottom: 1px solid ${({ theme }) => theme.outline};
  transition:
    opacity 180ms ease,
    transform 220ms ease;
  opacity: ${(p) => (p.$shown ? 1 : 0)};
  transform: translateY(${(p) => (p.$shown ? "0" : "-8px")});
  pointer-events: ${(p) => (p.$shown ? "auto" : "none")};
`;

const Inner = styled(LandingMidi)`
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Name = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  color: ${({ theme }) => theme.textMain};
`;

// Global sticky name bar: appears after initial viewport height scroll threshold by default
const StickyNameGlobal = ({ showAfterPX = 100 }) => {
  const [show, setShow] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      // basic threshold so it does not interfere with any page-specific hero logic
      setShow(y > showAfterPX);
      lastScrollYRef.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPX]);

  return (
    <Bar $shown={show}>
      <Inner>
        <Name>{personalData.name}</Name>
      </Inner>
    </Bar>
  );
};

export { StickyNameGlobal };
