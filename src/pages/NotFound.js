import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { darkTheme } from "../theming/themeContext";
import { Link, useNavigate } from "react-router-dom";
import { LandingMidi, Heading2, Paragraph } from "../theming/styles";

const Wrapper = styled.main`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  /* Force dark night palette regardless of user theme */
  background: ${darkTheme.main};
`;

// Unified ghost/environment tint
const GHOST_TINT = "#e6ebff";
// Cloud base color (solid, no transparency)
const CLOUD_COLOR = "#4a4d57"; // soft night gray

const Card = styled.div`
  margin: 0 auto;
  padding: 24px;
  transition: transform 160ms ease;
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
  border-radius: 8px;
  /* Theme-independent subtle card */
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: ${GHOST_TINT};
  @media (max-width: 600px) {
    padding: 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    gap: 8px;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: space-between;
  }
`;

// Subtle floating hover animation to match the ghost vibe
const floatHover = keyframes`
  0%, 100% { transform: translateY(-1px); }
  50% { transform: translateY(-3px); }
`;

const Button = styled(Link)`
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.textMain};
  color: ${({ theme }) => theme.main};
  background: ${({ theme }) => theme.textMain};
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-1px);
    animation: ${floatHover} 1.6s ease-in-out infinite;
  }
  &:focus-visible {
    outline: none;
    transform: translateY(-1px);
    animation: ${floatHover} 1.6s ease-in-out infinite;
  }
  &:active {
    transform: translateY(0);
    animation: none;
  }
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 14px;
    flex: 1 1 48%;
    min-width: 0;
  }
`;
const GhostButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.textMain};
  color: ${({ theme }) => theme.textMain};
  background: transparent;
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    background 160ms ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-1px);
    animation: ${floatHover} 1.6s ease-in-out infinite;
    background: ${({ theme }) => theme.textMain}0A;
  }
  &:focus-visible {
    outline: none;
    transform: translateY(-1px);
    animation: ${floatHover} 1.6s ease-in-out infinite;
    background: ${({ theme }) => theme.textMain}0A;
  }
  &:active {
    transform: translateY(0);
    animation: none;
  }
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 14px;
    flex: 1 1 48%;
    min-width: 0;
  }
`;

// --- Fun, theme-matched animated art ---
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const ArtWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: ${GHOST_TINT};
  position: relative;
  z-index: 3; /* above road */
`;

const Float = styled.div`
  width: 160px;
  height: 160px;
  position: relative;
  animation: ${float} 3.6s ease-in-out infinite;
  @media (max-width: 600px) {
    width: 132px;
    height: 132px;
  }
`;

// Separate wrapper to apply rotation without clobbering Float's translateY animation
const Rotator = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 200ms ease;
`;

// Gentle perpetual sway, ghost-like
const sway = keyframes`
  0% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
  100% { transform: rotate(-1deg); }
`;

const Sway = styled.div`
  width: 100%;
  height: 100%;
  animation: ${sway} 6s ease-in-out infinite;
`;

// (shadow under ghost removed)

const Tip = styled(Paragraph)`
  text-align: center;
  margin-top: 12px;
  opacity: 0.8;
  font-size: 14px;
  @media (max-width: 900px) {
    display: none;
  }
`;

// Simple icon that inherits currentColor for theme consistency
const IconArrowLeft = ({ size = 16, style, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={style}
    {...rest}
  >
    <path
      d="M15 18l-6-6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
// (ShowOnMobile removed; unified back button label is used across breakpoints)

// Mobile-friendly typography overrides for this page only
const NotFoundHeading = styled(Heading2)`
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const NotFoundParagraph = styled(Paragraph)`
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
const HideOnMobile = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

// CSS-only background scene (moon, clouds, long tree)
const NightLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  color: ${GHOST_TINT};
  transform: translateY(-100px);
  transform-origin: top right;
  @media (max-width: 600px) {
    transform: translateY(-100px) scale(0.8);
  }
`;

