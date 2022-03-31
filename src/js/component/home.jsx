import React from "react";
import Tarjeta from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container">
				<div className="row p-2 justify-content-center bg-dark">
					<div className="card text-white bg-dark mb-3 me-2 col-1 border border-2">
						<div className="card-body">
							<h5 className="card-title justify-content-center">
								<i class="fas fa-clock"></i>
							</h5>
						</div>
					</div>
					<Tarjeta />
					<Tarjeta />
					<Tarjeta />
					<Tarjeta />
					<Tarjeta />
				</div>
			</div>
		</div>
	);
};

export default Home;
