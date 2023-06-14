import { useRouter } from "next/router";
import {
  Iconhamb,
  StyledHeader,
  Menu,
  Background,
  PageName,
  StyledLink,
  HeaderName,
  FixedHeader,
} from "../styled-components/Header.Styled";
import { PagesDivHead } from "../styled-components/Home.Styled";
import { PageNameHome } from "../styled-components/Home.Styled";
import { useState, useEffect } from "react";

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

interface PageNames {
  name: string;
  link: string;
}

type arrOfPageNames = PageNames[];

export const pages: arrOfPageNames = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Header({ setMenu, menu }: Hooks) {
  const router = useRouter();
  const [location, setLocation] = useState(router.pathname);

  useEffect(() => {
    setLocation(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <FixedHeader>
        <StyledHeader
          just={location != "/" ? "space-between" : "flex-end"}
          bg={location != "/" ? "rgba(0, 0, 0, 0.7)" : ""}
        >
          {location != "/" ? <HeaderName>Giorgi Silagadze</HeaderName> : null}
          <Iconhamb
            src={
              menu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
            }
            alt="hamburger"
            onClick={() => setMenu(!menu)}
          />
          {location != "/" ? (
            <PagesDivHead>
              {pages.map((item) => (
                <StyledLink href={item.link} key={Math.random()}>
                  <PageNameHome
                    opa={location == item.link ? "1" : "0.7"}
                    display={location == item.link ? "block" : "none"}
                  >
                    {item.name}
                  </PageNameHome>
                </StyledLink>
              ))}
            </PagesDivHead>
          ) : null}

          <Background menu={menu} />
          {menu ? (
            <Menu menu={menu}>
              {pages.map((item) => (
                <StyledLink
                  href={item.link}
                  onClick={() => {
                    setMenu(!menu);
                  }}
                  key={Math.random()}
                >
                  <PageName
                    opa={location == item.link ? "1" : "0.7"}
                    display={location == item.link ? "block" : "none"}
                  >
                    {item.name}
                  </PageName>
                </StyledLink>
              ))}
            </Menu>
          ) : null}
        </StyledHeader>
      </FixedHeader>
    </>
  );
}
