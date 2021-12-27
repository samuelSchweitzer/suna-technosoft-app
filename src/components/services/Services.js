import React from "react";
import training from "../../assets/icons/training.png";
import coding from "../../assets/icons/coding.png";
import outsourcing from "../../assets/icons/outsourcing.png";
import { Title } from "../common";
import "./styles/services.scss";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Software Development",
      content:
        "We provide software solutions and services to both businesses and individuals.",
      icon: coding,
    },
    {
      id: 2,
      title: "Software Training",
      content: "Professional training with real-time projects & assignments.",
      icon: training,
    },

    {
      id: 3,
      title: "Outsourcing",
      content:
        "We specialize in software outsourcing and can handle anything from software upgrades & bug fixes to data migration & content creation.",
      icon: outsourcing,
    },
  ];

  const renderCardsList = () => {
    return services.map((service) => (
      <div className="service" key={service.id}>
        <div className="service-icon-container">
          <img src={service.icon} className="service-icon" alt="service-icon" />
        </div>

        <div className="service-content-container">
          <div className="service-content-inner">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-content">{service.content}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="services-container">
      <div className="services-wrapper">
        <Title title="// Services" subTitle="What we do" />

        <div className="services">{renderCardsList()}</div>
      </div>
    </div>
  );
};

export default Services;
