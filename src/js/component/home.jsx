import React from "react";
import Tarjeta from "/workspace/react-hello/src/js/component/card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<Tarjeta />
				</div>
			</div>
		</div>
	);
};

export default Home;
