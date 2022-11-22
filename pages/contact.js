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
import Link from "next/link";
import { useRouter } from "next/router";
import { appear } from "../constants";

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
  justify-content: space-between;
  & > div:first-child {
    padding: 30px;
    width: 60vw;
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
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
      display: none;
    }
  }
  border-bottom: 1px solid ${theme.colors.primary};
  @media (max-width: 800px) {
    width: 100vw;
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

const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: 60px;
    @media (max-width: 800px) {
      padding: 35px 25px;
    }
  }
  text-align: center;
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

export default function Contact() {
  const [isSSR, setIsSSR] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Contact - Nam Nguyen</title>
          <meta name="description" content="Contact me" />
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
                    <span>Contact</span>
                  </Title>
                  <Description>
                    <p>Feel free to connect with me through channels below.</p>
                  </Description>
                </div>
              </Content>
              <ContactSection>
                <div>
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
