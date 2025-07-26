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
import { personalData } from "../data";
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
  padding: 40px;
  border-radius: 8px;
  /* Use the 'mode' prop to set a border color that works for both themes */
  border: 1px solid
    ${(props) =>
      props.mode === "dark"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.1)"};

  /* Set the margin for the cards */
  &:not(:first-of-type) {
    margin: 84px auto 0;
  }
  &.hero-card {
    margin: 120px auto 0;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  align-items: center;
  gap: 40px;
  /* Mobile-first: stack columns by default */
  grid-template-columns: 1fr;

  /* On larger screens, use two columns */
  @media (${QUERIES.large}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroText = styled.div`
  mix-blend-mode: difference;
  color: white;

  /* On mobile, go to the second row */
  grid-row: 2;

  /* On desktop, go to the first column in the first row */
  @media (${QUERIES.large}) {
    grid-row: 1;
    grid-column: 1 / 2;
  }
`;

const HeroImageContainer = styled.div`
  /* On mobile, go to the first row */
  grid-row: 1;

  /* On desktop, go to the second column in the first row */
  @media (${QUERIES.large}) {
    grid-row: 1;
    grid-column: 2 / 3;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const experiences = [
  {
    years: "2024 - now",
    title: "Senior Product Designer at Atmosphere TV",
    description: "Lead designer for tv for bars & restaurants",
  },
  {
    years: "2023 - 2024",
    title: "Product Designer at Atmosphere TV",
    description: "Led design & research for customer tooling",
  },
  {
    years: "2020 - 2023",
    title: "UX Engineer at IBM",
    description: "Designed & developed tools for engineers",
  },
  {
    years: "2019 - 2020",
    title: "UI Developer at Awkward Co.",
    description: "Developing component system alongside designers",
  },
];

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
        <HeroGrid>
          {/* Text Column */}
          <HeroText>
            <Heading>{personalData.role}</Heading>
            <Paragraph style={{ marginTop: "20px" }}>
              {personalData.description}
            </Paragraph>
          </HeroText>

          {/* Image Column */}
          <HeroImageContainer>
            <img
              src={personalData.profileImage}
              alt="Latifur Rahman"
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                borderRadius: "8px",
                border: "2px solid white",
                margin: "0 auto",
                display: "block",
              }}
            />
          </HeroImageContainer>
        </HeroGrid>
      </Card>
      {/* --- END HERO STRUCTURE --- */}

      {/* Experience Section Card */}
      <Card mode={mode}>
        <Heading2 id="experience">Experience</Heading2>
        <Experience experiences={experiences} />
      </Card>

      {/* Case Studies & Projects Card */}
      <Card mode={mode}>
        {/* Text container with blend mode */}
        <div style={{ mixBlendMode: "difference", color: "white" }}>
          <LandingMidi
            style={{
              margin: "0 auto",
              paddingBottom: 0,
            }}
          >
            <Heading2 id="case-studies">Case studies</Heading2>
          </LandingMidi>
        </div>

        {/* Image container without blend mode */}
        <LandingMidi style={{ paddingTop: 20, margin: "0 auto" }}>
          <Link to="schedule">
            <ImageProj $image={Thumb} />
          </Link>
        </LandingMidi>

        {/* Text container with blend mode */}
        <div style={{ mixBlendMode: "difference", color: "white" }}>
          <LandingMidi
            style={{
              paddingTop: 0,
              margin: "0 auto",
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
          </LandingMidi>
        </div>

        {/* Image/Video container without blend mode */}
        <LandingMidi style={{ paddingTop: 24, margin: "0 auto" }}>
          <ProjectVideo
            name="Redesigning B2B Signup"
            image={NewVid}
            url="marketing-site"
            description="Reimagining the signup flow for Atmosphere TV"
          />
        </LandingMidi>
      </Card>

      {/* Collage section without a card */}
      <LandingMidi
        style={{
          paddingTop: 30,
        }}
      >
        <Collage />
      </LandingMidi>

      <LandingMidi style={{ marginBottom: "10px" }}>
        <Foot />
      </LandingMidi>
    </Main>
  );
};

export { Landing };
