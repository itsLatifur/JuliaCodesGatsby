import styled from "styled-components";
import QUERIES from "../../theming/styles";
import { fadeIn } from "../../theming/animate";
import CollageImage1 from "../../images/collage/collage1.png";
import CollageImage2 from "../../images/collage/collage2.png";
import CollageImage3 from "../../images/collage/collage3.png";
import CollageImage4 from "../../images/collage/collage4.png";
import CollageImage5 from "../../images/collage/collage5.png";

export const CollageCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding-bottom: 50px;
`;

export const CollageItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.13);
  border-radius: 11px;
  width: 90px;
  height: 90px;
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  position: relative;
  overflow: visible;
  will-change: transform;

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
    object-fit: cover;
    transform: translateZ(0);
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
    transform: rotate(0deg) !important;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.23);
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
