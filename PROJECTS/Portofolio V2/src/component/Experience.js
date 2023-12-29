import React from "react";

const Details = ({ position, company, companyLInk, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companyLInk} target="_blank" className="text-primary capitalize">@{company}</a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-lg">{work}</p>
      </div>
    </li>
  );
};

function Experience() {
  return (
    <div className="my-64">
      <h1 className="text-8xl w-full mb-32 font-bold text-center">
        Experience
      </h1>

      <div className="w-[75%] mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Cognizant Technology Solutions"
            companyLInk="https://www.cognizant.com/in/en"
            time="2019 - Present"
            work="Worked on various projects"
          />
          <Details
            position="Software Engineer"
            company="Cognizant Technology Solutions"
            companyLInk="https://www.cognizant.com/in/en"
            time="2019 - Present"
            work="Worked on various projects"
          />
          <Details
            position="Software Engineer"
            company="Cognizant Technology Solutions"
            companyLInk="https://www.cognizant.com/in/en"
            time="2019 - Present"
            work="Worked on various projects"
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