// Shooting star: brief streak across the sky every cycle
const shootingTravel = keyframes`
  /* Straight diagonal: start off-screen top-middle, exit off left */
  0%   { transform: translate(60vw, -18vh); opacity: 0; }
  2%   { opacity: 1; }
  98%  { opacity: 1; }
  100% { transform: translate(-24vw, 24vh); opacity: 0; }
`;

// (mobile shooting star travel removed; star is hidden on mobile)

// Alternate path for variety
const shootingTravelB = keyframes`
  0%   { transform: translate(58vw, -6vh); opacity: 0; }
  68%  { transform: translate(30vw, 4vh);  opacity: 0; }
  72%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translate(-30vw, 20vh); opacity: 0; }
`;

const ShootingStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  pointer-events: none;
  z-index: -1; /* behind every element on the page */
  opacity: 0;
  animation: ${(props) =>
      props.$variant === "b" ? shootingTravelB : shootingTravel}
    var(--dur, 5s) linear infinite var(--delay, 0s);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: var(--tail, 120px);
    height: 2px;
    border-radius: 2px;
    /* Tail fades away from the head in the direction of travel */
    background: linear-gradient(90deg, ${GHOST_TINT}EE, ${GHOST_TINT}00);
    box-shadow:
      0 0 6px rgba(255, 245, 200, 0.45),
      0 0 14px rgba(255, 245, 200, 0.25);
    transform-origin: left center;
    transform: rotate(var(--angle, -20deg));
  }
  @media (max-width: 600px) {
    /* Hide on mobile */
    display: none;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

// Moon with a gentle shining halo
const Moon = styled.div`
  position: absolute;
  top: 6%;
  right: 8%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  /* Explicit moon disc color to avoid theme bleed */
  background: ${GHOST_TINT};
  /* Fully opaque to avoid dark edge blending */
  opacity: 1;
  /* Always behind clouds */
  z-index: 0;
  /* Remove harsh inner border/shadow */
  /* White outline to fully cover any dark seam */
  /* Seam liner + warm outline */
  box-shadow:
    0 0 0 1px ${GHOST_TINT},
    0 0 0 2px rgba(255, 245, 200, 0.55);
  /* Fill edge with warm drop-shadow to avoid dark ring */
  filter: drop-shadow(0 0 6px rgba(255, 245, 200, 0.35))
    drop-shadow(0 0 18px rgba(255, 245, 200, 0.2));
  /* Allow hover to toggle glow */
  pointer-events: auto;
  /* Additional -30px beyond NightLayer to achieve -50px more from current */
  transform: translateY(-30px);
  /* Soft white outer glow (shadow) */
  &::before {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    pointer-events: none;
    /* Warmer, slightly yellow glow */
    box-shadow:
      0 0 22px 8px rgba(255, 245, 200, 0.3),
      0 0 64px 22px rgba(255, 245, 200, 0.16);
    opacity: 0.9;
    transition: opacity 200ms ease;
  }
  &::after {
    content: "";
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    /* Warmer ambient halo with soft falloff reaching closer to the edge */
    background: radial-gradient(
      closest-side,
      rgba(255, 245, 200, 0.24) 58%,
      rgba(255, 245, 200, 0.14) 78%,
      transparent 96%
    );
    animation: ${keyframes`
      0% { opacity: 0.25; transform: scale(0.98); }
      50% { opacity: 0.4; transform: scale(1.03); }
      100% { opacity: 0.25; transform: scale(0.98); }
    `} 8s ease-in-out infinite;
    transition: opacity 200ms ease;
  }
  &:hover::before {
    opacity: 0;
  }
  &:hover::after {
    opacity: 0;
    animation: none;
  }
  &:hover {
    filter: none;
  }
  @media (max-width: 600px) {
    width: 52px;
    height: 52px;
  }
`;

const Cloud = styled.div`
  position: absolute;
  background: ${CLOUD_COLOR};
  opacity: 1; /* solid fill */
  border-radius: 20px;
  /* flat single-color cloud, no internal shading */
  box-shadow: none;
  /* Do not block moon hover even when layered above */
  pointer-events: none;
  /* Always above the moon */
  z-index: 2;
  /* Position props */
  ${(p) =>
    p.$top !== undefined &&
    css`
      top: ${typeof p.$top === "number" ? `${p.$top}%` : p.$top};
    `}
  ${(p) =>
    p.$left !== undefined &&
    css`
      left: ${typeof p.$left === "number" ? `${p.$left}%` : p.$left};
    `}
  ${(p) =>
    p.$right !== undefined &&
    css`
      right: ${typeof p.$right === "number" ? `${p.$right}%` : p.$right};
    `}
  /* Size props */
  ${(p) =>
    p.$w !== undefined &&
    css`
      width: ${p.$w}px;
    `}
  ${(p) =>
    p.$h !== undefined &&
    css`
      height: ${p.$h}px;
    `}
  /* Optional glow to show moonlight on the cloud's edge */
  ${(p) =>
    p.$glow &&
    css`
      filter: drop-shadow(6px 0 14px rgba(255, 245, 200, 0.18))
        drop-shadow(0 0 28px rgba(255, 245, 200, 0.12));
    `}
  ${(props) =>
    props.$duration &&
    css`
      animation: ${cloudDrift} ${props.$duration}s ease-in-out infinite;
    `}
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${CLOUD_COLOR};
    border-radius: 50%;
  }
  &::before {
    width: 30px;
    height: 30px;
    left: 18px;
    top: -10px;
    box-shadow:
      22px 6px 0 0 ${CLOUD_COLOR},
      44px -4px 0 2px ${CLOUD_COLOR},
      64px 2px 0 -2px ${CLOUD_COLOR};
  }
  &::after {
    width: 22px;
    height: 22px;
    right: 26px;
    top: -6px;
    box-shadow:
      -18px 4px 0 0 ${CLOUD_COLOR},
      -36px -2px 0 2px ${CLOUD_COLOR};
  }
  @media (max-width: 600px) {
    border-radius: 16px;
    ${(p) =>
      p.$mobileLeft !== undefined &&
      css`
        left: ${typeof p.$mobileLeft === "number"
          ? `${p.$mobileLeft}%`
          : p.$mobileLeft};
        right: auto;
      `}
    ${(p) =>
      p.$mobileRight !== undefined &&
      css`
        right: ${typeof p.$mobileRight === "number"
          ? `${p.$mobileRight}%`
          : p.$mobileRight};
        left: auto;
      `}
    ${(p) =>
      p.$mw !== undefined &&
      css`
        width: ${p.$mw}px;
      `}
    ${(p) =>
      p.$mh !== undefined &&
      css`
        height: ${p.$mh}px;
      `}
    &::before {
      width: 24px;
      height: 24px;
    }
    &::after {
      width: 18px;
      height: 18px;
    }
  }
`;

// Very slow cloud drift
const cloudDrift = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(18px); }
  100% { transform: translateX(0); }
