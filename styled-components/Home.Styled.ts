import styled from "styled-components";
import { motion } from "framer-motion";
import { PageName } from "./Header.Styled";

interface Styles {
  gap?: string;
  z?: string;
  width?: string;
  height?: string;
  anim?: string;
}

export const StyledHome = styled(motion.div)<Styles>`
  @keyframes home {
    0% {
      margin-top: -300px;
    }

    100% {
      margin-top: 0px;
    }
  }

  height: calc(100vh - 44px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  transition: 0.5s;
  margin-top: 0px;
  animation: home 0.3s;
  overflow: hidden;

  @media (min-width: 1000px) {
    margin: 0px 4%;
    align-items: flex-start;
  }
`;

export const Name = styled(motion.h1)`
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  color: white;
  text-align: center;

  @media (min-width: 1000px) {
    font-size: 48px;
    line-height: 40px;
    text-align: start;
  }
`;

export const Hometxt = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 20px;

  @media (min-width: 1000px) {
    font-size: 24px;
    line-height: 30px;
    text-align: start;
    margin-top: 25px;
  }
`;

export const SpanProf = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-bottom: 2px solid #18d26e;

  @media (min-width: 1000px) {
    font-size: 24px;
    line-height: 30px;
    text-align: start;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CircleDiv = styled.div<Styles>`
  width: 40px;
  height: 40px;
  border: none;
  position: relative;
  border-radius: 50%;
  z-index: ${({ z }) => z};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    opacity: 0.1;
  }

  &:hover {
    cursor: pointer;
    background-color: #18d26e;
    transition: 0.5s;
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(300%)
    contrast(150%);
  position: absolute;
  top: 12.5px;
  left: 12.5px;
  z-index: 99;
`;

export const PagesDiv = styled.div`
  @media (min-width: 1000px) {
    margin-top: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
`;

export const PagesDivHead = styled(PagesDiv)`
  display: none;
  @media (min-width: 1000px) {
    margin-top: 0px;
    display: flex;
  }
`;

export const PageNameHome = styled(PageName)<Styles>`
  @keyframes line {
    0% {
      width: 0px;
    }
    100% {
      width: 25px;
    }
  }

  @keyframes opa {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  display: none;

  @media (min-width: 1000px) {
    display: block;
    font-size: 18px;
    line-height: 24px;
    margin-top: 0px;
    position: relative;

    &:hover::before {
      content: "";
      position: absolute;
      top: 24px;
      left: 0px;
      width: 25px;
      height: 2px;
      background-color: #18d26e;
      animation: line 0.5s;
    }

    &:hover {
      opacity: 1;
      animation: ${({ anim }) => anim} 0.5s;
    }
  }
`;
