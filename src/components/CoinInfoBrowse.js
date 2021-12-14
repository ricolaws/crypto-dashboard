import React from "react";
import classes from "../pages/BrowseCoins.module.css";

function CoinInfoBrowse({
  image,
  name,
  symbol,
  price,
  marketCap,
  priceChange24,
  ath,
  volume,
}) {
  function numFormat(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  if (!priceChange24) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.rows}>
        <div className={classes.name}>
          <img src={image} alt="crypto" />
          <span>{name}</span>
        </div>
        <p className={classes.symbol}>{symbol.toUpperCase()}</p>

        <p className={classes.price}>
          $
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
          })}
        </p>
        {priceChange24 < 0 ? (
          <p className={classes.red}>{priceChange24.toFixed(2)}%</p>
        ) : (
          <p className={classes.green}>{priceChange24.toFixed(2)}%</p>
        )}
        <p className={classes.ath}>
          $
          {ath.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 3,
          })}
        </p>
        <p className={classes.marketCap}>${numFormat(marketCap)}</p>
        <p className={classes.volume}>${numFormat(volume)}</p>
      </div>
    </div>
  );
}

export default CoinInfoBrowse;
