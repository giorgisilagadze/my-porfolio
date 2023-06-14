import styled from "styled-components";
import Link from "next/link";

interface Styles {
  menu?: boolean;
  opa?: string;
  display?: string;
  just?: string;
  bg?: string;
}

export const FixedHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99;
`;

export const StyledHeader = styled.header<Styles>`
  display: flex;
  justify-content: ${({ just }) => just};
  align-items: center;
  background-color: ${({ bg }) => bg};
  padding: 16px 24px;
  width: 100%;

  @media (min-width: 540px) {
    gap: 205px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    height: 80px;
    transition: 0.3s;
    gap: 330px;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    gap: 560px;
  }
`;

export const Iconhamb = styled.img`
  filter: invert(100%) sepia(3%) saturate(2%) hue-rotate(345deg)
    brightness(504%) contrast(100%);
  width: 20px;
  height: 20px;
  z-index: 103;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const Menu = styled.div<Styles>`
  @keyframes menu {
    0% {
      top: 80px;
    }
    100% {
      top: 64px;
    }
  }
  position: fixed;
  min-width: 327px;
  max-width: 768px;
  height: 700px;
  border: 2px solid #343535;
  top: 64px;
  left: 24px;
  right: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  z-index: 102;
  animation: menu 0.5s;
  padding: 4px 24px 24px;
`;

export const Background = styled.div<Styles>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${({ menu }) => (menu ? 0.9 : 0)};
  display: ${({ menu }) => (menu ? "block" : "none")};
  transition: opacity 1s ease;
  z-index: 100;
`;

export const PageName = styled.p<Styles>`
  font-weight: 400;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  color: white;
  margin-top: 20px;
  opacity: ${({ opa }) => opa};

  &::after {
    content: "";
    display: ${({ display }) => display};
    width: 25px;
    border-bottom: 2px solid #18d26e;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const HeaderName = styled.h1`
  @keyframes top {
    0% {
      margin-top: 300px;
    }

    100% {
      margin-top: 0px;
    }
  }

  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: white;
  margin-top: 0px;
  animation: top 0.3s;

  @media (min-width: 540px) {
    margin-left: -20px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 40px;
    transition: 0.3s;
    margin-left: 0px;
  }
`;
