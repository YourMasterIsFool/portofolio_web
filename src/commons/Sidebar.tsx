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
  selectedNav: string;
  experience: any;
  onScrollToSection: (e: any, id: string) => void;
}) => {
  return (
    <aside className="px-6 py-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:px-0 lg:py-20">
      <div className="profile-description">
        <img
          src={profile?.avatar || "/profile.jpeg"}
          alt={`${profile?.name || "Profile"} portrait`}
          className="mb-7 h-24 w-24 rounded-full object-cover object-center ring-2 ring-blue-400/80 ring-offset-4 ring-offset-black shadow-lg shadow-blue-950/40"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
          Software Engineer
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {profile?.name}
        </h1>
        <p className="mt-2 text-base font-medium tracking-wide text-gray-300">
          {profile?.jobTitle}
        </p>
        <p className="mt-5 max-w-sm text-sm font-light leading-6 tracking-wide text-gray-500">
          {profile?.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="inline-flex items-center gap-2">
            <Icon icon="solar:map-point-linear" className="text-blue-400" />
            {profile?.location}
          </span>
          <a
            href={`mailto:${profile?.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-blue-300"
          >
            <Icon icon="solar:letter-linear" className="text-blue-400" />
            Email me
          </a>
        </div>
      </div>
      <nav id="navigation" aria-label="Main navigation" className="mt-10 hidden lg:mt-0 lg:block">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
          Explore
        </p>
        <ul className="nav">
          <li>
            <button
              type="button"
            id="about"
            onClick={() => onScrollToSection(about, "about")}
            className={`nav-item  ${
              selectedNav == "about" ? "nav-active" : ""
            }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
            id="experience"
            onClick={() => onScrollToSection(experience, "experience")}
            className={`nav-item  ${
              selectedNav == "experience" ? "nav-active" : ""
            }`}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              type="button"
            id="project"
            onClick={() => onScrollToSection(project, "project")}
            className={`nav-item  ${
              selectedNav == "project" ? "nav-active" : ""
            }`}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-10 lg:mt-0">
        <a
          href={profile?.website || undefined}
          target="_blank"
          rel="noreferrer"
          className="mb-5 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
        >
          <span>View personal website</span>
          <Icon icon="iconoir:arrow-tr" />
        </a>
        <div className="icon-list">
          <a
            href={profile?.social?.instagram || undefined}
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={"mdi:instagram"} />
          </a>
          <a
            href={profile?.social?.linkedin || undefined}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={"iconoir:linkedin"} />
          </a>
          <a
            href={profile?.social?.github || undefined}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={"ant-design:github-filled"} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
