import React from "react";
import PropTypes from "prop-types";

const Tarjeta = (props) => {
	return (
		<div className="d-flex card text-white bg-dark col-1 mb-3 me-2">
			<div className="d-flex card-body justify-content-center">
				<h1 className="card-title">{props.numero}</h1>
			</div>
		</div>
	);
};

Tarjeta.propTypes = {
	numero: PropTypes.number,
};

export default Tarjeta;
