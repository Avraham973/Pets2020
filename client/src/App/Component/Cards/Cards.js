/** @format */
import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import { Container } from "@material-ui/core";

export default function Cards() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const response = await axios.get("/api/cards");
    setCards(response.data);
  };

  return (
    <Container>
      {cards.map((cars) => (
        <Card key={cards._id} title={cards.title} text={cards.text} />
      ))}
    </Container>
  );
}
