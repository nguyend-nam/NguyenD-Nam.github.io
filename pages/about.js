import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { appear } from "../constants";
import { Col, Image, Row } from "antd";
import { HighLight } from "../components/HighLight/HighLight";
import { SwipeWrapper } from "../components/SwipeWrapper/SwipeWrapper";

const MainContainer = styled.div`
  background-color: ${theme.colors.secondary};
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const MainContent = styled.div`
  animation: ${appear} 0.3s linear forwards;
  width: calc(100vw - 70px);
  height: max-content;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  background-color: ${theme.colors.secondary};
  width: calc(100vw - 70px);
  display: flex;
  & > div {
    padding: 30px 65px;
    width: 60vw;
    border-left: 3px solid ${theme.colors.darkBlue};
    @media (max-width: 991px) {
      padding: 25px 25px 40px 25px;
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
  border-bottom: 3px solid ${theme.colors.darkBlue};
  @media (max-width: 991px) {
    width: 100vw;
    flex-direction: column;
    & img {
      object-position: top !important;
      border-bottom: 3px solid ${theme.colors.darkBlue};
    }
    & > div {
      border-left: 0px solid ${theme.colors.darkBlue};
    }
  }
`;

const Title = styled.h2`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: ${theme.colors.darkBlue};
  margin: 0;
  margin-bottom: 60px;
  text-align: left;
  & > span {
    padding: 0;
    @media (max-width: 800px) {
      font-size: 40px;
      line-height: 40px;
    }
  }
  & > span:nth-child(3) {
    color: ${theme.colors.secondary};
    text-shadow: 4px 4px 13px ${theme.colors.shadow};
  }
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const Description = styled.div`
  color: ${theme.colors.darkBlue};
  font-size: 17px;
  line-height: 22px;
  max-width: 560px;
  @media (max-width: 800px) {
    font-size: 16px;
    & > p {
      margin: 0;
    }
  }
`;

const JourneySection = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 30px 65px;
  border-bottom: 3px solid ${theme.colors.darkBlue};
  @media (max-width: 800px) {
    padding: 25px 25px 40px 25px;
  }
`;

const JourneyItemType = styled.span`
  color: ${theme.colors.primary};
  opacity: 0.8;
`;

const JourneyItemTitle = styled.span`
  color: ${theme.colors.darkBlue};
  margin: 2px 0 4px;
  font-size: 18px;
  font-weight: 500;
`;

const JourneyItemTime = styled.span`
  color: ${theme.colors.darkBlue};
  font-size: 15px;
  opacity: 0.7;
`;

const JourneyItemDescription = styled.div`
  margin-top: 12px;
  font-size: 17px;
  align-self: start;
  white-space: pre-line;
  color: ${theme.colors.darkBlue};
  @media (max-width: 800px) {
    font-size: 16px;
    & > p {
      margin: 0;
    }
  }
`;

const ProgressLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${theme.colors.primary};
  flex-shrink: 1;
  margin: 16px 0;
  @media (max-width: 991px) {
    margin: 16px 0 0 22px;
    align-self: flex-start;
  }
`;

const StyledImg = styled.img`
  object-fit: contain;
  max-idth: 100%;
  width: 70px;
  @media (max-width: 991px) {
    width: 45px;
    align-self: flex-start;
  }
`;

const StyledRow = styled(Row)`
  align-items: flex-start;
  flex-direction: ${(props) => (props.index % 2 === 1 ? "row-reverse" : "row")};
  margin-bottom: 0px;
  @media (max-width: 991px) {
    margin-bottom: ${(props) => (props.isLast ? "0px" : "16px")};
    flex-direction: row-reverse;
  }
`;

const LogoRow = styled(Row)`
  height: 100%;
  flex-direction: ${(props) => (props.index % 2 === 1 ? "row-reverse" : "row")};
  @media (max-width: 991px) {
    flex-direction: row;
  }
`;

const TechStackSection = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${theme.colors.shadow};
  & > div {
    width: 850px;
    background-color: ${theme.colors.shadow};
    padding: 30px 65px;
    border-left: 3px solid ${theme.colors.darkBlue};
    border-right: 3px solid ${theme.colors.darkBlue};
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
    }
  }
  & p {
    font-size: 17px;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }
  text-align: center;
  border-bottom: 3px solid ${theme.colors.darkBlue};
`;

const SectionTitle = styled(Title)`
  font-size: 50px;
  line-height: 65px;
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
  & > * {
    font-size: 45px;
    color: ${theme.colors.darkBlue};
    background-clip: text;
    margin: 0 15px;
    @media (max-width: 800px) {
      font-size: 40px;
      margin: 0 10px;
    }
  }
`;

const ViewMore = styled.div`
  margin: 28px 0 12px;
  transform: translateX(12px);
  & a {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.darkBlue};
    border-radius: 100px;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid ${theme.colors.darkBlue};
    box-shadow: -12px 4px 0 ${theme.colors.darkBlue};
    padding: 8px 12px;
    text-transform: uppercase;
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
    logo: "/image/df_logo.png",
    title: "Dwarves Foundation LLC.",
    time: "2022 - now",
    description:
      "Title: Frontend Engineer;I work on Frontend side of several projects using Next.js, TypeScript and other libraries for writing CSS-in-JS, data fetching etc. I'm responsible for developing reusable components and responsive, pixel-perfect UI-UX for web applications.",
  },
  {
    type: "Education",
    logo: "/image/hcmut_logo.png",
    title: "Ho Chi Minh city University of Technology",
    time: "2019 - now",
    description:
      "Major: Computer Engineering;GPA: 7.6 / 10;Courses: Data Structures and Algorithms, Operating Systems, Computer Networks, Software Engineering, Internet of Things Application Development etc.",
  },
  {
    type: "Education",
    logo: "/image/lhpvietnam_logo.png",
    title: "Le Hong Phong high school for the gifted",
    time: "2016 - 2019",
    description: "Major: Mathematics;GPA: 8.6 / 10",
  },
];

