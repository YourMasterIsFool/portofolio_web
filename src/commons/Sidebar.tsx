import { Icon } from "@iconify/react";

const Sidebar = ({
  profile,
  project,
  about,
  experience,
  selectedNav,
  onScrollToSection,
}: {
  profile: any | null;
  project: any;
  about: any;
  selectedNav: String;
  experience: any;
  onScrollToSection: (e: any, id: String) => void;
}) => {
  return (
    <div className="lg:sticky lg:px-0 p-6 lg:top-0 lg:flex lg:h-screen lg:w-2/3 lg:flex-col lg:justify-between lg:py-24 ">
      <div className="profile-description">
        <h1 className="text-white tracking-tight  text-2xl sm:text-3xl  font-bold">
          {profile?.name}
        </h1>
        <p className="lg:text-base text-a font-light text-gray-400 tracking-wide">
          {profile?.jobTitle}
        </p>
        <p className=" text-sm font-light text-gray-500 lg:mt-4 mt-6 tracking-wide">
          {profile?.description}
        </p>
      </div>
      <div id="navigation" className="flex h-0  lg:h-64 mt-4 lg:mt-0 flex-col">
        <ul className="nav">
          <li
            id="about"
            onClick={() => onScrollToSection(about, "about")}
            className={`nav-item  ${
              selectedNav == "about" ? "nav-active" : ""
            }`}
          >
            About
          </li>
          <li
            id="experience"
            onClick={() => onScrollToSection(experience, "experience")}
            className={`nav-item  ${
              selectedNav == "experience" ? "nav-active" : ""
            }`}
          >
            Experience
          </li>
          <li
            id="project"
            onClick={() => onScrollToSection(project, "project")}
            className={`nav-item  ${
              selectedNav == "project" ? "nav-active" : ""
            }`}
          >
            Projects
          </li>
        </ul>
      </div>
      <div className="icon-list lg:mt-0 mt-6">
        <div className="flex flex-row">
          <a href={profile?.social?.instagram || null}>
            <Icon icon={"mdi:instagram"} />
          </a>
          <a href={profile?.social?.linkedin || null}>
            <Icon icon={"iconoir:linkedin"} />
          </a>
          <a href={profile?.social?.github || null}>
            <Icon icon={"ant-design:github-filled"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
