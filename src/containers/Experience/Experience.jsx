import React, { useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    id: "1",
    title: "Crew Trainer",
    company: "McDonald’s",
    location: "London, UK",
    joinedDate: "October 2022",
    finishedDate: "May 2023",
    description: [
      "Ensure adherence to Health and Safety regulations, fostering a safe workplace environment.",
      "Mentor new crew members, sharing knowledge and guiding their development, contributing to a cohesive and high-performing team.",
      "Take ownership of food preparation, meticulously following charts/screens to ensure accurate quantity and adapt as needed.",
      "Demonstrated adaptability, resourcefulness, and commitment to personal growth by quickly acquiring and mastering job responsibilities.",
    ],
  },
  {
    id: "2",
    title: "Food Handler/Photographer",
    company: "Tourist Road Bistro",
    location: "San Francisco, CA",
    joinedDate: "October 2018",
    finishedDate: "October 2019",
    description: [
      "Provided outstanding customer service by attending to guests' needs and ensuring a positive dining experience.",
      "Excelled in a fast-paced environment, effectively managing restaurant operations during peak hours.",
      "Demonstrated versatility by serving as a photographer during parties and events, capturing precious moments for guests.",
      "Maintained professionalism and attention to detail while multitasking between serving duties and photography assignments.",
    ],
  },
  {
    id: "3",
    title: "Junior Developer Intern",
    company: "BazarHub Pvt. Ltd.",
    location: "Pokhara, Nepal",
    joinedDate: "January 2022",
    finishedDate: "July 2022",
    description: [
      "Spearheaded the design process for mobile app screens using Figma, translating vision into reality and setting the standard for intuitive UI design.",
      "Led research work on similar applications, driving innovation and informing strategic design decisions to deliver standout products.",
      "Demonstrated exceptional problem-solving and analytical prowess by meticulously gathering requirements, laying the groundwork for successful application development.",
      "Elevated application robustness and functionality through rigorous API testing and seamless CRUD operations using Postman, guaranteeing a superior user experience.",
      "Collaborated closely with senior developers, playing a pivotal role in implementing key functionalities and ensuring the timely and successful delivery of projects.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experienceData[0]);

  return (
    <div className="experience" id="experience">
      <div className="experience__container">
        {/* Left Sidebar */}
        <div className="experience__sidebar">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`experience__company ${
                activeExperience.id === exp.id
                  ? "experience__company--active"
                  : ""
              }`}
              onClick={() => setActiveExperience(exp)}
            >
              {exp.company}
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="experience__separator" />

        {/* Right Content */}
        <div className="experience__details">
          <h2 className="experience__title">{activeExperience.title}</h2>
          <p className="experience__dates">
            {activeExperience.joinedDate} - {activeExperience.finishedDate}
          </p>
          <ul className="experience__description">
            {activeExperience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
