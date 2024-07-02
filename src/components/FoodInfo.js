import React from "react";
import "./FoodInfo.css";
import JumpRope from "../assets/skip-rope.png";
import Cycling from "../assets/cycling.png";
import Dumbbell from "../assets/dumbbell.png";
import Running from "../assets/training.png";
import BarChart from "./BarChart";

const FoodInfo = ({ foodData1, foodData2 }) => {
	if (!foodData1) {
		return <div>Loading...</div>;
	}

	if (!foodData1 || foodData1.length === 0) {
		return (
			<div style={{ color: "green" }}>
				Please double-check your input! 🌼
			</div>
		);
	}

	const {
		fat_total_g,
		fat_saturated_g,
		sodium_mg,
		potassium_mg,
		cholesterol_mg,
		carbohydrates_total_g,
		fiber_g,
		sugar_g,
	} = foodData1[0];

	const serving_size_g = 100;

	const { name, protein, caloric } = foodData2.dishes[0];

	const isHighCalories = caloric > 220;

	const chartArr = [
		fat_total_g,
		fat_saturated_g,
		protein,
		sodium_mg / 1000,
		potassium_mg / 1000,
		cholesterol_mg / 1000,
		carbohydrates_total_g,
		fiber_g,
		sugar_g,
	];

	return (
		<div className="container">
			<h3>
				{serving_size_g}g {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
				Contains a Total of {caloric} Calories.
			</h3>
			{isHighCalories && (
				<p className="warning">
					<b>Alert:</b> The food you searched contains a high calorie
					content! ⚠️
				</p>
			)}
			<div className="upper-wrap">
				<div className="food-info">
					<ul>
						<li>
							<p className="name">Serving Size:</p>{" "}
							<p className="data">
								{serving_size_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Total Fat:</p>{" "}
							<p className="data">
								{fat_total_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Saturated Fat:</p>{" "}
							<p className="data">
								{fat_saturated_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Protein:</p>{" "}
							<p className="data">
								{protein}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Sodium:</p>{" "}
							<p className="data">
								{sodium_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Potassium:</p>{" "}
							<p className="data">
								{potassium_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Cholesterol:</p>{" "}
							<p className="data">
								{cholesterol_mg}
								<span>mg</span>
							</p>
						</li>
						<li>
							<p className="name">Total Carbohydrates:</p>{" "}
							<p className="data">
								{carbohydrates_total_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Fiber:</p>{" "}
							<p className="data">
								{fiber_g}
								<span>g</span>
							</p>
						</li>
						<li>
							<p className="name">Sugar:</p>{" "}
							<p className="data">
								{sugar_g}
								<span>g</span>
							</p>
						</li>
					</ul>
				</div>
				<div className="exercise-info">
					<div className="exercise">
						<img src={Running} alt="Icon" />
						<p>
							Be Fit & Healthy by a minimum of{" "}
							<b>{Math.ceil(caloric * 0.085714)}</b> Minutes of
							Running to burn <b>{caloric}</b> Calories!
						</p>
					</div>
					<div className="exercise">
						<img src={Cycling} alt="Icon" />
						<p>
							Feel the Joy as you Cycle for just{" "}
							<b>{Math.ceil(caloric * 0.125)}</b> Minutes to burn{" "}
							<b>{caloric}</b> Calories!
						</p>
					</div>
					<div className="exercise">
						<img src={Dumbbell} alt="Icon" />
						<p>
							To Torch those <b>{caloric}</b> Calories, hit the
							Gym for at least{" "}
							<b>{Math.ceil(caloric * 0.2381)}</b> Minutes
						</p>
					</div>
					<div className="exercise">
						<img src={JumpRope} alt="Icon" />
						<p>
							To skip to a Healthier you, Grab Skipping Rope and
							Skip for <b>{Math.ceil(caloric * 0.08)}</b> Minutes
							to burn <b>{caloric}</b> Calories!
						</p>
					</div>
				</div>
			</div>
			<div className="lower-wrap">
				<BarChart className="bar-chart" chartData={chartArr} />
			</div>
		</div>
	);
};

export default FoodInfo;
