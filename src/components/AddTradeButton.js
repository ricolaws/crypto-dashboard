import React from "react";
import classes from "./AddTradeButton.module.css";
import btn from "../image/add-trade-button-1.svg";

function AddTrade(props) {
  const clickHandler = () => {
    props.onAddTrade();
  };

  return (
    <div className={classes.container}>
      <button className={classes.addButton} onClick={clickHandler}>
        Add Trade
      </button>
    </div>
  );
}

export default AddTrade;
