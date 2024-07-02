import React, { useState } from "react";
import "./FoodForm.css";

const FoodForm = ({ onSubmit }) => {
	const [foodName, setFoodName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(foodName);
	};

	const handleChange = (e) => {
		setFoodName(e.target.value);
	};

	return (
		<div className="form-wrap">
			<h1>FoodWise</h1>
			<p>Because Once a Wise Men Said....</p>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter Food Name.."
					value={foodName}
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	);
};

export default FoodForm;
