import "./card.css";
import React, { useState } from "react";

const Card = (props) => {
  const { data } = props;

  const [selected, setSelected] = useState(data.className);
  const [underText, setUnderText] = useState("Чего сидишь? Порадуй котэ, ");
  const [byeText, setByeText] = useState("купи.");

  const select = () => {
    if (data.on !== 1) {
      return;
    }
    if (selected === "card") {
      setSelected("card_selected");
      setUnderText(data.underText);
      setByeText("");
    } else {
      setSelected("card");
      setUnderText("Чего сидишь? Порадуй котэ, ");
      setByeText("купи.");
    }
    console.log(selected);
  };

  const bye = {
    borderStyle: "dashed",
    borderWidth: "0 0 1px 0",
    color: "#1698D9",
    cursor: "pointer",
  };

  return (
    <div>
      <div className="cardBox">
        <div className={selected} onClick={select}>
          <div className="yastvo">{data.firstLine}</div>
          <div className="nyamyshka">{data.name}</div>
          <div className="nachinka">{data.nachinka}</div>
          <div className="oval">
            <div className="weight">{data.weight}</div>
          </div>

          <div className="kg">кг</div>
          <div className="portions">
            <span style={{ fontWeight: "700" }}>
              {`${data.portions.quantity}`}
            </span>
            {` порций`}
            <br />{" "}
            <span
              style={{
                fontFamily: "Trebuchet MS",
                fontWeight: "700",

                fontSize: "14px",

                lineHeight: "16px",
                color: "#666666",
              }}
            >
              {data.gift.quantity}
            </span>{" "}
            {data.gift.text}
            <br />
            {data.gift.addText}
          </div>
        </div>
        <div className="under">
          {data.on ? underText : "Печалька, с рыбой закончился."}
          <span style={bye} onClick={select}>
            {data.on ? byeText : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
