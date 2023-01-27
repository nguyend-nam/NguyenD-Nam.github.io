import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import {
  faReact,
  faJs,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { appear } from "../constants";
import { SwapRightOutlined, LinkOutlined } from "@ant-design/icons";
import { Image } from "antd";

const MainContainer = styled.div`
  background-color: ${theme.colors.secondary};
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  font-family: "Plus Jakarta Sans";
  @media (max-width: 800px) {
    width: calc(100vw + 1px);
    transform: translateX(-1px);
  }
`;

const MainContent = styled.div`
  animation: ${appear} 0.3s linear forwards;
  width: calc(100vw - 71px);
  height: max-content;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  width: calc(100vw - 71px);
  display: flex;
  & > div {
    padding: 30px;
    width: 60vw;
    border-left: 1px solid ${theme.colors.shadowLight};
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
      width: 100%;
    }
  }
  & > div:nth-child(1) {
    border-left: none;
    width: 380px;
    padding: 0px;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  border-bottom: 1px solid ${theme.colors.shadowLight};
  @media (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
    & > span img {
      //   object-fit: contain !important;
      object-position: top !important;
    }
    & > div {
      border-left: 0px solid ${theme.colors.shadowLight};
      border-top: 1px solid ${theme.colors.shadowLight};
    }
  }
`;

const Title = styled.div`
  font-size: 65px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  font-family: "Plus Jakarta Sans";
  font-weight: 800;
  color: ${theme.colors.primary};
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
  color: ${theme.colors.primary};
  font-size: 17px;
  line-height: 22px;
  max-width: 500px;
  @media (max-width: 800px) {
    font-size: 16px;
    & > p {
      margin: 0;
    }
  }
`;

const HighLight = styled.span`
  border-bottom: 1px solid ${theme.colors.shadowLight};
  color: ${theme.colors.shadow};
`;

const TechStackSection = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    width: 850px;
    background-color: ${theme.colors.secondary};
    padding: 30px;
    border-left: 1px solid ${theme.colors.shadowLight};
    border-right: 1px solid ${theme.colors.shadowLight};
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
      border-left: 0px solid ${theme.colors.shadowLight};
      border-right: 0px solid ${theme.colors.shadowLight};
    }
  }
  text-align: center;
  border-bottom: 1px solid ${theme.colors.shadowLight};
`;

const TechStackTitle = styled(Title)`
  font-size: 50px;
  line-height: 65px;
  display: flex;
  flex-direction: column;
  font-family: "Plus Jakarta Sans";
  font-weight: 800;
  // color: ${theme.colors.shadow};
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

const Links = styled.div`
  & > * {
    font-size: 45px;
    color: ${theme.colors.primary};
    margin: 0 15px;
    @media (max-width: 800px) {
      font-size: 40px;
      margin: 0 10px;
    }
  }
`;

const ViewMore = styled.div`
  margin: 16px 0 5px;
  & a {
    color: ${theme.colors.shadow};
    font-size: 18px;
    cursor: pointer;
    border-bottom: 2px solid ${theme.colors.shadow};
    padding-bottom: 5px;
    text-transform: uppercase;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

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
          <title>About - Nam Nguyen</title>
          <meta name="description" content="About me" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
          <Sidebar />
          <MainContent>
            <Header />
            <>
              <Content>
                <Image
                  src="/image/me-dalat.jpg"
                  alt="Me"
                  preview={false}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div>
                  <Title>
                    <span>Few things about me</span>
                  </Title>
                  <Description>
                    <p>
                      Nice to meet you. My name is Nam Nguyen Dinh and I&rsquo;m
                      living in Ho Chi Minh city. I&rsquo;m currently a
                      final-year student at{" "}
                      <HighLight>
                        Ho Chi Minh City University of Technology - HCMUT
                      </HighLight>{" "}
                      and also a <HighLight>Frontend development</HighLight>{" "}
                      enthusiast who loves to learn new technologies and develop
                      gorgeous websites & web applications.
                      <br />
                      <br />
                      I&rsquo;m working in a Frontend engineer position using{" "}
                      <HighLight>React</HighLight> with{" "}
                      <HighLight>Next.JS</HighLight>,{" "}
                      <HighLight>Styled-components</HighLight> and{" "}
                      <HighLight>TypeScript</HighLight>.
                    </p>
                  </Description>
                </div>
              </Content>
              <TechStackSection>
                <div>
                  <TechStackTitle>
                    <span>Tech stack that I mostly use</span>
                  </TechStackTitle>
                  <Links>
                    <FontAwesomeIcon title="React" icon={faReact} />
                    <FontAwesomeIcon title="JavaScript" icon={faJs} />
                    <FontAwesomeIcon title="HTML" icon={faHtml5} />
                    <FontAwesomeIcon title="CSS" icon={faCss3Alt} />
                  </Links>
                  <p
                    style={{
                      textAlign: "left",
                      color: theme.colors.primary,
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
                        Next.JS
                        <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
                      </a>
                    </HighLight>
                    ,{" "}
                    <HighLight>
                      <a
                        href="https://styled-components.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Styled-components
                        <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
                      </a>
                    </HighLight>{" "}
                    and{" "}
                    <HighLight>
                      <a
                        href="https://www.typescriptlang.org/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        TypeScript
                        <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
                      </a>
                    </HighLight>
                    .
                  </p>
                  <ViewMore style={{ textAlign: "left" }}>
                    <a onClick={() => push("/projects")}>
                      Checkout my projects <SwapRightOutlined />
                    </a>
                  </ViewMore>
                </div>
              </TechStackSection>
            </>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
