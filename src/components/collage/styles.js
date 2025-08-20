import styled from "styled-components";
import QUERIES from "../../theming/styles";
import { fadeIn } from "../../theming/animate";

export const CollageCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding-bottom: 50px;
`;

export const CollageItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main};
  border: 1px solid ${({ theme }) => theme.textMain}22;
  border-radius: 11px;
  width: 90px;
  height: 90px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
  position: relative;
  overflow: visible;
  will-change: transform;
  box-sizing: border-box;
  padding: 0 8px; /* small horizontal breathing room */

  @media (${QUERIES.xs}) {
    width: 120px;
    height: 120px;
  }

  @media (${QUERIES.small}) {
    width: 140px;
    height: 140px;
  }

  @media (${QUERIES.large}) {
    width: 150px;
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 9px;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &:hover {
    cursor: pointer;
    transform: rotate(0deg) scale(1.02) !important;
    border-color: ${({ theme }) => theme.textMain}44;
    background-color: ${({ theme }) => theme.textMain}08; /* subtle emphasis */
  }

  &::after {
    content: attr(data-label);
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    color: ${(props) => props.theme.textLight};
    font-size: 14px;
    letter-spacing: -0.4px;
    text-align: left;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  /* Subtle rotation pattern that cycles every 4 items to support any count */
  &:nth-child(4n + 1) {
    transform: rotate(-4deg) translateZ(0);
  }
  &:nth-child(4n + 2) {
    transform: rotate(3.5deg) translateZ(0);
  }
  &:nth-child(4n + 3) {
    transform: rotate(-3deg) translateZ(0);
  }
  &:nth-child(4n + 0) {
    transform: rotate(2.5deg) translateZ(0);
  }
`;