`;

// Gentle grass sway
const grassSway = keyframes`
  0% { transform: translateY(0) skewX(0deg); }
  50% { transform: translateY(-0.8px) skewX(-1deg); }
  100% { transform: translateY(0) skewX(0deg); }
`;

// Grass strip along the road edge
const Grass = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 12px);
  height: 12px;
  z-index: 3;
  pointer-events: none;
  background:
    repeating-linear-gradient(
      -70deg,
      ${GHOST_TINT}2A 0 2px,
      transparent 2px 6px
    ),
    repeating-linear-gradient(70deg, ${GHOST_TINT}22 0 2px, transparent 2px 6px);
  animation: ${grassSway} 5.6s ease-in-out infinite;
  @media (max-width: 600px) {
    height: 10px;
    bottom: calc(100% + 10px);
  }
`;

// Fireflies
const flyFlicker = keyframes`
  0%, 100% { opacity: 0.5; filter: blur(0px); }
  50%      { opacity: 1;   filter: blur(0.6px); }
`;

const flyDrift = keyframes`
  0%   { transform: translate(0, 0); }
  33%  { transform: translate(3px, -2px); }
  66%  { transform: translate(-2px, -1px); }
  100% { transform: translate(0, 0); }
`;

const Firefly = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${GHOST_TINT};
  box-shadow:
    0 0 8px ${GHOST_TINT}AA,
    0 0 16px rgba(255, 245, 200, 0.35);
  pointer-events: none;
  animation:
    ${flyFlicker} var(--fDur, 3.6s) ease-in-out infinite var(--fDelay, 0s),
    ${flyDrift} var(--dDur, 7s) ease-in-out infinite var(--dDelay, 0s);
  @media (prefers-reduced-motion: reduce) {
    animation: ${flyFlicker} 4s ease-in-out infinite;
  }
