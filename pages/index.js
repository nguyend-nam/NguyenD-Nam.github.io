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
import { SwapRightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { HighLight } from "../components/HighLight/HighLight";

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
  background-color: ${theme.colors.secondary};
  width: calc(100vw - 71px);
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    padding: 60px 60px 80px 60px;
    width: 75vw;
    @media (max-width: 800px) {
      padding: 40px 25px 60px 25px;
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    min-width: 300px;
    max-height: 100%;
    padding: 0px;
    border-left: 1px solid ${theme.colors.darkBlue};
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 800px) {
      height: 500px;
      overflow: hidden;
      border-left: 0px solid ${theme.colors.darkBlue};
      border-top: 1px solid ${theme.colors.darkBlue};
    }
    & > div {
      height: 100%;
      width: 100%;
      & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  border-bottom: 1px solid ${theme.colors.darkBlue};
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
    color: ${theme.colors.primary};
    text-shadow: 5px 0px 0px ${theme.colors.shadow},
      4px 4px 20px ${theme.colors.darkBlue};
    background-color: ${theme.colors.darkBlue};
    @media (max-width: 800px) {
      text-shadow: 2px 0px 0px ${theme.colors.shadow},
        4px 1px 16px ${theme.colors.darkBlue};
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
    background-color: ${theme.colors.darkBlue};
    padding: 60px;
    @media (max-width: 800px) {
      padding: 35px 25px;
    }
  }
  text-align: center;
  border-bottom: 1px solid ${theme.colors.darkBlue};
`;

const SectionTitle = styled.div`
  font-size: 35px;
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  color: ${theme.colors.shadow};
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
  color: ${theme.colors.darkBlue};
  font-size: 18px;
  cursor: pointer;
  border: 1px solid ${theme.colors.primary};
  padding: 10px;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.darkBlue};
  }
`;

const Links = styled.div`
  & > a {
    cursor: pointer;
    font-size: 30px;
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.primary};
    margin: 0 15px;
  }
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
                      <br />I usually develop websites or web applications using{" "}
                      <HighLight>ReactJS</HighLight> with{" "}
                      <HighLight>Next.js</HighLight>,{" "}
                      <HighLight>TypeScript</HighLight> and{" "}
                      <HighLight>TailwindCSS</HighLight>.
                    </p>
                  </Description>
                  <ViewMore>
                    <a onClick={() => push("/about")}>
                      More about me <SwapRightOutlined />
                    </a>
                  </ViewMore>
                </div>
                <div>
                  <Image src="/image/namnd.jpg" alt="Namnd" preview={false} />
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
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
