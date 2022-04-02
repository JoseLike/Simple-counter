import React, { useState, useEffect } from "react";
import Tarjeta from "./card.jsx";

//create your first component
const Home = () => {
	const [timer, setSeconds] = useState(0);
	const [timer2, setSeconds2] = useState(0);
	const [timer3, setSeconds3] = useState(0);
	const [timer4, setSeconds4] = useState(0);
	const [timer5, setSeconds5] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((timer) => {if(timer==10){
				timer =0
			}else{
				timer + 1
			}});
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const interval2 = setInterval(() => {
			setSeconds2((timer2) => timer2 + 1);
		}, 10000);
		return () => clearInterval(interval2);
	}, []);
	useEffect(() => {
		const interval3 = setInterval(() => {
			setSeconds3((timer3) => timer3 + 1);
		}, 100000);
		return () => clearInterval(interval3);
	}, []);
	useEffect(() => {
		const interval4 = setInterval(() => {
			setSeconds4((timer4) => timer4 + 1);
		}, 1000000);
		return () => clearInterval(interval4);
	}, []);
	useEffect(() => {
		const interval5 = setInterval(() => {
			setSeconds5((timer5) => timer5 + 1);
		}, 10000000);
		return () => clearInterval(interval5);
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
					<Tarjeta numero={timer5} />
					<Tarjeta numero={timer4} />
					<Tarjeta numero={timer3} />
					<Tarjeta numero={timer2} />
					<Tarjeta numero={timer} />
				</div>
			</div>
		</div>
	);
};

export default Home;
