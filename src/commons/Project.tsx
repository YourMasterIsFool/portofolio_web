import { Icon } from "@iconify/react";

interface ProjectProps {
  projects: any | null;
}
const Project = (props: ProjectProps) => {
  return (
    <div className="default-padding">
      <h1 className="lg:hidden mx-6 fond-bold block text-white text-2xl border-b-4 border-white pb-2  mb-6 w-2/5 lg:w-1/3">
        Projects
      </h1>
      {props.projects?.map((item: any) => ProjectComponent(item))}
    </div>
  );
};

const ProjectComponent = (data: any) => {
  return (
    <a href={data.link || null}>
      <div className="card text-gray-500">
        <div className="">
          <div className="">
            <h1 className="card-title">
              <h1 className="card-title flex w-full flex-row justify-between">
                <span>{data.title}</span>
                <Icon className="card-icon" icon={"iconoir:arrow-tr"} />
              </h1>
            </h1>
            <p className="text-gray-400 text-xs">{data.position}</p>
            <p className="text-gray-300 fond-bold text-sm text-base mt-2">
              <span className="text-gray-500"></span> {data.company}
            </p>
            <p className="mt-4 text-xs font-light">{data.description}</p>
            <ul className="flex mt-4 flex-wrap flex-row">
              {data.tools?.map((item: any) => (
                <li className="mr-3 mb-2 tracking-wide font-light text-xs rounded-full px-4 py-2 text-xs bg-blue-500 bg-opacity-10 text-blue-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
