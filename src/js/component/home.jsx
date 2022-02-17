import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<Jumbotron />

			<Card />
		</div>
	);
};

export default Home;
