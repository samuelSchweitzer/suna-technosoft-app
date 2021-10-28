import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../common/title/Title";
// import webDev from "../../assets/icons/web-development.png";
import uiDev from "../../assets/icons/ui-design.png";
import uiDevWhite from "../../assets/icons/ui-design-white.png";
import backend from "../../assets/icons/backend.png";
import backendWhite from "../../assets/icons/backend-white.png";
// import javaWhite from "../../assets/icons/java-white.png";
import { Card } from "react-bootstrap";
import "./styles/Services.scss";

const Services = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Back End Development",
      category: "backend",
      content:
        "Cras in nibh iaculis, imperdiet ipsum ut, congue nulla. Donec cursus egestas ante, sed faucibus felis congue quis.",
      icon: backend,
      iconWhite: backendWhite,
      iconColored: backend,
    },
    {
      id: 2,
      title: "Front End Development",
      category: "frontend",
      content:
        "Cras in nibh iaculis, imperdiet ipsum ut, congue nulla. Donec cursus egestas ante, sed faucibus felis congue quis.",
      icon: uiDev,
      iconWhite: uiDevWhite,
      iconColored: uiDev,
    },
  ]);

  const changeIcon = (id) => {
    const modifiedCourse = courses.map((course) =>
      course.id === id ? { ...course, icon: course.iconWhite } : course
    );
    setCourses(modifiedCourse);
  };

  const revertIcon = (id) => {
    const modifiedCourse = courses.map((course) =>
      course.id === id ? { ...course, icon: course.iconColored } : course
    );
    setCourses(modifiedCourse);
  };

  const renderCourses = () => {
    return courses.map((course) => (
      <div
        className="card-container"
        key={course.id}
        onMouseOver={() => changeIcon(course.id)}
        onMouseOut={() => revertIcon(course.id)}
      >
        <Link to={`/courses/${course.category}`}>
          <Card>
            <Card.Img
              variant="top"
              src={course.icon}
              className="card-icon"
              alt="card-icon"
            />
            <Card.Body>
              <Card.Title className="card-title">{course.title}</Card.Title>
              <Card.Text className="card-content">{course.content}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        {/* <div>
          <div className="hover-effect"></div>
        </div> */}
      </div>
    ));
  };

  return (
    <div className="services-wrapper">
      <Title title="// Services" subTitle="What we offer" />

      <div className="content-wrapper">{renderCourses()}</div>

      {/* <div className="view-btn">
        <button>View All Courses</button>
      </div> */}
    </div>
  );
};

export default Services;
