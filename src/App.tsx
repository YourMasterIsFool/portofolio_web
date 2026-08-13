import React, { Suspense, useRef, useState } from "react";

import Loading from "./commons/Loading.tsx";
import { data } from "./data.ts";

const Sidebar = React.lazy(() => import("./commons/Sidebar.tsx"));
const Experience = React.lazy(() => import("./commons/Experience.tsx"));
const Projects = React.lazy(() => import("./commons/Project.tsx"));
const About = React.lazy(() => import("./commons/About.tsx"));
const Footer = React.lazy(() => import("./commons/Footer.tsx"));
function App() {
  const project = useRef(null);
  const experience = useRef(null);
  const about = useRef(null);
  const [selectedNav, setSelectedNav] = useState<string>("about");

  const onScrollToSection = (elementRef: any, selected: string) => {
    setSelectedNav(selected);
    window.scrollTo({
      top: elementRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  // const fetchData = () => {
  //   fetch("../data.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-6 font-sans md:px-12 lg:flex-row lg:px-20">
          <div className="">
            <Sidebar
              selectedNav={selectedNav}
              about={about}
              experience={experience}
              project={project}
              onScrollToSection={(e, id) => {
                onScrollToSection(e, id.toString());
              }}
              profile={data?.profile}
            />
          </div>
          <main className="min-w-0 lg:w-3/5">
            <div ref={about}>
              <About
                about={data?.about}
                highlights={data?.highlights}
                coreSkills={data?.coreSkills}
                education={data?.education}
                certifications={data?.certifications}
              />
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
          </main>
        </div>
      </Suspense>
    </>
  );
}

export default App;
