import React from "react";
import QUERIES, {
  Main,
  Midi,
  Heading,
  Paragraph,
  Heading2,
} from "../theming/styles";
import styled from "styled-components";
import { Nav, Foot } from "../components";
import { Spread } from "../components/switch/styles";

const Wordsmaster = ({ toggleMode, mode, spread, setDisableScroll }) => {
  const spreadClass =
    spread === "first" ? "growBlack" : spread === "second" ? "growWhite" : "";

  return (
    <Main
      style={{
        position: "relative",
        overflow: setDisableScroll ? "hidden" : "null",
        height: setDisableScroll ? "100vh" : "unset",
      }}
    >
      <Spread className={spreadClass} />
      <Nav mode={mode} toggleMode={toggleMode} />
      <Midi>
        <Heading style={{ marginBottom: 16 }}>
          WordsMaster: Word Guessing Game
        </Heading>
        <Paragraph style={{ opacity: 0.9 }}>
          This page will host the documentation, tech stack, decisions, and
          demos for WordsMaster. We can expand this to a full case study later.
        </Paragraph>

        <Heading2 style={{ marginTop: 24 }}>Links</Heading2>
        <ul>
          <li>
            <a
              href="https://github.com/itsLatifur/WordMaster"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </li>
          <li>
            <a
              href="https://wordsmaster.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </li>
        </ul>
      </Midi>
      <Midi>
        <Foot />
      </Midi>
    </Main>
  );
};

export { Wordsmaster };
