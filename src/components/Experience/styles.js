import styled from "styled-components";

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 24px 0 0;
`;

export const ExperienceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ExperienceYears = styled.div`
  min-width: 180px;
  text-align: left;

  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const ExperienceDetails = styled.div`
  flex: 1;
`;
