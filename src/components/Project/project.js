import QUERIES, { Heading3, Paragraph } from "../../theming/styles";
import { Movie } from "../../images";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageProj = styled.div`
  margin-bottom: 18px;
  width: 100%;
  height: 290px;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  @media (${QUERIES.small}) {
    height: 400px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(p) => p.$image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    transition: filter 0.3s ease;
    @media (${QUERIES.large}) {
      background-position: center;
    }
  }
`;

const ProjWrap = styled.div`
  padding: 20px 0 40px 0;
  margin: 0;
  width: 100%;
  @media (${QUERIES.large}) {
    padding: 15px 0 32px;
  }

  &:hover ${ImageProj}::after {
    opacity: 0.6;
  }
`;

const Project = ({
  name = "Project Name",
  description = "Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ",
  url = "project",
  image = Movie,
}) => {
  return (
    <ProjWrap>
      <Link to={`/${url}`}>
        <ImageProj $image={image} />
        <Heading3
          style={{ textAlign: "left", margin: 0, padding: 0 }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <span>{name}</span>
        </Heading3>

        <Paragraph style={{ marginTop: "-4px" }}>{description}</Paragraph>
      </Link>
    </ProjWrap>
  );
};

export { Project };
