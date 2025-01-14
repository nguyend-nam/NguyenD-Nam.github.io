import Head from "next/head";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { Icon } from "@iconify/react";
import { Image } from "antd";
import { useIsMDSize } from "../hooks/useIsMDSize";
import { SwipeWrapper } from "../components/SwipeWrapper/SwipeWrapper";
import { useAnimation } from "../hooks/useAnimation";
import { projects } from "../constants/project";

const MainContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  height: 100dvh;
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
  & > div {
    padding: 60px 64px 30px;
    @media (max-width: 800px) {
      padding: 40px 25px 20px;
      width: 100%;
    }
  }
  border-bottom: 1px solid ${theme.colors.grey};
  @media (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
    & > span img {
      object-position: top !important;
    }
    & > div {
      border-left: 0px solid ${theme.colors.grey};
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

const Description = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  line-height: 20px;
  max-width: 500px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const ViewMore = styled.div`
  margin-top: 28px;

  & a {
    display: block;
    width: max-content;
    color: ${theme.colors.darkGrey};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 1px solid ${theme.colors.darkGrey};
    padding-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 16px;
    }

    &:hover,
    &:focus {
      svg {
        transform: translateX(6px);
      }
    }
  }

  & svg {
    vertical-align: sub;
    transition: transform 0.25s ease-in-out;
  }
`;

const ProjectsContainer = styled.div`
  padding: 30px 100px 60px !important;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  & > div {
    width: calc((100% - 80px) / 3) !important;
    & > a {
      > div {
        height: 100%;
        width: 100%;
        & > img {
          object-fit: cover;
          height: calc(100% + 110px) !important;
          width: 100% !important;
        }
      }
    }
  }
  @media (max-width: 1280px) {
    padding: 20px 64px 50px !important;
    gap: 36px;
    & > div {
      width: calc((100% - 36px) / 2) !important;
    }
  }
  @media (max-width: 991px) {
    padding: 20px 64px 50px !important;
    gap: 36px;
    & > div {
      width: 100% !important;
    }
  }
  @media (max-width: 800px) {
    padding: 20px 25px 50px !important;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid ${theme.colors.grey};
  background-color: ${theme.colors.lightGrey};
  // overflow: hidden;
  & > div {
    padding: 20px;
  }
  & > div:nth-child(2) {
    border-top: 1px solid ${theme.colors.grey} !important;
    padding-top: 20px !important;
    padding-bottom: 0;
  }
  & > div:nth-child(n + 2) {
    padding-top: 16px;
    padding-bottom: 0;
  }
  & > div:nth-child(4) {
    padding-bottom: 20px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  & > a {
    transition: opacity 0.25s, border-color 0.25s;
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.darkGrey};
    border-bottom: 1px solid transparent;
  }

  & > a:hover {
    opacity: 0.6;
    border-color: ${theme.colors.darkGrey};
  }
  
  & > span {
    background-color: ${theme.colors.grey};
    padding: 2px 6px;
    border-radius: 6px;
    color: ${theme.colors.red};
    font-size: 12px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const ProjectDescription = styled.div`
  color: ${theme.colors.darkGrey};
  font-size: 14px;
`;

const ProjectTags = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGrey};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid ${theme.colors.grey};
  padding: 6px 8px;
  margin-right: 6px;
  margin-top: 6px;
`;

export default function Projects() {
  const [isSSR, setIsSSR] = useState(true);

  const isMD = useIsMDSize();

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useAnimation(isSSR, ".scroll-container");

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Projects | Nam Nguyen</title>
          <meta content="My side projects" name="description" />
          <link href="/favicon.ico" rel="icon" />
          <link as="image" href="/image/proj-codetour.png" rel="preload" />
          <link as="image" href="/image/proj-scrollery.png" rel="preload" />
          <link as="image" href="/image/proj-ggfonts.png" rel="preload" />
          <link as="image" href="/image/proj-r3fimages.png" rel="preload" />
          <link as="image" href="/image/proj-holiday.png" rel="preload" />
          <link as="image" href="/image/proj-aggapp.png" rel="preload" />
          <link as="image" href="/image/proj-calui.png" rel="preload" />
          <link as="image" href="/image/proj-cses.png" rel="preload" />
        </Head>
        <MainContainer className="scroll-container">
          <Sidebar />
          <MainContent>
            <SwipeWrapper>
              <Header />
              <Content className="site-ani-group">
                <div className="site-ani-auto site-ani__fade-in">
                  <Title className="site-ani-auto site-ani__fade-in">
                    <span>Projects</span>
                  </Title>
                  <Description className="site-ani-auto site-ani__fade-in">
                    <p>Some of my open sources and side projects.</p>
                  </Description>
                  <ViewMore className="site-ani-auto site-ani__fade-in">
                    <a
                      href="https://github.com/nguyend-nam/?tab=repositories"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more on GitHub{" "}
                      <Icon icon="ant-design:swap-right-outlined" />
                    </a>
                  </ViewMore>
                </div>
                <ProjectsContainer className="site-ani-auto site-ani__fade-in">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.name}
                      className="site-ani-auto site-ani__slide-up"
                    >
                      <a
                        href={project.projectUrl}
                        rel="noreferrer"
                        style={{
                          display: "block",
                          height: isMD ? 200 : 300,
                        }}
                        target="_blank"
                      >
                        <Image
                          alt={project.img}
                          className="parallax-image"
                          preview={false}
                          src={project.img}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </a>
                      <div>
                        <ProjectTitle>
                          <a
                            href={project.repoUrl}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {project.name}
                          </a>{" "}
                          {project.wip ? <span>In progress</span> : null}
                        </ProjectTitle>
                      </div>
                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>
                      <div>
                        {project.techStack.map((tech, i) => (
                          <ProjectTags key={i}>{tech}</ProjectTags>
                        ))}
                      </div>
                    </ProjectCard>
                  ))}
                </ProjectsContainer>
              </Content>
            </SwipeWrapper>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
