import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	indexAxis: "x",
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Nutrients Chart",
		},
	},

	scales: {
		y: {
			title: {
				display: true,
				text: "Quantity (g)",
			},
		},
	},
};

const labels = [
	"Total Fat",
	"Saturated Fat",
	"Protein",
	"Sodium",
	"Potassium",
	"Cholesterol",
	"Carbohydrates",
	"Fiber",
	"Sugar",
];

const BarChart = ({ chartData }) => {
	return (
		<Bar
			options={options}
			data={{
				labels,
				datasets: [
					{
						label: "Nutrients Quantity",
						data: [...chartData],
						backgroundColor: "#fff9",
					},
				],
			}}
		/>
	);
};

export default BarChart;
