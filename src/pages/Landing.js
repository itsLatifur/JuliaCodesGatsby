import React from "react";
import QUERIES, {
  Main,
  Midi,
  Heading,
  Full,
  Paragraph,
  Heading2,
  Heading3,
  LandingMidi,
  ImageProj,
} from "../theming/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { personalData, experiencesData, collageItems } from "../data";
import {
  Nav,
  Foot,
  Project,
  ProjectVideo,
  Collage,
  Experience,
} from "../components";
import { Spread } from "../components/switch/styles";
import { NewVid, Thumb } from "../images";

const Card = styled(Midi)`
  /* On mobile, cards have no special styling */
  padding: 0;
  padding-bottom: ${(props) => (props.noBottomPadding ? "0" : "24px")};
  &:not(:first-of-type) {
    margin: 24px auto 0;
  }
  &.hero-card {
    margin: 24px auto 0;
  }

  /* On tablet and larger, re-introduce card styles but reduce top/bottom padding */
  @media (min-width: 768px) {
    padding: 8px 24px 8px 24px;
    border-radius: 8px;
    border: 1px solid
      ${(props) =>
        props.mode === "dark"
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.1)"};
    padding-bottom: ${(props) => (props.noBottomPadding ? "0" : "8px")};
    &:not(:first-of-type) {
      margin: 32px auto 0;
    }
    &.hero-card {
      margin: 32px auto 0;
    }
  }

  @media (${QUERIES.large}) {
    padding: 8px 40px 8px 40px;
    padding-bottom: ${(props) => (props.noBottomPadding ? "0" : "8px")};
    &:not(:first-of-type) {
      margin: 48px auto 0;
    }
    &.hero-card {
      margin: 48px auto 0;
    }
  }
`;

