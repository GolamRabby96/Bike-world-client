import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
	return (
		<section>
			<Sidebar />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h1
							className="mt-5"
							style={{ color: "tomato", textAlign: "center" }}
						>
							Welcome to dashboard
						</h1>

						<h2 style={{ color: "tomato", textAlign: "center" }}>For Admin Visit</h2>
						<h3 style={{ color: "tomato", textAlign: "center" }}>Admin: admin@gmail.com</h3>
						<h3 style={{ color: "tomato", textAlign: "center" }}>password: 123456</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
