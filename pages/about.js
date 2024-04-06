import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Col, Image, Row } from "antd";
import { HighLight } from "../components/HighLight/HighLight";
import { SwipeWrapper } from "../components/SwipeWrapper/SwipeWrapper";
import { useAnimation } from "../hooks/useAnimation";

const MainContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const MainContent = styled.div`
  width: calc(100vw - 70px);
  height: max-content;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Content = styled.section`
  background-color: ${theme.colors.white};
  width: calc(100vw - 70px);
  display: flex;
  & > div {
    padding: 60px 64px;
    width: 60vw;
    border-left: 1px solid ${theme.colors.grey};
    @media (max-width: 991px) {
      padding: 40px 25px;
      width: 100%;
    }
  }
  & > div:nth-child(1) {
    border-left: none;
    width: 380px;
    padding: 0px;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  border-bottom: 1px solid ${theme.colors.grey};
  @media (max-width: 991px) {
    width: 100vw;
    flex-direction: column;
    & > div {
      border-left: 0px solid ${theme.colors.grey};
      border-bottom: 1px solid ${theme.colors.grey};
      
      &:nth-child(2) {
        border-bottom: 0px solid ${theme.colors.grey};
      }
    }
    & > div:first-of-type {
      border-left: 0px solid ${theme.colors.grey};
      height: 280px;
    }
  }
`;

const Title = styled.h2`
  font-size: 64px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: ${theme.colors.darkGrey};
  margin: 0;
  margin-bottom: 80px;
  text-align: left;

  & > span {
    padding: 0;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const Description = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  line-height: 20px;
  max-width: 560px;

  @media (max-width: 800px) {
    font-size: 14px;
  }

  & p {
    margin: 0;
  }
`;

const FamilySection = styled.section`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grey};

  div {
    width: 100%;
  }
  
  img {
    max-height: 520px !important;
    object-fit: cover;
    
    @media (max-width: 800px) {
      max-height: 200px !important;
    }
  }
`

const JourneySection = styled.section`
  background-color: ${theme.colors.white};
  padding: 64px;
  border-bottom: 1px solid ${theme.colors.grey};
  @media (max-width: 800px) {
    padding: 40px 25px;
  }
`;

const JourneyItemType = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 14px;
  opacity: 0.6;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

const JourneyItemTitle = styled.span`
  color: ${theme.colors.darkGrey};
  margin: 2px 0 4px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const JourneyItemTime = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 15px;
  opacity: 0.6;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const JourneyItemDescription = styled.ul`
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 16px;
  align-self: start;
  white-space: pre-line;
  color: ${theme.colors.darkGrey};
  padding-left: 16px;
  list-style-type: circle;

  @media (max-width: 800px) {
    font-size: 14px;
    & > p {
      margin: 0;
    }
  }
`;

const ProgressLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${theme.colors.grey};
  flex-shrink: 1;
  margin: 16px 0;
  @media (max-width: 991px) {
    margin: 16px 0 0 22px;
    align-self: flex-start;
  }
`;

const StyledImg = styled.img`
  border-radius: 5%;
  display: block;
  object-fit: contain;
  max-width: 100%;
  width: 70px;
  @media (max-width: 991px) {
    width: 45px;
    align-self: flex-start;
  }
`;

const StyledImgAnchor = styled.a`
  display: block;
  max-width: 100%;
  width: 70px;
  @media (max-width: 991px) {
    width: 45px;
    align-self: flex-start;
  }
`;

const StyledRow = styled(Row)`
  align-items: flex-start;
  flex-direction: ${(props) => (props.index % 2 === 1 ? "row" : "row-reverse")};
  margin-bottom: 0px;
  @media (max-width: 991px) {
    margin-bottom: ${(props) => (props.index === props.length - 1 ? "0px" : "16px")};
    flex-direction: row;
  }
`;

const LogoRow = styled(Row)`
  height: 100%;
  flex-direction: ${(props) => (props.index % 2 === 1 ? "row-reverse" : "row")};
  @media (max-width: 991px) {
    flex-direction: row;
  }
`;

const TechStackSection = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.white};
  & > div {
    width: 850px;
    background-color: ${theme.colors.lightGrey};
    padding: 60px 64px;
    border-left: 1px solid ${theme.colors.grey};
    border-right: 1px solid ${theme.colors.grey};

    @media (max-width: 800px) {
      padding: 40px 25px;
      border-left: 0px solid ${theme.colors.grey};
      border-right: 0px solid ${theme.colors.grey};
    }
  }
  & p {
    font-size: 16px;
    max-width: 400px;
    text-align: center !important;
    margin: 20px auto;
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
  text-align: center;
  border-bottom: 1px solid ${theme.colors.grey};
`;

const SectionTitle = styled(Title)`
  font-size: 50px;
  line-height: 64px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: left;
  & > span {
    padding: 0;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  & > * {
    color: ${theme.colors.darkGrey};
    background-clip: text;
    @media (max-width: 800px) {
      font-size: 40px;
    }
  }

  @media (max-width: 800px) {
    gap: 20px;
  }
`;

const ViewMore = styled.div`
  margin: 40px 0 12px;

  & a {
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.darkGrey};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 1px solid ${theme.colors.darkGrey};
    padding-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  & svg {
    vertical-align: sub;
  }
`;

const journeyItems = [
  {
    type: "Work experience",
    logo: "/image/paradox_logo.jpeg",
    title: "Paradox",
    url: 'https://www.paradox.ai/',
    time: "Mar 2024 - now",
    description:
      "Title: Associate Software Engineer; My primary role revolves around executing various Frontend tasks and ensuring seamless integration with the company's AI-driven products.",
  },
  {
    type: "Work experience",
    logo: "/image/df_logo.png",
    title: "Dwarves Foundation",
    url: 'https://dwarves.foundation/',
    time: "Jun 2022 - Mar 2024",
    description:
      "Title: Junior Frontend Engineer;I specialize in Frontend Development across multiple projects, using Next.js, TypeScript and various other libraries for writing CSS-in-JS, data fetching, UI library, etc. My responsibilities include researching and constructing reusable components, crafting responsive, pixel-perfect UI/UX, and writing requests to interact with APIs from the Backend side.",
  },
  {
    type: "Education",
    logo: "/image/hcmut_logo.png",
    title: "Ho Chi Minh City University of Technology",
    url: 'https://hcmut.edu.vn/',
    time: "Sep 2019 - May 2023",
    description:
      "Major: Computer Engineering;GPA: 7.6 / 10;Courses: Data Structures and Algorithms, Operating Systems, Computer Networks, Software Engineering, Internet of Things Application Development etc.",
  },
  {
    type: "Education",
    logo: "/image/lhpvietnam_logo.png",
    title: "Le Hong Phong high school for the gifted",
    url: 'https://www.linkedin.com/school/lhpvietnam/',
    time: "Sep 2016 - May 2019",
    description: "Major: Mathematics;GPA: 8.6 / 10",
  },
];

export default function About() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { push } = useRouter();

  useAnimation(isSSR, ".scroll-container");

  return (
    !isSSR && (
      <div>
        <Head>
          <title>About | Nam Nguyen</title>
          <meta content="About me" name="description" />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <MainContainer className="scroll-container">
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <>
                <Content>
                  <Image
                    alt="Me"
                    className="parallax-image--large"
                    preview={false}
                    src="/image/me-dalat.jpg"
                    style={{
                      objectFit: "cover",
                      objectPosition: "30%",
                      width: "100%",
                      height: "calc(100% + 110px)",
                    }}
                  />
                  <div className="site-ani-group">
                    <Title className="site-ani-auto site-ani__fade-in">
                      <span>Few things about me</span>
                    </Title>
                    <Description className="site-ani-auto site-ani__fade-in">
                      <p>
                        Nice to meet you. I&rsquo;m Nam Nguyen Dinh, currently based in vibrant Ho Chi Minh City. I hold a degree from{" "}
                        <HighLight>
                          Ho Chi Minh City University of Technology - HCMUT
                        </HighLight>{" "}
                        and am deeply passionate about <HighLight>Frontend Development</HighLight>. I thoroughly enjoy learning new technologies and crafting stunning websites and web applications.
                        <br />
                        <br />
                        In my role as a Frontend Engineer, I specialize in using{" "}
                        <HighLight>ReactJS</HighLight> with{" "}
                        <HighLight>Next.js</HighLight> framework,{" "}
                        <HighLight>TypeScript</HighLight>,{" "}
                        <HighLight>SCSS</HighLight> and various other web development tools.
                        <br />
                        <br />
                        Additionally, I&rsquo;m also engaged in a collaborative project with friends called{" "}
                        <HighLight>
                          <a
                            href="https://problem-randomizer.vercel.app/randomizer"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Problem Randomizer
                            <Icon
                              icon="la:external-link-alt"
                              style={{
                                fontSize: 14,
                                verticalAlign: "sub",
                                marginLeft: 2,
                                marginBottom: 2,
                              }}
                            />
                          </a>
                        </HighLight>
                        . This platform provides an open space where you can create and publish problem sets, and test your programming skills with various coding problems from Codeforces, AtCoder, etc.
                      </p>
                    </Description>
                  </div>
                </Content>
                <TechStackSection>
                  <div className="site-ani-group">
                    <SectionTitle className="site-ani-auto site-ani__fade-in">
                      <span>Languages and Frameworks I mostly use</span>
                    </SectionTitle>
                    <Links className="site-ani-auto site-ani__fade-in">
                      <Icon icon="logos:nextjs" style={{ fontSize: 24 }} />
                      <Icon icon="simple-icons:nuxtdotjs" style={{ fontSize: 48 }} />
                      <Icon
                        icon="mdi:language-typescript"
                        style={{ fontSize: 48 }}
                      />
                      <Icon icon="mdi:language-css3" style={{ fontSize: 48 }} />
                    </Links>
                    <p
                      className="site-ani-auto site-ani__fade-in"
                      style={{
                        color: theme.colors.darkGrey,
                      }}
                    >
                      Additionally, I utilize a range of supplementary technologies for development, such as{" "}
                      <HighLight>
                        <a
                          href="https://tailwindcss.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Tailwind CSS
                          <Icon
                            icon="la:external-link-alt"
                            style={{
                              fontSize: 14,
                              verticalAlign: "sub",
                              marginLeft: 2,
                              marginBottom: 2,
                            }}
                          />
                        </a>
                      </HighLight>
                      , <HighLight>SCSS</HighLight>,{" "}
                      <HighLight>
                        <a
                          href="https://eslint.org/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          ESLint
                          <Icon
                            icon="la:external-link-alt"
                            style={{
                              fontSize: 14,
                              verticalAlign: "sub",
                              marginLeft: 2,
                              marginBottom: 2,
                            }}
                          />
                        </a>
                      </HighLight>{" "}
                      and{" "}
                      <HighLight>
                        <a
                          href="https://mui.com/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          MUI
                          <Icon
                            icon="la:external-link-alt"
                            style={{
                              fontSize: 14,
                              verticalAlign: "sub",
                              marginLeft: 2,
                              marginBottom: 2,
                            }}
                          />
                        </a>
                      </HighLight>
                      .
                    </p>
                    <ViewMore
                      className="site-ani-auto site-ani__fade-in"
                      style={{ textAlign: "left" }}
                    >
                      <a onClick={() => push("/projects")}>
                        Checkout my projects{" "}
                        <Icon icon="ant-design:swap-right-outlined" />
                      </a>
                    </ViewMore>
                  </div>
                </TechStackSection>

                <FamilySection>
                  <Image
                    alt="Me"
                    className="revealing-image"
                    preview={false}
                    src="/image/family.jpg"
                  />
                </FamilySection>

                <JourneySection>
                  <SectionTitle className="site-ani-auto site-ani__fade-in">
                    <span>My journey until now</span>
                  </SectionTitle>
                  <div className="site-ani-group">
                    {journeyItems.map((i, index) => (
                      <StyledRow
                        key={i.title}
                        className="site-ani-group site-ani-auto site-ani__slide-up"
                        index={index}
                        length={journeyItems.length}
                      >
                        <Col
                          className="site-ani-auto site-ani__slide-up"
                          lg={{ span: 16 }}
                          span={5}
                          style={{
                            alignSelf: "stretch",
                          }}
                        >
                          <LogoRow index={index}>
                            <Col
                              sm={{ span: 12 }}
                              span={24}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              }}
                            >
                              {i.url ? <StyledImgAnchor href={i.url} rel='noreferrer' target="_blank">
                                <StyledImg alt={i.title} src={i.logo} />
                              </StyledImgAnchor>
                                : <StyledImg alt={i.title} src={i.logo} />}
                              {index < journeyItems.length - 1 ? (
                                <ProgressLine />
                              ) : null}
                            </Col>
                          </LogoRow>
                        </Col>
                        <Col
                          className="site-ani-auto site-ani__slide-up"
                          lg={{ span: 8 }}
                          span={19}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 16,
                            border: `1px solid ${theme.colors.grey}`,
                            backgroundColor: theme.colors.lightGrey,
                          }}
                        >
                          <JourneyItemType>{i.type}</JourneyItemType>
                          <JourneyItemTitle>{i.title}</JourneyItemTitle>
                          <JourneyItemTime>{i.time}</JourneyItemTime>
                          <JourneyItemDescription>
                            {i.description.split(";").map((d) => {
                              if (d.includes(":")) {
                                const key = d.split(":")[0];
                                const value = d.split(":")[1];
                                return (
                                  <li
                                    key={d}
                                    style={{
                                      marginTop: 4,
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: theme.colors.darkGrey,
                                        fontWeight: 600,
                                        fontSize: 13,
                                        borderBottom: `1px solid ${theme.colors.grey}`,
                                        marginRight: 5,
                                      }}
                                    >
                                      {key}
                                    </span>
                                    {value}
                                  </li>
                                );
                              }
                              return (
                                <li
                                  key={d}
                                  style={{
                                    marginTop: 4,
                                  }}
                                >
                                  {d}
                                </li>
                              );
                            })}
                          </JourneyItemDescription>
                        </Col>
                      </StyledRow>
                    ))}
                  </div>
                </JourneySection>
              </>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
