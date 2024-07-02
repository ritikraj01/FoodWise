import React, { useState, useEffect } from "react";
import FoodForm from "./components/FoodForm";
import FoodInfo from "./components/FoodInfo";
import axios from "axios";
import "./App.css";

function App() {
	const [foodData1, setFoodData1] = useState("");
	const [foodData2, setFoodData2] = useState("");

	const fetchFoodData = async (foodName) => {
		const apiKey1 = process.env.REACT_APP_API_NINJAS_KEY;
		const apiKey2 = process.env.REACT_APP_RAPID_API_KEY;
		try {
			const res1 = await axios.get(
				`https://api.api-ninjas.com/v1/nutrition?query=${foodName}`,
				{
					headers: {
						"X-Api-Key": apiKey1,
					},
				}
			);
			const res2 = await axios.get(
				`https://dietagram.p.rapidapi.com/apiFood.php?name=${foodName}&lang=en`,
				{
					headers: {
						"x-rapidapi-key": apiKey2,
						"x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
					},
				}
			);
			const foodData1 = res1.data;
			const foodData2 = res2.data;
			setFoodData1(foodData1);
			setFoodData2(foodData2);
		} catch (error) {
			console.error("Failed to fetch nutritional information:", error);
		}
	};

	useEffect(() => {
		fetchFoodData("water");
	}, []);

	const handleFoodSubmit = (foodName) => {
		fetchFoodData(foodName);
	};

	return (
		<div className="App">
			<FoodForm onSubmit={handleFoodSubmit} />
			{foodData1 && (
				<FoodInfo foodData1={foodData1} foodData2={foodData2} />
			)}
		</div>
	);
}

export default App;
