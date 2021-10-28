import React, { useState, useEffect } from "react";
import { courses } from "../../data/Courses";
import Footer from "../../components/footer/Footer";
import Header2 from "../../components/header2/Header2";
import "./styles/CourseDetails.scss";
import Contact from "../../components/contact/Contact";

const CourseDetails = (props) => {
  const [bannerTitle, setBannerTitle] = useState("");
  const courseCategory = props.match.params.slug;

  useEffect(() => {
    switch (courseCategory) {
      case "frontend":
        setBannerTitle("Front end development");
        return null;

      case "backend":
        setBannerTitle("Back end development");
        return null;

      default:
        return null;
    }
  }, [courseCategory]);

  const renderCourses = () => {
    return courses[courseCategory].map((course) => (
      <div key={course.id} className="course-card">
        <img src={course.image} alt={course.title} />
        <h3 className="course-title">{course.title}</h3>
        {/* <p className="course-content">{course.content}</p> */}
      </div>
    ));
  };

  return (
    <div className="course-container">
      <Header2 />
      <div className="course-banner-container">
        <div className="course-banner-content">
          <h3>{bannerTitle}</h3>
        </div>
      </div>
      <div className="course-wrapper">
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