const HeroGrid = styled.div`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: 1fr;

  /* Dynamically set columns based on image visibility */
  &.with-image {
    @media (${QUERIES.large}) {
      gap: 40px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const HeroText = styled.div`
  color: white;
  mix-blend-mode: difference;

  /* On mobile, go to the first row */
  grid-row: 1;

  /* On desktop, go to the first column in the first row */
  @media (${QUERIES.large}) {
    grid-row: 1;
    grid-column: 1 / 2;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid white;
  margin: 0 auto;
  display: block;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const StyledButton = styled.a`
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  font-size: 14px;
  text-align: center;
  flex-grow: 1;
  border: 1px solid;
  background-color: ${({ className, theme }) =>
    className && className.includes("primary")
      ? theme.textMain
      : "transparent"};
  color: ${({ className, theme }) =>
    className && className.includes("primary") ? theme.main : theme.textMain};
  border-color: ${({ theme }) => theme.textMain};
  ${({ mode }) =>
    mode === "light" &&
    `
      mix-blend-mode: difference;
    `}

  &:hover {
    background-color: ${({ className, theme }) =>
      className && className.includes("primary")
        ? theme.textMain + "CC"
        : theme.textMain + "22"};
    color: ${({ className, theme }) =>
      className && className.includes("primary") ? theme.main : theme.textMain};
  }

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: initial;
    flex-grow: 0;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 48px;
    margin-top: 48px;
  }
`;

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
  const spreadClass =
    spread === "first" ? "growBlack" : spread === "second" ? "growWhite" : "";

  return (
    <Main
      style={{
        position: "relative",
        height: setDisableScroll ? "100vh" : "unset",
      }}
    >
      <Spread className={spreadClass} />
      <Nav mode={mode} toggleMode={toggleMode} />
      {/* --- NEW HERO STRUCTURE --- */}
      <Card mode={mode} className="hero-card">
        <LandingMidi
          style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 36 }}
        >
          <HeroGrid>
            {/* Text Column */}
            <HeroText>
              <Heading
                style={{
                  fontWeight: 500,
                  marginBottom: "16px",
                  marginTop: "0",
                  paddingTop: "0",
                }}
              >
                {personalData.name}
              </Heading>
              {personalData.role.map((role, index) => (
                <Heading2
                  key={index}
                  style={{
                    fontSize: "20px",
                    fontWeight: 400,
                    marginBottom: "4px",
                  }}
                >
                  {role}
                </Heading2>
              ))}
              <Paragraph style={{ marginTop: "24px" }}>
                {personalData.description}
              </Paragraph>
              <ButtonGroup>
                <StyledButton
                  href="#case-studies"
                  className="primary"
                  mode={mode}
                >
                  View Projects
                </StyledButton>
                <StyledButton
                  href={personalData.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary"
                  mode={mode}
                >
                  View Resume
                </StyledButton>
              </ButtonGroup>
            </HeroText>

            {/* Intentionally no image in hero; About section handles profile image */}
          </HeroGrid>
        </LandingMidi>
      </Card>
      {/* --- END HERO STRUCTURE --- */}

      {/* Experience Section Card */}
      {personalData.showExperiences && (
        <Card mode={mode}>
          <LandingMidi
            style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
          >
            <Heading2 id="experience">Experience</Heading2>
            <Experience experiences={experiencesData} />
          </LandingMidi>
        </Card>
      )}

      {/* Case Studies & Projects Card */}
      <Card mode={mode} noBottomPadding>
        {/* Main Title */}
        <div style={{ color: "white" }}>
          <LandingMidi
            style={{
              margin: "0 auto",
              paddingBottom: 0,
              paddingTop: 36,
            }}
          >
            <Heading2 id="case-studies">Case studies</Heading2>
          </LandingMidi>
        </div>

        <ProjectsWrapper>
          {/* --- Project 1 --- */}
          <LandingMidi style={{ margin: "0 auto" }}>
            {/* Image container without blend mode */}
            <Link to="schedule">
              <ImageProj $image={Thumb} />
            </Link>
            {/* Text container with blend mode */}
            <div
              style={{
                color: "white",
                paddingTop: "0px",
                paddingLeft: "0px",
              }}
            >
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
                <StyledLink to="schedule">
                  Content Variety & Scheduling
                </StyledLink>
              </Heading3>
              <Paragraph
                style={{
                  marginTop: "-4px",
                  opacity: 0.4,
                }}
              >
                Led research & design to solve content staleness problems
              </Paragraph>
            </div>
          </LandingMidi>

          {/* --- Project 2 --- */}
          <LandingMidi style={{ margin: "0 auto" }}>
            <ProjectVideo
              name="Redesigning B2B Signup"
              image={NewVid}
              url="marketing-site"
              description="Reimagining the signup flow for Atmosphere TV"
            />
          </LandingMidi>
        </ProjectsWrapper>
      </Card>

      {/* About Section Card (below Case Studies, above Collage) */}
      <Card mode={mode}>
        <LandingMidi style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Heading2 id="about">About</Heading2>
          <HeroGrid
            className={personalData.showProfileImage ? "with-image" : ""}
          >
            {/* Text column mimics previous hero text styling */}
            <HeroText>
              <Paragraph style={{ marginTop: 0 }}>
                {personalData.bio || personalData.description}
              </Paragraph>
            </HeroText>

            {/* Image column appears only when flag is on */}
            {personalData.showProfileImage && (
              <HeroImage
                src={personalData.profileImage}
                alt={personalData.name}
              />
            )}
          </HeroGrid>
        </LandingMidi>
      </Card>

      {/* Collage section without a card */}
      {personalData.showCollage !== false &&
        collageItems.filter?.((i) => i?.visible !== false).length > 0 && (
          <LandingMidi
            style={{
              paddingTop: 20,
            }}
          >
            <Collage />
          </LandingMidi>
        )}

      <LandingMidi style={{ marginBottom: "10px" }}>
        <Foot />
      </LandingMidi>
    </Main>
  );
};

export { Landing };
