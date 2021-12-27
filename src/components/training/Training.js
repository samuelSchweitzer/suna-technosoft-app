import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import uiDev from "../../assets/icons/ui-design.png";
import uiDevWhite from "../../assets/icons/ui-design-white.png";
import backend from "../../assets/icons/backend.png";
import backendWhite from "../../assets/icons/backend-white.png";
import { Title } from "../common";
import "./styles/training.scss";

const Training = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Front-end development",
      category: "frontend",
      content:
        "Creating the user interfaces (UI) that the user can see and interact with. You will learn all the core technologies that are in demand to build amazing UIs",
      icon: uiDev,
      iconWhite: uiDevWhite,
      iconColored: uiDev,
    },
    {
      id: 2,
      title: "Back-end development",
      category: "backend",
      content:
        "Coding business logic, calculations, database interactions etc. You will learn everything about Java language right from coding logic to database interaction.",
      icon: backend,
      iconWhite: backendWhite,
      iconColored: backend,
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
        <Link to={`/training/${course.category}`}>
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
      </div>
    ));
  };

  return (
    <div className="training-wrapper">
      <Title title="// Training" subTitle="What we offer" />
      <div className="content-wrapper">{renderCourses()}</div>
    </div>
  );
};

export default Training;
