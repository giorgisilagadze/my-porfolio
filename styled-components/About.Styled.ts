import styled from "styled-components";
import { motion } from "framer-motion";

export const ParentAbout = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const StyledAbout = styled(motion.div)`
  width: 100%;
  max-width: 540px;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 94px auto 40px;
  padding: 24px 30px 60px;

  hr {
    width: 120px;
    height: 1px;
    border: none;
    background-color: #18d26e;
  }

  @media (min-width: 768px) {
    max-width: 720px;
    margin: 110px auto 40px;
  }

  @media (min-width: 1000px) {
    max-width: 960px;
    margin: 110px auto 40px;
  }

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 30px 45px 60px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #aaaaaa;
`;

export const Learn = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  color: white;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const ProfilePict = styled.img`
  width: 100%;
  min-height: 360px;
  margin: 15px auto 0px;
  display: block;
  filter: invert(0%) sepia(89%) saturate(0%) hue-rotate(257deg) brightness(108%)
    contrast(99%);

  @media (min-width: 1000px) {
    width: 285px;
    height: 320px;
  }

  @media (min-width: 1440px) {
    width: 404px;
    height: 455px;
  }
`;

export const Prof = styled(Learn)`
  font-size: 26px;
  line-height: 31.2px;
  color: #18d26e;
  margin-top: 24px;
  text-transform: none;
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
  filter: invert(81%) sepia(15%) saturate(1645%) hue-rotate(88deg)
    brightness(99%) contrast(87%);
`;

export const AbDiv = styled.div`
  margin: 16px auto 0px;

  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const AbSingleDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1000px) {
    width: 240px;
    margin-top: 5px;
  }

  @media (min-width: 1440px) {
    width: 260px;
    margin-top: 10px;
  }
`;

export const AbTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

export const AbAnsw = styled(AbTitle)`
  font-weight: 400;
`;

export const AbTxt = styled(AbAnsw)`
  margin-top: 20px;
`;

export const SkillsParent = styled.div`
  @keyframes skill-top {
    0% {
      margin-top: 200px;
      opacity: 0.1;
    }

    100% {
      margin-top: 60px;
      opacity: 1;
    }
  }

  &.animate-skills {
    animation: skill-top 2.5s;
  }
`;

export const SkillsDiv = styled.div`
  margin-top: 60px;
  width: 100%;
`;

export const TabletDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 20px;
  }

  @media (min-width: 1000px) {
    justify-content: center;
  }
`;

export const SingleSkillDiv = styled(motion.div)`
  @keyframes bgcolor {
    0% {
      background-color: rgba(255, 255, 255, 0.1);
    }
    100% {
      background-color: #18d26e;
    }
  }

  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 204px;
    margin-top: 0px;
    height: 65px;
  }

  @media (min-width: 1000px) {
    width: 284px;
    margin-top: 0px;
    height: 65px;
    cursor: pointer;

    &:hover {
      background-color: #18d26e;
    }
  }

  @media (min-width: 1440px) {
    width: 390px;
    height: 65px;
  }
`;

export const SkillIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const CVButt = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 10px;
  background-color: #18d26e;
  margin: 40px auto 0px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;

  @media (min-width: 1000px) {
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transition: 1s;
    }
  }
`;

export const CV = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

export const Download = styled.img`
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(351deg)
    brightness(400%) contrast(104%);
  margin-top: -6px;
`;

export const AboutFlexDiv = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    gap: 24px;
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

export const CvText = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &::after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
  }
`;

export const CVButton = styled.button`
  display: block;
  border-radius: 4px;
  background-color: #18d26e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 17px;
  width: 170px;
  height: 50px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 40px auto 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover ${CvText} {
    padding-right: 15px;
  }

  &:hover ${CvText}::after {
    opacity: 1;
    right: 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
