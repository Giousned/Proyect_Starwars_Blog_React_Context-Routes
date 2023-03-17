import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto p-3 text-center">
		<div className="container mt-3 p-1">
			<div className="text-center">
				<Link to="/">
					Back Home
				</Link>
				<p className="mt-2">Hecho con ❤️ por Guille</p>
			</div>
		</div>
	</footer>
);