export default function About() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { push } = useRouter();

  return (
    !isSSR && (
      <div>
        <Head>
          <title>About | Nam Nguyen</title>
          <meta name="description" content="About me" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <>
                <Content>
                  <Image
                    src="/image/me-dalat.jpg"
                    alt="Me"
                    preview={false}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div>
                    <Title>
                      <span>Few things about me</span>
                    </Title>
                    <Description>
                      <p>
                        Nice to meet you. My name is Nam Nguyen Dinh and
                        I&rsquo;m living in Ho Chi Minh city. I&rsquo;m
                        currently a final-year student at{" "}
                        <HighLight>
                          Ho Chi Minh City University of Technology - HCMUT
                        </HighLight>{" "}
                        and also a <HighLight>Frontend Development</HighLight>{" "}
                        enthusiast who loves to learn new technologies and
                        develop gorgeous websites & web applications.
                        <br />
                        <br />
                        I&rsquo;m working in a Frontend Engineer position using{" "}
                        <HighLight>ReactJS</HighLight> with{" "}
                        <HighLight>Next.js</HighLight>,{" "}
                        <HighLight>TypeScript</HighLight> and{" "}
                        <HighLight>TailwindCSS</HighLight>.
                        <br />
                        <br />
                        I&rsquo;m also focusing on my personal project,{" "}
                        <HighLight>
                          <a
                            href="https://scrollery.js.org"
                            rel="noreferrer"
                            target="_blank"
                          >
                            Scrollery
                            <Icon
                              icon="mdi:link"
                              style={{
                                fontSize: 20,
                                verticalAlign: "sub",
                                marginLeft: 2,
                              }}
                            />
                          </a>
                        </HighLight>
                        , which is a React TypeScript library that empowers
                        developers to effortlessly animate contents on scroll.
                      </p>
                    </Description>
                  </div>
                </Content>
                <TechStackSection>
                  <div>
                    <SectionTitle>
                      <span>Tech stack that I mostly use</span>
                    </SectionTitle>
                    <Links>
                      <Icon icon="mdi:react" style={{ fontSize: 48 }} />
                      <Icon
                        icon="mdi:language-typescript"
                        style={{ fontSize: 48 }}
                      />
                      <Icon
                        icon="mdi:language-html5"
                        style={{ fontSize: 48 }}
                      />
                      <Icon icon="mdi:language-css3" style={{ fontSize: 48 }} />
                    </Links>
                    <p
                      style={{
                        textAlign: "left",
                        color: theme.colors.darkBlue,
                        margin: "20px 0",
                      }}
                    >
                      With some additional technologies for developing including{" "}
                      <HighLight>
                        <a
                          href="https://nextjs.org"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Next.js
                          <Icon
                            icon="mdi:link"
                            style={{
                              fontSize: 20,
                              verticalAlign: "sub",
                              marginLeft: 2,
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
                            icon="mdi:link"
                            style={{
                              fontSize: 20,
                              verticalAlign: "sub",
                              marginLeft: 2,
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
                            icon="mdi:link"
                            style={{
                              fontSize: 20,
                              verticalAlign: "sub",
                              marginLeft: 2,
                            }}
                          />
                        </a>
                      </HighLight>
                      .
                    </p>
                    <ViewMore style={{ textAlign: "left" }}>
                      <a onClick={() => push("/projects")}>
                        Checkout my projects{" "}
                        <Icon icon="ant-design:swap-right-outlined" />
                      </a>
                    </ViewMore>
                  </div>
                </TechStackSection>
                <JourneySection>
                  <SectionTitle>
                    <span>My journey until now</span>
                  </SectionTitle>
                  {journeyItems.map((i, index) => (
                    <StyledRow
                      key={i.title}
                      index={index}
                      isLast={index === journeyItems.length - 1}
                    >
                      <Col
                        span={19}
                        lg={{ span: 8 }}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          padding: 15,
                          borderRadius: 30,
                          border: `2px solid ${theme.colors.darkBlue}`,
                          boxShadow: `-12px 4px 0 ${theme.colors.darkBlue}`,
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
                                    listStyle: "disc outside",
                                  }}
                                >
                                  <span style={{ color: theme.colors.primary }}>
                                    {key}:
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
                                  listStyle: "disc outside",
                                }}
                              >
                                {d}
                              </li>
                            );
                          })}
                        </JourneyItemDescription>
                      </Col>
                      <Col
                        span={5}
                        lg={{ span: 16 }}
                        style={{
                          alignSelf: "stretch",
                        }}
                      >
                        <LogoRow index={index}>
                          <Col
                            span={24}
                            sm={{ span: 12 }}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <StyledImg src={i.logo} alt={i.title} />
                            {index < journeyItems.length - 1 ? (
                              <ProgressLine />
                            ) : null}
                          </Col>
                        </LogoRow>
                      </Col>
                    </StyledRow>
                  ))}
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
