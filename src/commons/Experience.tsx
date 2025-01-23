interface ExperienceProps {
  experiences: any | null;
}
const Experience = (props: ExperienceProps) => {
  return (
    <div className="default-padding">
      <h1 className="lg:hidden mx-6 fond-bold block text-white text-2xl border-b-4 border-white pb-2  mb-6 w-2/5 w-1/3">
        Experience
      </h1>
      {props.experiences?.map((item: any) => ExperienceComponent(item))}
    </div>
  );
};

const ExperienceComponent = (data: any) => {
  return (
    <div className="card text-gray-500">
      <div className="lg:grid lg:gap-x-6 lg:grid-cols-5">
        <div className="lg:col-span-2  !text-xs flex flex-row items-start lg:pt-2 pt-1 lg:mb-0 mb-3">
          <span className="mr-1">{data.from}</span>
          <span className="">-</span>
          <span className="ml-1">{data.to}</span>
        </div>
        <div className="lg:col-span-3">
          <h1 className="card-title flex flex-row justify-between">
            <span>{data.division}</span>
            {/* <Icon className="card-icon" icon={"iconoir:arrow-tr"} /> */}
          </h1>
          <p className="text-gray-400 text-xs">{data.position}</p>
          <p className="text-gray-300 fond-bold text-sm text-base mt-2">
            <span className="text-gray-500"></span> {data.company}
          </p>
          <p className="mt-4 text-xs font-light">
            <ul className="flex flex-col space-y-1">{data.description}</ul>
          </p>
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
  );
};

export default Experience;
