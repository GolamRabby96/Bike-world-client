import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="row">
			<nav class="navbar navbar-expand-lg navbar-light navcolor">
				<div class="container-fluid">
					<a class="navbar-brand ms-3 text-info" to="#">
						Bike_world
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mb-2  mb-lg-0">
							<li class="nav-item me-5">
								<Link class="nav-link active" aria-current="page" to="#">
									Home
								</Link>
							</li>
							<li class="nav-item me-5">
								<Link class="nav-link" to="/dashboard">
									Dashboard
								</Link>
							</li>
							<li class="nav-item me-5">
								<Link class="nav-link" to="#">
									Services
								</Link>
							</li>
							<li class="nav-item me-5">
								<Link class="nav-link" to="#">
									Contact us
								</Link>
							</li>
							<li class="nav-item me-5">
								<Link class="nav-link" to="#">
									Docs
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
