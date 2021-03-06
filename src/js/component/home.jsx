import React, { useState, useEffect } from "react";
import Tarjeta from "./card.jsx";

//create your first component
const Home = () => {
	const [timer, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((timer) => timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row p-2 justify-content-center bg-dark">
					<div className="card text-white bg-dark mb-3 me-2 col-1">
						<div className="card-body position-absolute top-50 start-50 translate-middle">
							<h5 className="card-title d-flex">
								<i className="fas fa-clock"></i>
							</h5>
						</div>
					</div>
					<Tarjeta numero={Math.floor((timer / 10000) % 10)} />
					<Tarjeta numero={Math.floor((timer / 1000) % 10)} />
					<Tarjeta numero={Math.floor((timer / 100) % 10)} />
					<Tarjeta numero={Math.floor((timer / 10) % 10)} />
					<Tarjeta numero={timer % 10} />
				</div>
			</div>
		</div>
	);
};

export default Home;
