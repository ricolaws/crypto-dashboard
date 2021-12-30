import React from "react";

function Trade(props) {
  console.log(props.data);
  const content = (
    <div>
      <h3>{props.data.asset}</h3>
      {props.data.trades.map((trade) => {
        return <p>{trade}</p>;
      })}
    </div>
  );
  return <div>{content}</div>;
}

export default Trade;