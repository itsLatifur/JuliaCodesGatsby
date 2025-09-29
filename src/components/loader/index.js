import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: ${(p) => p.size || 32}px;
  height: ${(p) => p.size || 32}px;
  border: 3px solid ${({ theme }) => theme.outline};
  border-top-color: ${({ theme }) => theme.textMain};
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.main}10;
  pointer-events: none;
`;

const Loader = ({ size = 32, className }) => {
  return <Spinner className={className} size={size} aria-hidden="true" />;
};

const LoaderOverlay = ({ visible, size = 32 }) => {
  if (!visible) return null;
  return (
    <Overlay>
      <Loader size={size} />
    </Overlay>
  );
};

export { Loader, LoaderOverlay };
