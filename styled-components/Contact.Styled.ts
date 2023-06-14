import styled from "styled-components";
import { CircleDiv } from "./Home.Styled";
import { CVButton } from "./About.Styled";
import { StyledAbout } from "./About.Styled";

export const ContactDiv = styled.div`
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 315px;
    margin-top: 0px;
  }

  @media (min-width: 1000px) {
    width: 407px;
  }

  @media (min-width: 1440px) {
    width: 600px;
  }
`;

export const IconDiv = styled(CircleDiv)`
  z-index: 90;
  width: 52px;
  height: 52px;
`;

export const IconCont = styled.img`
  filter: invert(66%) sepia(76%) saturate(3285%) hue-rotate(104deg)
    brightness(106%) contrast(81%);
  position: absolute;
  top: 14px;
  left: 14px;
`;

export const TitleCont = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;
  opacity: 0.5;
`;

export const InfoCont = styled(TitleCont)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 1;
`;

export const IconLinks = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(300%)
    contrast(150%);

  &:hover {
    filter: invert(58%) sepia(67%) saturate(537%) hue-rotate(95deg)
      brightness(98%) contrast(92%);
    transition: 0.5s;
  }
`;

export const LinksDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const InputsDiv = styled(ContactDiv)`
  padding: 10px 30px 30px;
  display: block;

  @media (min-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const Textar = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 130px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  margin-top: 20px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const ContactButt = styled(CVButton)``;

export const ResultDiv = styled(ContactDiv)`
  height: 300px;
  justify-content: center;
  flex-direction: column;
  padding: 30px;

  @media (min-width: 768px) {
    margin-top: 20px;
    width: 100%;
    height: 466.5px;
  }

  @media (min-width: 1000px) {
    height: 406.5px;
  }
`;

export const ResultP = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-align: center;
`;

export const ResentP = styled(ResultP)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #18d26e;

  @media (min-width: 1000px) {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Check = styled.img`
  filter: invert(66%) sepia(76%) saturate(3285%) hue-rotate(104deg)
    brightness(106%) contrast(81%);
  width: 60px;
  height: 60px;
`;

export const ContactTab = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 20px;
  }

  @media (min-width: 1440px) {
    width: 500px;
  }
`;

export const InputFlex = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    width: 100%;
    gap: 20px;
  }
`;

export const ContactMain = styled(StyledAbout)`
  padding: 0px;
  margin: 0px;
  @media (min-width: 1440px) {
    display: flex;
    gap: 30px;
  }
`;
