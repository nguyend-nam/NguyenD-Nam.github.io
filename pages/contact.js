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
  justify-content: space-between;
  & > div:first-child {
    padding: 30px;
    width: 60vw;
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    width: 100vw;
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
  color: ${theme.colors.darkBlue};
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
  border: 3px ${theme.colors.darkBlue};
  border-style: solid none;
  & > div {
    width: 100%;
    background-color: ${theme.colors.shadow};
    padding: 60px;
    @media (max-width: 800px) {
      padding: 35px 25px;
    }
  }
  text-align: center;
  @media (max-width: 800px) {
    border-style: solid;
  }
`;

const MailButton = styled.button`
  border: none;
  outline: none;
  border-radius: 100px;
  box-shadow: -12px 4px 0 ${theme.colors.darkBlue};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.darkBlue};
  font-size: 18px;
  cursor: pointer;
  border: 2px solid ${theme.colors.darkBlue};
  padding: 8px 18px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    cursor: pointer;
    font-size: 30px;
    background-color: ${theme.colors.shadow};
    color: ${theme.colors.darkBlue};
    margin: 0 15px;
    display: flex;
    width: max-content;
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
            <SwipeWrapper>
              <Header />
              <>
                <Content>
                  <div>
                    <Title>
                      <span>Contact</span>
                    </Title>
                    <Description>
                      <p>
                        Feel free to connect with me through channels below.
                      </p>
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
                        <Icon icon="mdi:github" style={{ fontSize: 36 }} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nguyendinhnam0320/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Icon icon="mdi:linkedin" style={{ fontSize: 36 }} />
                      </a>
                    </Links>
                  </div>
                </ContactSection>
              </>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
