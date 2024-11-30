import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      _id: "66c112ec318cb711e3417d08",
      institution: "Kingston University",
      degree: "MSc. Software Engineering",
      place: "London, UK",
      score: "Distinction",
      startDate: "2022-09-01T00:00:00.000Z",
      endDate: "2023-09-30T00:00:00.000Z",
    },
    {
      _id: "66c11431318cb711e3417d0a",
      institution: "London Metropolitan University",
      degree: "BSc. (Hons) Computing",
      place: "London, UK",
      score: "First Class Honours (1:1)",
      startDate: "2018-09-01T00:00:00.000Z",
      endDate: "2021-12-31T00:00:00.000Z",
    },
    {
      _id: "66c5e8b0824e10490ea1451e",
      institution: "New Uni University",
      degree: "BSc. (Hons) Computing",
      place: "London, UK",
      score: "First Class Honours (1:1)",
      startDate: "2018-09-01T00:00:00.000Z",
      endDate: "2021-12-29T00:00:00.000Z",
    },
  ];

  return (
    <div className="education" id="education">
      <h1 className="education__title">Education</h1>
      <div className="education__line"></div>
      {educationData.map((item, index) => (
        <div
          key={item._id}
          className={`education__item ${
            index % 2 === 0 ? "education__item--left" : "education__item--right"
          }`}
        >
          <div className="education__content">
            <p className="education__date">
              {new Date(item.startDate).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}{" "}
              -{" "}
              {new Date(item.endDate).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <h3 className="education__institution">{item.institution}</h3>
            <p className="education__degree">{item.degree}</p>
            <p className="education__score">{item.score}</p>
            <p className="education__place">{item.place}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
