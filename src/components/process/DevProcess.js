import React from "react";
import { BiNotepad, BiCodeAlt, BiBug, BiRocket } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { Title } from "../common";
import "./styles/devProcess.scss";

const DevProcess = () => {
  const processFlow1 = [
    {
      id: 1,
      icon: <BiNotepad />,
      title: "Planning",
      content: [
        "Analyse Business Requirement",
        "Understand client's expectations and pain points",
      ],
    },
    {
      id: 2,
      icon: <MdOutlineDesignServices />,
      title: "Design",
      content: ["UI/UX design", "Crafting the application architecture"],
    },
    {
      id: 3,
      icon: <BiCodeAlt />,
      title: "Development",
      content: [
        "Translate the design into code",
        "Implement features and functionalities",
      ],
    },
  ];

  const processFlow2 = [
    {
      id: 4,
      icon: <BiBug />,
      title: "Testing",
      content: [
        "Test the application rigorously for issues and bugs",
        "Make sure the application is free from bugs and meet all the requirements",
      ],
    },
    {
      id: 5,
      icon: <BiRocket />,
      title: "Deployment",
      content: ["Deploy the application into production for use of end users"],
    },
    {
      id: 6,
      icon: <RiToolsFill />,
      title: "Maintenance",
      content: [
        "Fix bugs that might arise in production",
        "Provide support services",
      ],
    },
  ];

  return (
    <div className="devProcess-wrapper">
      <Title title="" subTitle="Our process" />

      <div className="process-container">
        {processFlow1.map((process) => (
          <div className="process-wrapper" key={process.id}>
            {/* <h1 className="process-count">{process.id}</h1> */}
            <h1 className="process-icon">{process.icon}</h1>
            <h3 className="process-title">{process.title}</h3>
            <ul>
              {process.content.map((item, index) => {
                return (
                  <li key={index}>
                    <GiCheckMark className="process-list-check" /> {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {processFlow2.map((process) => (
          <div className="process-wrapper" key={process.id}>
            {/* <h1 className="process-count">{process.id}</h1> */}
            <h1 className="process-icon">{process.icon}</h1>
            <h3 className="process-title">{process.title}</h3>
            <ul>
              {process.content.map((item, index) => {
                return (
                  <li key={index}>
                    <GiCheckMark className="process-list-check" /> {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevProcess;
