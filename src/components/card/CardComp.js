import React from "react";
import { Card } from "react-bootstrap";
import training from "../../assets/icons/training.png";
import coding from "../../assets/icons/coding.png";
import outsourcing from "../../assets/icons/outsourcing.png";
import "./styles/CardComp.scss";

const CardComp = () => {
  const cardsList = [
    {
      id: 1,
      title: "Training",
      content:
        "Cupidatat non proident sunt culpa qui officia deserunt mollit anim.",
      icon: training,
    },
    {
      id: 2,
      title: "Development",
      content:
        "Cupidatat non proident sunt culpa qui officia deserunt mollit anim.",
      icon: coding,
    },
    {
      id: 3,
      title: "Outsourcing",
      content:
        "Cupidatat non proident sunt culpa qui officia deserunt mollit anim.",
      icon: outsourcing,
    },
  ];

  const renderCardsList = () => {
    return cardsList.map((card) => (
      <Card className="card" key={card.id}>
        <Card.Img
          variant="top"
          src={card.icon}
          className="card-icon"
          alt="card-icon"
        />
        <Card.Body>
          <Card.Title className="card-title">{card.title}</Card.Title>
          <Card.Text className="card-content">{card.content}</Card.Text>
        </Card.Body>
      </Card>
    ));
  };

  return <div className="cards-wrapper">{renderCardsList()}</div>;
};

export default CardComp;
