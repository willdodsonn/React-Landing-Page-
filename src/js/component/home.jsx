import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import MoreCards from "./MoreCards.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Jumbotron />
			</div>
			<div>
				<Card />
			</div>
			<div>
				<MoreCards />
			</div>
		</div>
	);
};

export default Home;
