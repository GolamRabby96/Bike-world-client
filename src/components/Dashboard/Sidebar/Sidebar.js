import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSwatchbook,
	faCommentAlt,
	faCog,
	faUserFriends,
	faSignOutAlt,
	faUsers,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import MediaQuery from "react-responsive";
import ReactDOM from "react-dom";

const Sidebar = () => {
	const [Admin, setAdmin] = useState(false);

	useEffect(() => {
		fetch("https://agile-forest-05247.herokuapp.com/admin")
			.then((res) => res.json())
			.then((data) => {
				const currentUser = sessionStorage.getItem("email");

				for (let i = 0; i < data.length; i++) {
					if (data[i].email == currentUser) {
						setAdmin(true);
					}
				}
			});
	}, []);
	return (
		<div className="row">
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container-fluid">
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarTogglerDemo03"
							aria-controls="navbarTogglerDemo03"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<Link class="navbar-brand ps-5" to="/">
							Bike World
						</Link>
						<div class="collapse navbar-collapse" id="navbarTogglerDemo03">
							<ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
								{!Admin && (
									<li class="nav-item me-3">
										<Link to="/dashboard/myservicelist" className="nav-link">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Service List</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item me-3">
										<Link
											to="/dashboard/Adminservicelist"
											className="nav-link"
										>
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Service List</span>
										</Link>
									</li>
								)}
								{!Admin && (
									<li class="nav-item me-3">
										<Link to="/dashboard/userreview" className="nav-link">
											<FontAwesomeIcon icon={faCommentAlt} />{" "}
											<span>Review</span>
										</Link>
									</li>
								)}

								{Admin && (
									<li class="nav-item me-3">
										<Link to="/dashboard/addservices" className="nav-link">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Add Service</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item me-3" >
										<Link to="/dashboard/Admin" className="nav-link">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Add Admin</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item me-3">
										<Link to="/dashboard/AllServices" className="nav-link">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>All Services</span>
										</Link>
									</li>
								)}
								{/* {Admin && (
									<li class="nav-item me-3">
										<Link to="/doctor/setting" className="nav-link">
											<FontAwesomeIcon icon={faCog} /> <span>Settings</span>
										</Link>
									</li>
								)} */}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
