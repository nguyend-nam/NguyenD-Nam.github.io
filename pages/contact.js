import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { Icon } from "@iconify/react";
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
  justify-content: space-between;
  & > div:first-child {
    padding: 60px 64px 30px;
    width: 60vw;
    @media (max-width: 800px) {
      padding: 40px 25px 20px;
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
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
  margin-bottom: 60px;
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
  max-width: 500px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const ContactSection = styled.section`
  display: flex;
  justify-content: space-around;
  border: 1px ${theme.colors.grey};
  border-style: solid none;
  & > div {
    width: 100%;
    background-color: ${theme.colors.lightGrey};
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
  border-radius: 100px;
  box-shadow: -12px 4px 0 ${theme.colors.grey};
  background-color: ${theme.colors.lightGrey};
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  cursor: pointer;
  border: 1px solid ${theme.colors.grey};
  padding: 8px 18px;
  text-transform: uppercase;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 16px;
  }

  :hover {
    border: 1px solid ${theme.colors.purple};
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    cursor: pointer;
    font-size: 30px;
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.darkGrey};
    margin: 0 15px;
    display: flex;
    width: max-content;
  }
`;

export default function Contact() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useAnimation(isSSR, ".scroll-container");

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Contact | Nam Nguyen</title>
          <meta content="Contact me" name="description" />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <MainContainer className="scroll-container">
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <div className="site-ani-group">
                <Content>
                  <div>
                    <Title className="site-ani-auto site-ani__fade-in">
                      <span>Contact</span>
                    </Title>
                    <Description className="site-ani-auto site-ani__fade-in">
                      <p>
                        Feel free to connect with me through channels below.
                      </p>
                    </Description>
                  </div>
                </Content>
                <ContactSection>
                  <div>
                    <MailButton className="site-ani-auto site-ani__fade-in">
                      <a href="mailto:nguyennamnade22@gmail.com">Send email</a>
                    </MailButton>
                    <Links>
                      <a
                        className="site-ani-auto site-ani__fade-in"
                        href="https://github.com/nguyend-nam"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icon icon="mdi:github" style={{ fontSize: 36 }} />
                      </a>
                      <a
                        className="site-ani-auto site-ani__fade-in"
                        href="https://www.linkedin.com/in/nguyendinhnam0320/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icon icon="mdi:linkedin" style={{ fontSize: 36 }} />
                      </a>
                    </Links>
                  </div>
                </ContactSection>
              </div>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
