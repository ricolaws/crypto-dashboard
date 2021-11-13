import React from "react";
import classes from "./CoinInfo.module.css";

function CoinInfo({
  image,
  name,
  symbol,
  price,
  marketCap,
  priceChange,
  volume,
  roi,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.coin}>
          <img src={image} alt="crypto" />
          <h4>{name}</h4>
          <p className={classes.symbol}>{symbol.toUpperCase()}</p>
        </div>
        <div className={classes.data}>
          <p className={classes.price}>${price}</p>
          <p className={classes.marketCap}>${marketCap.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className={classes.red}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={classes.green}>{priceChange.toFixed(2)}%</p>
          )}
          <p className={classes.volume}>${volume.toLocaleString()}</p>
          {roi < 0 ? (
            <p className={classes.red}>{roi.toFixed(2)}%</p>
          ) : (
            <p className={classes.green}>{roi.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoinInfo;