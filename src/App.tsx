import React, { Suspense, useEffect, useRef, useState } from "react";

import Loading from "./commons/Loading.tsx";



const Sidebar = React.lazy(() => import("./commons/Sidebar.tsx"));
const Experience = React.lazy(() => import("./commons/Experience.tsx"));
const Projects = React.lazy(() => import("./commons/Project.tsx"));
const About = React.lazy(() => import("./commons/About.tsx"));
const Footer = React.lazy(() => import("./commons/Footer.tsx"));
function App() {
  const [data, setData] = useState<any>({
    profile: {
      social: {
        github: "https://github.com/YourMasterIsFool",
        linkedin: "https://www.linkedin.com/in/verrandy23/",
        instagram: "https://instagram.com/verzenbag",
      },
      name: "Verrandy Bagus Prasetyo",
      jobTitle: "Junior Software Engineer",
      description:
        "Just Junior Software Engineer, like to learning about new technology",
    },
    about: [
      "Back to 2012, when i was young i like playing a game online and from that i interested about computer. when I graduated from junior high school, I chose a high school with a major in Computer Engineering and networking from that i learn about progamming language about c++ and php. i really like about progamming language until when i  graduated from Informatics Engineering.",
      "After graduated i started new learning about framework started from vue js and Django(python) and build some web like movie list for small project what i learning. have been 2 years i work become freelance build some small project and work in PT Ericsson Indonesia become Frontend Developer using React Js",
    ],
    experiences: [
      {
        from: "Agustus 2023",
        company: "PT Majapahit Teknologi",
        to: "Present",
        division: "Software Engineer",
        position: "Junior Software Engineer",
        tools: ["Angular", "Microsoft Sql", "Laravel"],
        description:
          "Developing Project Bomba and Honda using laravel and angular js",
      },
      {
        from: "Nov 2021",
        company: "PT Ericsson Indonesia",
        to: "Jun 2023",
        division: "Software Engineer",
        position: "Junior Software Engineer",
        tools: ["React", "Postgresql", "Express Js", "React MUI"],
        description:
          "Developing internal project ericsson for bluecard and DMP Global network using React JS for frontend and Express JS for backend",
      },

      {
        from: "Feb 2021",

        to: "PRESENT",
        division: "Software Web Developer",
        position: "Freelance",
        tools: ["Flutter", "Laravel", "Flutter", "Mysql"],
        description:
          "Developing simple project using Laravel, Vue js and flutter",
      },

      {
        from: "Feb 2020",
        company: "PT Industri Kereta Api(Persero)",
        to: "Jul 2020",
        division: "Project Division",
        position: "Web Developer",
        tools: ["Laravel", "Mysql", "Code Igniter"],
        description:
          "Developing internal project ericsson for bluecard and DMP Global network using React JS for frontend and Express JS for backend",
      },

      {
        from: "Jun 2019",
        company: "PT Mitratani Dua Tujuh",
        to: "Aug 2019",
        division: "IT Division",
        position: "IT Support(Intership)",

        description:
          "Helping IT division for troubleshooting network in internal PT Mitratani Dua Tujuh",
      },
    ],
    projects: [
      {
        link: "https://github.com/YourMasterIsFool/Nabungku",
        title: "Nabungku",
        description:
          "Developing simple project Nabungku for my portofolio, using VueJS 2.0 and Laravel. web based for management financial planing like income, expense and goal",
        tools: ["Laravel", "Vue JS 2.0", "Tailwindcss"],
      },

      {
        link: "https://github.com/YourMasterIsFool/flutter_chat",
        title: "Simple Flutter Chat App",
        description: "Developing Simple chat app using flutter and firebase",
        tools: ["Flutter", "Firebase"],
      },

      {
        link: "https://github.com/YourMasterIsFool/flutter_chat",
        title: "Simple Notes App",
        description: "Developing Simple Notes app using flutter and sqlite",
        tools: ["Flutter", "Sqlite"],
      },
    ],
  });

  const project = useRef(null);
  const experience = useRef(null);
  const about = useRef(null);
  const [selectedNav, setSelectedNav] = useState<String>("about");

  const onScrollToSection = (elementRef: any, selected: String) => {
    setSelectedNav(selected);
    console.log(elementRef);
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const fetchData = () => {
    fetch("../data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    
      <Suspense fallback={<Loading />}>
        <div className="lg:flex  lg:flex-row mx-auto min-h-screen max-w-screen-xl px-0  font-sans md:px-12  lg:px-24 lg:!py-0">
          <div className="">
            <Sidebar
              selectedNav={selectedNav}
              about={about}
              experience={experience}
              project={project}
              onScrollToSection={onScrollToSection}
              profile={data?.profile}
            />
          </div>
          <div className="lg:w-2/3 ">
            <div ref={about}>
              <About about={data?.about} />
            </div>
            <div ref={experience}>
              <Experience experiences={data?.experiences} />
            </div>

            <div ref={project}>
              <Projects projects={data?.projects} />
            </div>
            <div className="lg:mb-10">
              <Footer />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
