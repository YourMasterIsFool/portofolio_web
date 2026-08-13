interface ExperienceProps {
  experiences: any | null;
}
const Experience = (props: ExperienceProps) => {
  return (
    <section className="default-padding px-6 lg:px-0">
      <div className="section-heading">
        <span>02</span>
        <h2>Experience</h2>
      </div>
      <div className="mt-8 space-y-4">
        {props.experiences?.map((item: any) => (
          <ExperienceComponent key={`${item.company}-${item.from}`} {...item} />
        ))}
      </div>
    </section>
  );
};

const ExperienceComponent = (data: any) => {
  return (
    <article className="experience-card group">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="sm:w-36 sm:shrink-0">
          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-gray-500">
            {data.from} - {data.to}
          </p>
          {data.to === "Present" && (
            <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Current role
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold tracking-tight text-gray-200 transition-colors group-hover:text-blue-300">
            {data.division}
          </h3>
          <p className="mt-1 text-sm font-medium text-blue-400">{data.company}</p>
          <p className="mt-1 text-xs text-gray-500">{data.position}</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-400">
            {data.description?.map((item: string) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {data.tools?.map((item: any) => (
              <li key={item} className="skill-chip">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Experience;
