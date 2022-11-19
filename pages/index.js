import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Atropos from "atropos/react";
import { useRouter } from "next/router";
import { appear } from "../constants";
import "atropos/atropos.css";
import { SwapRightOutlined } from "@ant-design/icons";

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
  width: calc(100vw - 81px);
  height: max-content;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Content = styled.div`
  width: calc(100vw - 81px);
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    padding: 60px 60px 80px 60px;
    width: 60vw;
    @media (max-width: 800px) {
      padding: 40px 25px 60px 25px;
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    padding: 60px;
    border-left: 1px solid ${theme.colors.primary};
    flex: 1;
    display: grid;
    align-items: center;
    justify-content: center;
    & > * {
      margin: 50px 0 !important;
    }
    @media (max-width: 800px) {
      padding: 40px 25px;
      border-left: 0px solid ${theme.colors.primary};
      border-top: 1px solid ${theme.colors.primary};
    }
  }
  border-bottom: 1px solid ${theme.colors.primary};
  @media (max-width: 800px) {
    width: 100vw;
    flex-wrap: wrap;
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
  }
`;

const HighLight = styled.span`
  border-bottom: 1px solid ${theme.colors.shadowLight};
  color: ${theme.colors.shadow};
`;

const ViewMore = styled.div`
  margin-top: 40px;
  & a {
    color: ${theme.colors.primary};
    font-size: 18px;
    cursor: pointer;
    border-bottom: 2px solid ${theme.colors.primary};
    padding-bottom: 5px;
    text-transform: uppercase;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    max-width: 750px;
    background-color: ${theme.colors.primary};
    padding: 60px;
    @media (max-width: 800px) {
      padding: 35px 25px;
    }
  }
  text-align: center;
  border-bottom: 1px solid ${theme.colors.primary};
`;

const SectionTitle = styled.div`
  font-size: 35px;
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  color: ${theme.colors.secondary};
  margin-bottom: 40px;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const MailButton = styled.button`
  border: none;
  outline: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.secondary};
  font-size: 18px;
  cursor: pointer;
  border: 1px solid ${theme.colors.secondary};
  padding: 10px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};
  }
`;

const Links = styled.div`
  & > a {
    cursor: pointer;
    font-size: 30px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    margin: 0 15px;
  }
`;

const AtroposImage = styled(Image)`
  border-radius: 10px;
  max-width: 394px;
`;

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Nam Nguyen</title>
          <meta name="description" content="Welcome to my personal website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
          <Sidebar />
          <MainContent>
            <Header />
            <>
              <Content>
                <div>
                  <Title>
                    <span>Hello,</span>
                    <span>My name is</span>
                    <span>Nam Nguyen</span>
                  </Title>
                  <Description>
                    <p>
                      I&rsquo;m a Frontend engineer who loves to develop
                      gorgeous UI & UX for websites & web applications.
                      <br />
                      <br />
                      My favourite technology stack for developing is{" "}
                      <HighLight>React</HighLight> with{" "}
                      <HighLight>Next.JS</HighLight>,{" "}
                      <HighLight>Styled-components</HighLight> and{" "}
                      <HighLight>TypeScript</HighLight>.
                    </p>
                  </Description>
                  <ViewMore>
                    <a onClick={() => push("/about")}>
                      More about me <SwapRightOutlined />
                    </a>
                  </ViewMore>
                </div>
                <div>
                  <Atropos
                    activeOffset={40}
                    shadowScale={0.9}
                    className="atropos-banner"
                  >
                    <AtroposImage
                      src="/image/atropos-bg.png"
                      alt="Programming"
                      width={394}
                      height="90.333px"
                      data-atropos-offset="0"
                    />
                    <AtroposImage
                      src="/image/atropos-text.png"
                      alt="Programming"
                      width={394}
                      height="90.333px"
                      data-atropos-offset="5"
                    />
                    <AtroposImage
                      src="/image/atropos-icons.png"
                      alt="Programming"
                      width={394}
                      height="90.333px"
                      data-atropos-offset="10"
                    />
                  </Atropos>
                </div>
              </Content>
              <ContactSection>
                <div>
                  <SectionTitle>
                    <span>Let&rsquo;s connect and make difference</span>
                  </SectionTitle>
                  <MailButton>
                    <a href="mailto:nguyennamnade22@gmail.com">Send email</a>
                  </MailButton>
                  <Links>
                    <a
                      href="https://github.com/nguyend-nam"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nguyendinhnam0320/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="https://www.facebook.com/nguyendinhnam20.03/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </Links>
                </div>
              </ContactSection>
            </>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
