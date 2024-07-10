
import { Icon } from "@iconify/react";
import { HighLight } from "../components/HighLight/HighLight";

export const projects = [
    {
        name: "Problem Randomizer",
        img: "/image/proj-probrand.png",
        projectUrl: "https://problem-randomizer.vercel.app/randomizer",
        repoUrl: "https://github.com/problem-randomizer",
        wip: true,
        description: (
            <>
                Personalized competitive programming platform with various coding problems from{" "}
                <HighLight>
                    <a href="https://codeforces.com/" rel="noreferrer" target="_blank">
                        Codeforces
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
                </HighLight>,{" "}
                <HighLight>
                    <a href="https://atcoder.jp/" rel="noreferrer" target="_blank">
                        AtCoder
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
                </HighLight> etc.
            </>
        ),
        techStack: ["Next.js", "TypeScript", "SWR", "TailwindCSS", "Ant Design", "Storybook"],
    },
    {
        name: "Google Fonts app clone",
        img: "/image/proj-ggfonts-nuxt.png",
        projectUrl: "https://nuxt-google-fonts.vercel.app/",
        repoUrl: "https://github.com/nguyend-nam/nuxt-google-fonts",
        description: (
            <>
                <HighLight>
                    <a href="https://fonts.google.com" rel="noreferrer" target="_blank">
                        Google Fonts app
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
                clone using{" "}
                <HighLight>
                    <a href="https://nuxt.com/" rel="noreferrer" target="_blank">
                        Nuxt.js
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
                </HighLight> and{" "}
                <HighLight>
                    <a href="https://antdv.com/docs/vue/introduce" rel="noreferrer" target="_blank">
                        Ant Design Vue
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
                </HighLight>.
            </>
        ),
        techStack: ["Nuxt.js", "TypeScript", "TailwindCSS", "Ant Design Vue"],
    },
    {
        name: "Code Tour",
        img: "/image/proj-codetour.png",
        projectUrl: "https://code-tour.js.org",
        repoUrl: "https://github.com/nguyend-nam/code-tour",
        description: (
            <>
                React TypeScript library offering interactive code walkthroughs for the web. View the library on{" "}
                <HighLight>
                    <a
                        href="https://www.npmjs.com/package/@nguyend-nam/code-tour"
                        rel="noreferrer"
                        target="_blank"
                    >
                        NPM
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
                </HighLight>.
            </>
        ),
        techStack: ["Next.js", "TypeScript", "NPM", "TailwindCSS"],
    },
    {
        name: "Scrollery",
        img: "/image/proj-scrollery.png",
        projectUrl: "https://scrollery.js.org",
        repoUrl: "https://github.com/nguyend-nam/scrollery",
        description: (
            <>
                React TypeScript library that empowers developers to effortlessly
                animate contents on scroll. View the library on{" "}
                <HighLight>
                    <a
                        href="https://www.npmjs.com/package/@nguyend-nam/scrollery-ts"
                        rel="noreferrer"
                        target="_blank"
                    >
                        NPM
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
                </HighLight>.
            </>
        ),
        techStack: ["Next.js", "TypeScript", "NPM", "TailwindCSS"],
    },
    {
        name: "React three fiber image gallery",
        img: "/image/proj-r3fimages.png",
        projectUrl: "https://dwarvesf-r3f.netlify.app",
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
                    <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
                        Next.js
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
            </>
        ),
        techStack: ["Next.js", "TypeScript", "React three fiber", "GLSL"],
    },
    {
        name: "Which holiday?",
        img: "/image/proj-holiday.png",
        projectUrl: "https://whichholiday.vercel.app/",
        repoUrl: "https://github.com/nguyend-nam/which-holiday",
        description: <>View holidays of each country and their date on calendar.</>,
        techStack: ["Next.js", "SWR", "styled-components", "TailwindCSS"],
    },
    {
        name: "Aggregation App",
        img: "/image/proj-aggapp.png",
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
            </>
        ),
        techStack: ["ReactJS", "CSS"],
    },
    {
        name: "Next.js calendar page UI",
        img: "/image/proj-calui.png",
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
                        dwarvesf&rsquo;s Next.js boilerplate
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
            </>
        ),
        techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
        name: "CSES Downloader",
        img: "/image/proj-cses.png",
        projectUrl: "https://csessolutions.netlify.app",
        repoUrl: "https://github.com/DecSP/cses-downloader",
        description: (
            <>
                <HighLight>
                    <a href="https://cses.fi/" rel="noreferrer" target="_blank">
                        CSES
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
                problemset solutions downloader + packager with user-friendly web
                interface.
            </>
        ),
        techStack: ["JavaScript", "HTML", "CSS", "Python"],
    },
];