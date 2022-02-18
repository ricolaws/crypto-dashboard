import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import pattern from "patternomaly";
import { colorPatterns } from "../theme/colorPatterns";
import useWindowDimensions from "../hooks/getWindowDimensions";

function PortfolioChart(props) {
	const [portfolioChartData, setPortfolioChartData] = useState();
	const { width } = useWindowDimensions();

	const clickHandler = (evt, item) => {
		if (item.length > 0) {
			console.log(item);
			props.onSetFeaturedCoin(item[0].index);
		}
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: Math.min(width / 11, 120),
		plugins: {
			legend: {
				position: "top",
				align: "start",
			},
		},
		onClick: clickHandler,
	};

	const contrast2 = "#000";
	useEffect(() => {
		console.log("PC-useEffect");
		const chartData = {
			datasets: [
				{
					label: "Portfolio",
					backgroundColor: "#005",
					hoverOffset: 6,
					hoverBorderWidth: 1,
					borderRadius: 0,
					spacing: 0,
				},
			],
		};

		chartData.datasets[0].backgroundColor = props.data.map((_, i) => {
			return pattern.draw(colorPatterns[i][1], colorPatterns[i][0], contrast2);
		});
		chartData.labels = props.data.map((coin) => {
			return coin.name;
		});

		chartData.datasets[0].data = props.data.map((coin) => {
			return coin.currentValue;
		});

		setPortfolioChartData(chartData);
	}, [props.data, colorPatterns]);

	return (
		<React.Fragment>
			{portfolioChartData ? (
				<Doughnut data={portfolioChartData} options={chartOptions} />
			) : null}
		</React.Fragment>
	);
}

export default PortfolioChart;
