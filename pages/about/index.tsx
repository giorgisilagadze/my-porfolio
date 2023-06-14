import {
  StyledAbout,
  Title,
  TitleDiv,
  Learn,
  ProfilePict,
  Prof,
  Arrow,
  AbDiv,
  AbSingleDiv,
  AbTitle,
  AbAnsw,
  ParentAbout,
  AbTxt,
  SkillsDiv,
  SingleSkillDiv,
  SkillIcon,
  CV,
  SkillsParent,
  TabletDiv,
  AboutFlexDiv,
  CVButton,
  CvText,
} from "../../styled-components/About.Styled";
import data from "../../data.json";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

export default function About() {
  const skillsRef = useRef<any>(null);
  const router = useRouter();
  console.log(router.asPath);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-skills");
        }
      });
    });

    observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <ParentAbout>
      <StyledAbout
        initial={{ marginTop: "164px", opacity: 0 }}
        animate={{ marginTop: "94px", opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        <TitleDiv>
          <Title>ABOUT</Title>
          <hr />
        </TitleDiv>
        <Learn>Learn more about me</Learn>
        <AboutFlexDiv>
          <ProfilePict src="./images/profile-copy.jpeg" />
          <div>
            <Prof>Software Engineer</Prof>
            <AbDiv>
              {data.about.map((item) => (
                <AbSingleDiv key={Math.random()}>
                  <Arrow src="./images/arrow.png" alt="" />
                  <AbTitle>{item.first}</AbTitle>
                  <AbAnsw>{item.second}</AbAnsw>
                </AbSingleDiv>
              ))}
            </AbDiv>
            <AbTxt>{data["about-text"].sum}</AbTxt>
          </div>
        </AboutFlexDiv>
        <SkillsParent ref={skillsRef}>
          <SkillsDiv>
            <TitleDiv>
              <Title>SKILLS</Title>
              <hr />
            </TitleDiv>
            <TabletDiv>
              {data.skills.map((item) => (
                <SingleSkillDiv
                  key={Math.random()}
                  initial={
                    isMobile
                      ? { marginTop: "20px" }
                      : {
                          marginTop: "0px",
                        }
                  }
                  whileHover={
                    isMobile
                      ? { marginTop: "20px" }
                      : {
                          marginTop: "-10px",
                        }
                  }
                  transition={{ type: "spring", stiffness: 200, duration: 1 }}
                >
                  <SkillIcon src={item.src} alt="skill-icon" />
                  <AbTitle>{item.skill}</AbTitle>
                </SingleSkillDiv>
              ))}
            </TabletDiv>
          </SkillsDiv>
        </SkillsParent>
        <CV href="../../CV.pdf" download>
          <CVButton>
            <CvText>Download CV</CvText>
          </CVButton>
        </CV>
      </StyledAbout>
    </ParentAbout>
  );
}
