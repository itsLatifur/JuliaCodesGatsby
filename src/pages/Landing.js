import React from "react";
import QUERIES, {
  Main,
  Midi,
  Heading,
  Full,
  Image,
  Paragraph,
  Heading2,
  Heading3,
  LandingMidi,
  ImageProj,
} from "../theming/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  margin: 200px auto;
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
      <LandingMidi style={{ mixBlendMode: "difference", paddingTop: 64 }}>
        <Heading
          style={{
            mixBlendMode: "difference",
            color: "white",
          }}
        >
          I'm Latifur Rahman — a Technical Product Designer crafting elegant,
          scalable design.
        </Heading>
      </LandingMidi>

      <Midi style={{ paddingTop: "84px", margin: "0 auto" }}>
        <Heading2 id="experience">Experience</Heading2>
        <Experience experiences={experiences} />
      </Midi>

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
            mixBlendMode: "difference",
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
            mixBlendMode: "difference",
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
            mixBlendMode: "difference",
            color: "white",
            opacity: 0.4,
          }}
        >
          Led research & design to solve content staleness problems
        </Paragraph>
      </LandingMidi>
      <LandingMidi style={{ paddingTop: 20, margin: "0 auto" }}>
        <ProjectVideo
          name="Redesigning B2B Signup"
          image={NewVid}
          url="marketing-site"
          description="Reimagining the signup flow for Atmosphere TV"
        />
      </LandingMidi>

      <LandingMidi style={{ paddingTop: 32 }}>
        <Collage />
      </LandingMidi>

      <LandingMidi style={{ marginBottom: "10px" }}>
        <Foot />
      </LandingMidi>
    </Main>
  );
};

export { Landing };
