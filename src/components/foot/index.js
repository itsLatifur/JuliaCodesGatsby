import React from "react";
import { FootCont, FootFinal, FinalLeft, FinalRight } from "./styles";
import { Paragraph } from "../../theming/styles";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Foot = () => {
  return (
    <FootCont>
      <FootFinal>
        <FinalLeft>
          <Paragraph>© Latifur Rahman</Paragraph>
        </FinalLeft>
        <FinalRight>
          <a
            href="mailto: itslatifur@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Email <FaEnvelope style={{ marginLeft: "4px" }} />
            </Paragraph>
          </a>
          <a
            href="https://www.linkedin.com/in/latifur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              LinkedIn <FaLinkedin style={{ marginLeft: "4px" }} />
            </Paragraph>
          </a>
          <a
            href="https://github.com/itsLatifur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              GitHub <FaGithub style={{ marginLeft: "4px" }} />
            </Paragraph>
          </a>
        </FinalRight>
      </FootFinal>
    </FootCont>
  );
};

export { Foot };
