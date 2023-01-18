import Card from "./card";
import "./main.css";
import React from "react";

const Main = () => {
  const packetWithFoieGras = {
    firstLine: "Сказачное заморское яство",
    name: "Нямушка",
    nachinka: "с фуа-гра",
    weight: "0,5",
    portions: {
      quantity: "10",
      text: "порций",
    },
    gift: {
      quantity: "",
      text: "мышь в подарок",
    },

    underText: "Печень утки разварная с артишоками.",

    on: 1,
    className: "card",
  };

  const packetWithFish = {
    firstLine: "Сказачное заморское яство",
    name: "Нямушка",
    nachinka: "с рыбой",
    weight: "2",
    portions: {
      quantity: "40",
      text: "порций",
    },
    gift: {
      quantity: "2",
      text: "мыши в подарок",
    },
    underText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    on: 0,
    className: "cardOff",
  };

  const packetWithChicken = {
    firstLine: "Сказачное заморское яство",
    name: "Нямушка",
    nachinka: "с курой",
    weight: "5",
    portions: {
      quantity: "100",
      text: "порций",
    },
    gift: {
      quantity: "5",
      text: "мышей в подарок",
      addText: "заказчик доволен",
    },
    underText: "Филе из цыплят с трюфелями в бульоне.",
    on: 1,
    className: "card",
  };
  return (
    <div className="mainDiv">
      <div>
        <div className="heading">Ты сегодня покормил кота?</div>
        <div className="conteinerCard">
          <div className="card1">
            <Card data={packetWithFoieGras} />
          </div>
          <div className="card2">
            <Card disabled data={packetWithFish} />
          </div>
          <div className="card3">
            <Card data={packetWithChicken} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
