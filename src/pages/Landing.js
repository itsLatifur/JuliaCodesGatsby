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

const Split = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
  flex-wrap: wrap;

  > * {
    width: 100%;

    @media (${QUERIES.large}) {
      width: calc(50% - 20px);
    }
  }
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
      {/* Use the existing Midi component to ensure alignment with other sections */}
      <Midi style={{ paddingTop: "120px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Column 1: Text with blend mode */}
          <div
            style={{
              gridColumn: "1 / 2",
              mixBlendMode: "difference",
              color: "white",
            }}
          >
            <Heading>{personalData.role}</Heading>
            <Paragraph style={{ marginTop: "20px" }}>
              {personalData.description}
            </Paragraph>
          </div>

          {/* Column 2: Image without blend mode */}
          <div style={{ gridColumn: "2 / 3", gridRow: "1" }}>
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
          </div>
        </div>
      </Midi>
      {/* --- END HERO STRUCTURE --- */}
      {/* Remove the old hero section */}
      {/* Experience Section Card */}
      <Midi
        style={{
          padding: "40px",
          margin: "84px auto 0",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
          borderRadius: "8px",
        }}
      >
        <Heading2 id="experience">Experience</Heading2>
        <Experience experiences={experiences} />
      </Midi>
      {/* Case Studies & Projects Card */}
      <Midi
        style={{
          padding: "40px",
          margin: "84px auto 0",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "8px",
        }}
      >
        <LandingMidi
          style={{
            mixBlendMode: "difference",
            margin: "0 auto",
            paddingBottom: 0,
          }}
        >
          <Heading2
            id="case-studies"
            style={{
              color: "white",
            }}
          >
            Case studies
          </Heading2>
        </LandingMidi>
        <LandingMidi style={{ paddingTop: 20, margin: "0 auto" }}>
          <Link to="schedule">
            <ImageProj $image={Thumb} />
          </Link>
        </LandingMidi>
        <LandingMidi
          style={{
            mixBlendMode: "difference",
            color: "white",
            paddingTop: 0,
            margin: "0 auto",
          }}
        >
          <Heading3
            style={{
              textAlign: "left",
              margin: 0,
              padding: 0,
              color: "white",
            }}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <Link to="schedule">Content Variety & Scheduling</Link>
          </Heading3>

          <Paragraph
            style={{
              marginTop: "-4px",
              color: "white",
              opacity: 0.4,
            }}
          >
            Led research & design to solve content staleness problems
          </Paragraph>
        </LandingMidi>
        <LandingMidi style={{ paddingTop: 24, margin: "0 auto" }}>
          <ProjectVideo
            name="Redesigning B2B Signup"
            image={NewVid}
            url="marketing-site"
            description="Reimagining the signup flow for Atmosphere TV"
          />
        </LandingMidi>

        <LandingMidi
          style={{
            paddingTop: 30,
          }}
        >
          <Collage />
        </LandingMidi>
      </Midi>
      <LandingMidi style={{ marginBottom: "10px" }}>
        <Foot />
      </LandingMidi>
    </Main>
  );
};

export { Landing };
