import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import 'relative/path/to/stylesheet.scss';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			
			<Navbar />
		
			<Jumbotron />
		</div>
	);
};

export default Home;