`;

const FirefliesLayer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(100% + 14px);
  height: 26px; /* room to wander above grass */
  z-index: 3; /* with grass/rocks */
  pointer-events: none;
`;

// CardContainer draws the road exactly as wide as the card via a pseudo-element
const CardContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(100% + 0px);
    height: 10px;
    background: ${GHOST_TINT}26;
    border-radius: 8px;
    z-index: 2;
    pointer-events: none;
  }
`;

// Rocks on the road
const RoadRock = styled.div`
  position: absolute;
  bottom: 0;
  background: ${GHOST_TINT}66;
  border-radius: 55% 45% 25% 25% / 70% 70% 20% 20%;
  transform: skewX(-6deg) rotate(-2deg);
  &::before {
    content: "";
    position: absolute;
    left: 14%;
    top: 10%;
    width: 46%;
    height: 28%;
    background: ${GHOST_TINT}22;
    border-radius: 50%;
    filter: blur(0.5px);
  }
  @media (max-width: 600px) {
    transform: skewX(-6deg) rotate(-2deg) scale(0.9);
  }
`;

const Pebble = styled.div`
  position: absolute;
  bottom: 1px;
  width: 6px;
  height: 4px;
  border-radius: 60% 40% 40% 40% / 70% 60% 40% 40%;
  background: ${GHOST_TINT}88;
  transform: rotate(-12deg);
`;

// Subtle parallax shimmy for rocks
const rockParallax = keyframes`
  0% { transform: translateX(0) skewX(-6deg) rotate(-2deg); }
  50% { transform: translateX(2px) skewX(-6deg) rotate(-2deg); }
  100% { transform: translateX(0) skewX(-6deg) rotate(-2deg); }
`;

const ParallaxRock = styled(RoadRock)`
  animation: ${rockParallax} ${(props) => props.$duration || 9}s ease-in-out
    infinite;
  ${(p) =>
    p.$left !== undefined &&
    css`
      left: ${typeof p.$left === "number" ? `${p.$left}%` : p.$left};
    `}
  ${(p) =>
    p.$width !== undefined &&
    css`
      width: ${p.$width}px;
    `}
  ${(p) =>
    p.$height !== undefined &&
    css`
      height: ${p.$height}px;
    `}
  @media (max-width: 600px) {
    ${(p) =>
      p.$mLeft !== undefined &&
      css`
        left: ${typeof p.$mLeft === "number" ? `${p.$mLeft}%` : p.$mLeft};
      `}
    ${(p) =>
      p.$mWidth !== undefined &&
      css`
        width: ${p.$mWidth}px;
      `}
    ${(p) =>
      p.$mHeight !== undefined &&
      css`
        height: ${p.$mHeight}px;
      `}
  }
`;

// Scene offset container to shift everything downward
const SceneOffset = styled.div`
  position: relative;
  width: 100%;
  transform: translateY(90px);
`;

// Additional offset for all non-sky elements (card, ghost, rocks, grass)
const ExtraOffset = styled.div`
  position: relative;
  width: 100%;
  transform: translateY(100px);
  transform-origin: bottom center;
  /* No scaling on mobile to keep text crisp */
