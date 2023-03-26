import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import { theme } from "../constants";
import { appear } from "../constants";
import { SwapRightOutlined, LinkOutlined } from "@ant-design/icons";
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
  & > div {
    padding: 30px;
    @media (max-width: 800px) {
      padding: 25px 25px 40px 25px;
      width: 100%;
    }
  }
  border-bottom: 1px solid ${theme.colors.darkBlue};
  @media (max-width: 800px) {
    width: 100vw;
    flex-direction: column;
    & > span img {
      object-position: top !important;
    }
    & > div {
      border-left: 0px solid ${theme.colors.primary};
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

const ProjectsContainer = styled.div`
  font-family: "Plus Jakarta Sans";
  padding: 25px 100px 50px !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 800px) {
    padding: 0px 25px 50px !important;
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid ${theme.colors.primary};
  & > div {
    padding: 30px;
  }
  & > div:nth-child(2) {
    border-top: 1px solid ${theme.colors.primary} !important;
    padding-bottom: 0;
  }
  & > div:nth-child(n + 2) {
    padding-bottom: 0px;
  }
  & > div:nth-child(4) {
    padding-bottom: 30px;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    & > div {
      padding: 20px;
    }
    & > div:nth-child(4) {
      padding-bottom: 20px;
      padding-top: 10px;
    }
  }
`;

const ProjectTitle = styled.div`
  width: max-content;
  font-size: 19px;
  font-weight: 600;
  color: ${theme.colors.primary};
  &:hover {
    color: ${theme.colors.shadow};
  }
`;

const ProjectDescription = styled.div`
  color: ${theme.colors.darkBlue};
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

const ProjectTags = styled.div`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-size: 16px;
  border: 1px solid ${theme.colors.primary};
  padding: 6px;
  margin-right: 10px;
  margin-top: 10px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
    margin-right: 7px;
    margin-top: 7px;
  }
`;

const projects = [
  {
    name: "Google Fonts app clone",
    img: "/image/proj_2.png",
    projectUrl: "https://nextjs-google-fonts.netlify.app/",
    repoUrl: "https://github.com/nguyend-nam/google-fonts-clone",
    description: (
      <>
        <HighLight>
          <a href="https://fonts.google.com" rel="noreferrer" target="_blank">
            Google Fonts app
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>{" "}
        clone with fully UI-UX implemented.
      </>
    ),
    techStack: ["Next.JS", "TypeScript", "TailwindCSS"],
  },
  {
    name: "React three fiber image gallery",
    img: "/image/proj_6.png",
    projectUrl: "https://dwarvesf-r3f.netlify.app/",
    repoUrl: "https://github.com/nguyend-nam/r3f-image-gallery",
    description: (
      <>
        Grid image gallery made with{" "}
        <HighLight>
          <a
            href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
            rel="noreferrer"
            target="_blank"
          >
            React three fiber
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>{" "}
        and{" "}
        <HighLight>
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            Next.JS
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["Next.JS", "TypeScript", "React three fiber", "GLSL"],
  },
  {
    name: "Which holiday?",
    img: "/image/proj_5.png",
    projectUrl: "https://which-holiday.vercel.app/",
    repoUrl: "https://github.com/nguyend-nam/which-holiday",
    description: <>View holidays of each country and their date on calendar.</>,
    techStack: ["Next.JS", "SWR", "Styled-components", "TailwindCSS"],
  },
  {
    name: "Aggregation App",
    img: "/image/proj_4.png",
    projectUrl: "https://aggregation-app.vercel.app/",
    repoUrl: "https://github.com/nguyend-nam/Aggregation-app",
    description: (
      <>
        Simple aggregation app using{" "}
        <HighLight>
          <a
            href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"
            rel="noreferrer"
            target="_blank"
          >
            GitHub APIs
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["React.JS", "CSS"],
  },
  {
    name: "Next.JS calendar page UI",
    img: "/image/proj_1.png",
    projectUrl: "https://dwarvesf-boilerplate.netlify.app/calendar",
    repoUrl: "https://github.com/nguyend-nam/nextjs-calendar",
    description: (
      <>
        Calendar section for dashboard UI built with{" "}
        <HighLight>
          <a
            href="https://github.com/dwarvesf/nextjs-boilerplate"
            rel="noreferrer"
            target="_blank"
          >
            dwarvesf&rsquo;s Next.JS boilerplate
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>
        .
      </>
    ),
    techStack: ["Next.JS", "TypeScript", "TailwindCSS"],
  },
  {
    name: "CSES Downloader",
    img: "/image/proj_3.png",
    projectUrl: "https://csessolutions.netlify.app/",
    repoUrl: "https://github.com/DecSP/cses-downloader",
    description: (
      <>
        <HighLight>
          <a href="https://cses.fi/" rel="noreferrer" target="_blank">
            CSES
            <LinkOutlined style={{ marginLeft: 2 }} rotate={45} />
          </a>
        </HighLight>{" "}
        problemset solutions downloader + packager with user-friendly web
        interface.
      </>
    ),
    techStack: ["JavaScript", "HTML", "CSS", "Python"],
  },
];

export default function Projects() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    !isSSR && (
      <div>
        <Head>
          <title>Projects - Nam Nguyen</title>
          <meta name="description" content="My projects" />
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
                    <span>Projects</span>
                  </Title>
                  <Description>
                    <p>
                      Some projects for courses, training and my self-studying.
                    </p>
                  </Description>
                  <ViewMore>
                    <a
                      href="https://github.com/nguyend-nam/?tab=repositories"
                      rel="noreferrer"
                      target="_blank"
                    >
                      View more on GitHub <SwapRightOutlined />
                    </a>
                  </ViewMore>
                </div>
                <ProjectsContainer>
                  {projects.map((project) => (
                    <ProjectCard key={project.name}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.projectUrl}
                      >
                        <Image
                          src={project.img}
                          alt={project.img}
                          layout="responsive"
                          width={100}
                          height={51}
                          style={{ objectFit: "cover" }}
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
                          </a>
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
            </>
            <Footer />
          </MainContent>
        </MainContainer>
      </div>
    )
  );
}
