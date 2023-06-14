import styled from "styled-components";
import { motion } from "framer-motion";
import { CVButt, CVButton, StyledAbout } from "./About.Styled";

interface Styles {
  bg?: string;
  bgc?: string;
  bgch?: string;
}

export const Project = styled(motion.img)`
  width: 100%;
  min-height: 236px;
  margin: 30px auto 0px;
  display: block;
  border-radius: 5px;
  position: relative;
`;

export const ProjectCont = styled(motion.div)<Styles>`
  width: 100%;
  height: 63vw;
  max-height: 320px;
  margin: 30px auto 0px;
  border-radius: 5px;
  background-image: url(${({ bg }) => bg});
  background-size: 100% 100%;
  position: relative;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 315px;
    height: 238px;
  }

  @media (min-width: 1000px) {
    width: 280px;
    height: 212px;
  }

  @media (min-width: 1440px) {
    width: 390px;
    height: 303px;
  }
`;

export const ProjectDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Frame = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-top: 5px solid white;
  border-left: 5px solid white;
`;

export const FrameBott = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
`;

export const MidDiv = styled.div`
  position: absolute;
  height: 50px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProjectName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: white;
  text-align: center;
`;
export const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;

export const CategoryDiv = styled(LinksDiv)`
  gap: 10px;
  margin-top: 20px;
`;

export const SingleCategoryDiv = styled.div<Styles>`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: white;
  background-color: ${({ bgc }) => bgc};

  @media (min-width: 1000px) {
    cursor: pointer;
    &:hover {
      background-color: ${({ bgch }) => bgch};
      transition: 0.5s;
    }
  }
`;

export const VisitGithub = styled(CVButt)`
  font-size: 14px;
  line-height: 18px;
  background-color: rgba(255, 255, 255, 0.1);

  @media (min-width: 1000px) {
    cursor: pointer;
    &:hover {
      background-color: #18d26e;
      transition: 1s;
    }
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
`;

export const FromTabDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
  }
`;

export const GitButt = styled(CVButton)`
  width: 210px;
`;
