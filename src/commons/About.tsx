const About = ({ about = [] }: { about: any | null }) => {
  return (
    <div className="default-padding">
      <h1 className="lg:hidden mx-6 fond-bold block text-white text-2xl border-b-4 border-white pb-2   w-2/5 lg:w-full">
        About
      </h1>
      <div className="text-gray-400 text-sm px-6 mt-8 lg:mt-10  text-base md:text-sm leading-7 tracking-normal font-light">
        {about?.map((item: any) => (
          <p className="mb-6">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
