import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
	return (
		<section>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						<Sidebar/>
					</div>
					<div className="col-md-10">
					<div className="top-bar-brand"></div>
						<h1 className="mt-5" style={{color:'tomato', textAlign:'center'}}>Welcome to dashboard</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
