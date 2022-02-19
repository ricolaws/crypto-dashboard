import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import PortfolioChart from "../components/PortfolioChart";
import ValueAndCost from "../components/ValueAndCost";
import CoinInfo from "../components/CoinInfo";
import ControlDashboard from "../components/ControlDashboard";
import ConditionalDisplay from "../components/ConditionalDisplay";
import classes from "./Dashboard.module.css";

function Dashboard(props) {
	const account = useSelector((state) => state.account);
	const showDash = useSelector((state) => state.ui.showDash);
	const featuredCoin = useSelector((state) => state.ui.featured);
	const dispatch = useDispatch();

	const clickAssetHandler = (coin) => {
		dispatch(uiActions.setFeatured(account.coinData[coin]));
	};

	return (
		<React.Fragment>
			{showDash && (
				<div className={classes.grid}>
					<div className={classes.overview}>
						<ValueAndCost
							title={"Portfolio"}
							value={account.portfolioValue}
							cost={account.portfolioCost}
							roi={account.portfolioROI}
						/>
					</div>
					<div className={classes.featured}>
						{!featuredCoin.none ? (
							<ValueAndCost
								title={featuredCoin.symbol.toUpperCase()}
								value={featuredCoin.currentValue}
								cost={featuredCoin.totalCost}
								roi={featuredCoin.roi}
							/>
						) : (
							`Select a Coin for details.`
						)}
					</div>
					<div className={classes.conditional}>
						<ConditionalDisplay />
					</div>
					<div className={classes.portfolio_chart}>
						<PortfolioChart
							onSetFeaturedCoin={clickAssetHandler}
							data={account.coinData}
						/>
					</div>
				</div>
			)}
			<div className={classes.labelsContainer}>
				<div className={`${classes.rows} ${classes.labels}`}>
					<div className={classes.nameHeading}></div>
					<div className={classes.symbol}>Symbol</div>
					<div>Price</div>
					<div>24hr.</div>
					<div>7d.</div>
					<div>M.Cap</div>
					<div>ROI</div>
				</div>
			</div>
			{showDash &&
				account.coinData.map((coin) => {
					return (
						<CoinInfo
							key={coin.id}
							name={coin.name}
							price={coin.currentPrice}
							image={coin.image}
							symbol={coin.symbol}
							marketCap={coin.marketCap}
							priceChange24={coin.priceChange_24h}
							priceChange7d={coin.priceChange_7d}
							roi={coin.roi}
						/>
					);
				})}
		</React.Fragment>
	);
}

export default Dashboard;
