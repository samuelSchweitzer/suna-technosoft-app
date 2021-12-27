import React, { useRef } from "react";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Title, SliderArrow } from "../common";
import "./styles/testimonials.scss";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonies = [
    {
      id: "1",
      name: "Mani Prakash",
      content:
        "I was looking for Java training and had been to many institutes for demo classes but was not satisfied. Finally, I came to Suna Technosoft institute and took demo classes. I felt it was better than any other institutes and I enrolled myself. The trainer gave real-time examples and in-depth knowledge about the subject. Overall, a good place to learn Java/J2ee.",
    },
    {
      id: "2",
      name: "Pranita",
      content:
        "I can confidently say that Suna Technosoft is the best institute for learning JAVA/J2EE course. It is a one-of-its-kind institute where students not only get real-time scenarios for various aspects of Java/J2EE, but also get a solid foundation for a flourishing career in the Java platform. Mr. Reddy sir is the best instructor for this course as far as I know. The way he teaches not only makes you a pro but will also instill immense confidence in building one's career in this domain.",
    },
    {
      id: "3",
      name: "Ashok",
      content:
        "Good training institute for JAVA/J2EE, detailed orientation. Training with real-time examples. Also helps in placement opportunities.",
    },
    {
      id: "4",
      name: "Chandana",
      content:
        "Learning at Suna Technosoft brought added value to my life. It gave me an opportunity to improve my skills and learn the concepts easily. I have received great support from the trainer all the time. I am thankful to the trainer Mr. Mahesh & Suna Technosoft for providing a platform to enhance my skills and an opportunity to showcase them.",
    },
    {
      id: "5",
      name: "Vanitha",
      content:
        "Excellent staff, after 4 years of career break, I got a job because of this institute.",
    },
    {
      id: "6",
      name: "Yogesh",
      content:
        "It was my pleasure to choose this institute to learn Java. I got a clear and satisfied training under the guidance of trainer Mr. Mahesh. Interview questions provided by him helped me a lot in cracking the interview.",
    },
  ];

  const renderTestimonies = () => {
    return testimonies.map((item) => (
      <div key={item.id} className="testimony-wrapper">
        <sup>
          <RiDoubleQuotesL className="quote-icon quote-icon-l" />
        </sup>

        <span className="testimony-content">
          <span>{item.content}</span>
        </span>

        <div className="author-rating">
          <p className="author-name">-- {item.name} --</p>
        </div>
      </div>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="testimonial-wrapper">
      <Title title="// Testimonials" subTitle="What our students say" />

      <div className="testimonials-wrapper">
        <SliderArrow sliderRef={sliderRef} />
        <div className="testimonials-inner">
          <Slider {...settings} ref={sliderRef}>
            {renderTestimonies()}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