`;

// (layer toggle control removed)

const NotFound = () => {
  const navigate = useNavigate();
  const canGoBack =
    typeof window !== "undefined" &&
    window.history &&
    window.history.length > 1;

  // Ghost interactivity
  const [eyesOffset, setEyesOffset] = useState(0);
  const [hovered, setHovered] = useState(false);
  // Fixed layering: moon behind, clouds in front

  // Keyboard shortcuts: Backspace or Alt+Left to go back
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!canGoBack) return;
      const isBack =
        e.key === "Backspace" || (e.altKey && e.key === "ArrowLeft");
      if (isBack) {
        e.preventDefault();
        navigate(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [canGoBack, navigate]);

  return (
    <Wrapper>
      <SceneOffset>
        <NightLayer aria-hidden="true">
          <Moon />
          {/* Clouds with slow drift */}
          <Cloud
            $duration={36}
            $top="16%"
            $left="14%"
            $w={160}
            $h={34}
            $mobileLeft="0"
            $mw={136}
            $mh={30}
          />
          {/* Right cloud layered above moon for partial occlusion */}
          <Cloud
            $duration={48}
            $glow
            $top="6%"
            $right="6%"
            $w={240}
            $h={46}
            $mobileRight="4%"
            $mw={200}
            $mh={40}
          />
          {/* Continuous shooting star: starts immediately and loops with no gaps */}
          <ShootingStar
            style={{
              "--dur": "5.2s",
              "--delay": "0s",
              "--tail": "120px",
              "--angle": "-18deg",
            }}
          />
        </NightLayer>
        <ExtraOffset>
          <LandingMidi>
            <CardContainer>
              {/* Grass along the road edge */}
              <Grass />
              {/* Fireflies near the grass */}
              <FirefliesLayer>
                <Firefly
                  style={{
                    left: "38%",
                    bottom: "6px",
                    "--fDur": "3.2s",
                    "--dDur": "6.5s",
                  }}
                />
                <Firefly
                  style={{
                    left: "53%",
                    bottom: "10px",
                    "--fDur": "3.8s",
                    "--dDur": "7.2s",
                    "--fDelay": "0.6s",
                  }}
                />
                <Firefly
                  style={{
                    left: "66%",
                    bottom: "4px",
                    "--fDur": "3.4s",
                    "--dDur": "6.8s",
                    "--dDelay": "0.3s",
                  }}
                />
              </FirefliesLayer>
              {/* Ghost above the card, standing on the road */}
              <ArtWrap
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "calc(100% + 12px)",
                }}
              >
                <div>
                  <Float>
                    <div>
                      <Sway>
                        <Rotator
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => {
                            setHovered(false);
                            setEyesOffset(0);
                          }}
                          onMouseMove={(e) => {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const ratio = Math.max(
                              0,
                              Math.min(1, x / rect.width),
                            );
                            setEyesOffset((ratio - 0.5) * 6); // -3..3 px
                          }}
                          style={{
                            transform: hovered
                              ? "rotate(1deg)"
                              : "rotate(-3deg)",
                          }}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M50 14c-14 0-24 10.5-24 26v22c0 2.2 2.5 3.1 4 1.7l3-2.8 3 2.8c1.4 1.3 3.6 1.3 5 0l3-2.8 3 2.8c1.4 1.3 3.6 1.3 5 0l3-2.8 3 2.8c1.5 1.4 4 .5 4-1.7V40c0-15.5-10-26-24-26z"
                              fill="currentColor"
                              fillOpacity="0.1"
                              stroke="currentColor"
                              strokeOpacity="0.6"
                              strokeWidth="1.5"
                            />
                            {/* Eyebrows: cute + clueless by default (asymmetric), lift on hover */}
                            <g
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0.65"
                            >
                              <path
                                d={
                                  hovered
                                    ? "M36 36 Q 41 32 46 36"
                                    : "M35 38 Q 41 39 47 38"
                                }
                              />
                              <path
                                d={
                                  hovered
                                    ? "M54 36 Q 59 32 64 36"
                                    : "M54 36.5 Q 59 35 64 36.5"
                                }
                              />
                            </g>
                            {/* Eyes: white sclera, dark pupils, subtle highlights (with blink) */}
                            <g transform={`translate(${eyesOffset}, 2)`}>
                              {/* white sclera */}
                              <ellipse
                                cx="41"
                                cy="42"
                                rx="5.2"
                                ry="5.4"
                                fill="#ffffff"
                                style={{ transformOrigin: "41px 42px" }}
                              >
                                <animate
                                  attributeName="ry"
                                  values="5.4;1;5.4"
                                  dur="4s"
                                  repeatCount="indefinite"
                                  begin="0.2s"
                                />
                              </ellipse>
                              <ellipse
                                cx="59"
                                cy="42"
                                rx="5.2"
                                ry="5.4"
                                fill="#ffffff"
                                style={{ transformOrigin: "59px 42px" }}
                              >
                                <animate
                                  attributeName="ry"
                                  values="5.4;1;5.4"
                                  dur="4s"
                                  repeatCount="indefinite"
                                  begin="0.3s"
                                />
                              </ellipse>
                              {/* pupils */}
                              <circle cx="41" cy="42" r="2.1" fill="#0a0a0d" />
                              <circle cx="59" cy="42" r="2.1" fill="#0a0a0d" />
                              {/* highlights */}
                              <circle
                                cx="39.8"
                                cy="40.4"
                                r="0.7"
                                fill="#ffffff"
                                fillOpacity="0.95"
                              />
                              <circle
                                cx="57.8"
                                cy="40.4"
                                r="0.7"
                                fill="#ffffff"
                                fillOpacity="0.95"
                              />
                            </g>
                            {/* Mouth removed per request */}
                            {/* Sparkles */}
                            <circle
                              cx="18"
                              cy="30"
                              r="1.5"
                              fill="currentColor"
                              fillOpacity="0.6"
                            >
                              <animate
                                attributeName="opacity"
                                values="0.2;1;0.2"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle
                              cx="82"
                              cy="28"
                              r="1.2"
                              fill="currentColor"
                              fillOpacity="0.6"
                            >
                              <animate
                                attributeName="opacity"
                                values="0.2;1;0.2"
                                dur="3.2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle
                              cx="14"
                              cy="58"
                              r="1.2"
                              fill="currentColor"
                              fillOpacity="0.5"
                            >
                              <animate
                                attributeName="opacity"
                                values="0.2;1;0.2"
                                dur="2.8s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          </svg>
                        </Rotator>
                      </Sway>
                    </div>
                  </Float>
                </div>
              </ArtWrap>
              {/* Card content */}
              <Card>
                <NotFoundHeading style={{ marginTop: 0 }}>
                  Page not found
                </NotFoundHeading>
                <NotFoundParagraph>
                  The page you’re looking for doesn’t exist or has been moved.
                  <HideOnMobile>
                    {" "}
                    You can return to the previous page or head back home.
                  </HideOnMobile>
                </NotFoundParagraph>
                <Actions>
                  {canGoBack ? (
                    <>
                      <GhostButton type="button" onClick={() => navigate(-1)}>
                        <IconArrowLeft size={16} style={{ marginRight: 6 }} />
                        Go back
                      </GhostButton>
                      <Button to="/">Go to Home</Button>
                    </>
                  ) : (
                    <Button to="/">Go to Home</Button>
                  )}
                </Actions>
              </Card>
              {/* Road rocks and pebble positioned relative to road width */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "calc(100% + 12px)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{ position: "relative", width: "100%", height: 12 }}
                >
                  {/* Middle rock slightly bigger than big rock, fixed positions */}
                  <ParallaxRock
                    $duration={11}
                    $left={46}
                    $width={32}
                    $height={16}
                    $mLeft={40}
                    $mWidth={28}
                    $mHeight={14}
                  />
                  <ParallaxRock
                    $duration={13}
                    $left={56}
                    $width={30}
                    $height={18}
                    $mLeft={58}
                    $mWidth={26}
                    $mHeight={16}
                  />
                  <Pebble style={{ left: "66%" }} />
                </div>
              </div>
              {canGoBack && (
                <Tip>Tip: Press Backspace or Alt + Left Arrow to go back</Tip>
              )}
              {/* Fixed layering: moon behind, clouds in front */}
            </CardContainer>
          </LandingMidi>
        </ExtraOffset>
      </SceneOffset>
    </Wrapper>
  );
};

export { NotFound };
