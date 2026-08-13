import { Icon } from "@iconify/react";

interface ProjectProps {
  projects: any | null;
}
const Project = (props: ProjectProps) => {
  return (
    <section className="default-padding px-6 lg:px-0">
      <div className="section-heading">
        <span>03</span>
        <h2>Selected projects</h2>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-500">
        A selection of enterprise platforms and independent products spanning HR technology, payments, data systems, and responsive web experiences.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {props.projects?.map((item: any) => (
          <ProjectComponent key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

const ProjectComponent = (data: any) => {
  return (
    <a
      href={data.link || undefined}
      target="_blank"
      rel="noreferrer"
      className="project-card group"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
          {data.category || "Project"}
        </span>
        <Icon className="project-icon" icon="iconoir:arrow-tr" />
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-200 transition-colors group-hover:text-blue-300">
        {data.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-gray-500">{data.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {data.tools?.map((item: any) => (
          <li key={item} className="skill-chip">{item}</li>
        ))}
      </ul>
    </a>
  );
};

export default Project;
