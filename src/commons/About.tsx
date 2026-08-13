const About = ({
  about = [],
  highlights = [],
  coreSkills = [],
  education,
  certifications = [],
  academicProject,
}: {
  about: any | null;
  highlights: any[];
  coreSkills: string[];
  education?: string;
  certifications: string[];
  academicProject?: string;
}) => {
  return (
    <section className="default-padding px-6 lg:px-0">
      <div className="section-heading">
        <span>01</span>
        <h2>About</h2>
      </div>
      <div className="mt-8 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Building reliable products that scale
        </p>
        <div className="text-base leading-7 tracking-normal text-gray-400 md:text-lg">
          {about?.map((item: any) => (
            <p key={item} className="mb-5">{item}</p>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
        {highlights.map((item) => (
          <div key={item.label} className="metric-card">
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.12em] text-gray-500 sm:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
        <div>
          <h3 className="eyebrow">Core stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="eyebrow">Education & certifications</h3>
          <p className="mt-4 text-sm leading-6 text-gray-400">{education}</p>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            <span className="font-semibold text-gray-300">Final project: </span>
            {academicProject}
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            {certifications.map((certification) => (
              <p key={certification} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {certification}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
