import React, { useState, useEffect } from "react";
import { courses } from "../../data/Courses";
import {
  Header,
  CarouselSlideContent,
  Contact,
  Footer,
} from "../../components";
import { Title } from "../../components/common";
import "./styles/courseDetails.scss";

const CourseDetails = (props) => {
  const [bannerTitle, setBannerTitle] = useState("");
  const courseCategory = props.match.params.slug;

  useEffect(() => {
    switch (courseCategory) {
      case "frontend":
        setBannerTitle("Front-end development");
        return null;

      case "backend":
        setBannerTitle("Java training");
        return null;

      default:
        props.history.push("/404");
        return null;
    }
  }, [courseCategory, props.history]);

  const data = {
    id: "course-banner-container",
    title: bannerTitle,
    content: "",
    actionBtn: "Enquire course",
    targetId: "training",
  };

  const renderCourses = () => {
    return (
      bannerTitle !== "" &&
      courses[courseCategory].map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} />
          <h3 className="course-title">{course.title}</h3>
        </div>
      ))
    );
  };

  return (
    <div className="course-container">
      <Header />
      <div className="carousel-container">
        <CarouselSlideContent data={data} />
      </div>

      <div className="course-wrapper">
        <Title title="// Technologies" subTitle="What you'll learn" />
        <div className="course-list-wrapper">
          <div className="course-list">{renderCourses()}</div>
        </div>
      </div>
      <div className="contact-section-container">
        <Contact />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default CourseDetails;
