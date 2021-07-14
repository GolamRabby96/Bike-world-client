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

				for (let i=0; i < data.length; i++) {
					if (data[i].email == currentUser) {
						setAdmin(true);
					}
				}
			});
	}, []);
	return (
		<div className="row">
			<MediaQuery minWidth={960}>
				<div
					ClassName="dextopSidebar"
					className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
					style={{ height: "100vh" }}
				>
					<ul className="list-unstyled">
						<li>
							<Link to="/" className="text-white">
								<FontAwesomeIcon icon={faSwatchbook} />{" "}
								<span>Home</span>
							</Link>
						</li>
						{!Admin && (
							<li>
								<Link to="/dashboard/myservicelist" className="text-white">
									<FontAwesomeIcon icon={faSwatchbook} />{" "}
									<span>Service List</span>
								</Link>
							</li>
						)}
						{Admin && (
							<li>
								<Link to="/dashboard/Adminservicelist" className="text-white">
									<FontAwesomeIcon icon={faSwatchbook} />{" "}
									<span>Service List</span>
								</Link>
							</li>
						)}
						{!Admin && (
							<li>
								<Link to="/dashboard/userreview" className="text-white">
									<FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
								</Link>
							</li>
						)}

						{Admin && (
							<li>
								<Link to="/dashboard/addservices" className="text-white">
									<FontAwesomeIcon icon={faSwatchbook} />{" "}
									<span>Add Service</span>
								</Link>
							</li>
						)}
						{Admin && (
							<li>
								<Link to="/dashboard/Admin" className="text-white">
									<FontAwesomeIcon icon={faSwatchbook} /> <span>Add Admin</span>
								</Link>
							</li>
						)}
						{Admin && (
							<li>
								<Link to="/dashboard/AllServices" className="text-white">
									<FontAwesomeIcon icon={faSwatchbook} />{" "}
									<span>All Services</span>
								</Link>
							</li>
						)}
						{Admin && (
							<li>
								<Link to="/doctor/setting" className="text-white">
									<FontAwesomeIcon icon={faCog} /> <span>Settings</span>
								</Link>
							</li>
						)}
					</ul>
					<div>
						<Link to="/" className="text-white">
							<FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
						</Link>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={300} maxWidth={959}>
				<nav ClassName="mobileSidebar" class="navbar navbar-expand-lg bg-info">
					<div class="container-fluid">
						<button
							class="navbar-toggler bg-success mb-3"
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
							<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
								{!Admin && (
									<li class="nav-item mb-2">
										<Link to="/dashboard/myservicelist" className="text-white">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Service List</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item mb-2">
										<Link
											to="/dashboard/Adminservicelist"
											className="text-white"
										>
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Service List</span>
										</Link>
									</li>
								)}
								{!Admin && (
									<li class="nav-item mb-2">
										<Link to="/dashboard/userreview" className="text-white">
											<FontAwesomeIcon icon={faCommentAlt} />{" "}
											<span>Review</span>
										</Link>
									</li>
								)}

								{Admin && (
									<li class="nav-item mb-2">
										<Link to="/dashboard/addservices" className="text-white">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Add Service</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item mb-2">
										<Link to="/dashboard/Admin" className="text-white">
											<FontAwesomeIcon icon={faSwatchbook} />{" "}
											<span>Add Admin</span>
										</Link>
									</li>
								)}
								{Admin && (
									<li class="nav-item mb-2">
										<Link to="/doctor/setting" className="text-white">
											<FontAwesomeIcon icon={faCog} /> <span>Settings</span>
										</Link>
									</li>
								)}
							</ul>
						</div>
					</div>
				</nav>
			</MediaQuery>
		</div>
	);
};
export default Sidebar;
