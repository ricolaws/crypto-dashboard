import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";
import PortfolioChart from "../components/PortfolioChart";
import ValueAndCost from "../components/ValueAndCost";
import CoinTable from "components/CoinTable/CoinTable";
import ConditionalDisplay from "../components/ConditionalDisplay";
import classes from "./Dashboard.module.css";

function Dashboard() {
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
			{showDash ? (
				<CoinTable data={account.coinData} dashDisplayMode={true} />
			) : null}
		</React.Fragment>
	);
}

export default Dashboard;
