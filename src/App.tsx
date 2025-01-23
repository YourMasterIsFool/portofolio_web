import React, { Suspense, useEffect, useRef, useState } from "react";

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
    console.log(elementRef);
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
