import React, { useEffect, useState } from "react";
import TopBar from "../../TopBar/TopBar";
import Sidebar from "../Sidebar/Sidebar";
import SubAllServicess from "./SubAllServicess";

const AllServicess = () => {
	const [allServices, setAllServices] = useState([]);
	useEffect(() => {
		fetch("https://agile-forest-05247.herokuapp.com/services")
			.then((res) => res.json())
			.then((data) => {
				setAllServices(data);
			});
	}, []);
	return (
		<div className="container-fluid">
			<div className="row">
				<TopBar />
				<div className="col-md-2">
					<Sidebar />
				</div>
				<div className="col-md-10">
					<div className="row">
						{allServices.map((serviceList) => (
							<SubAllServicess
								key={serviceList._id}
								serviceList={serviceList}
							></SubAllServicess>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllServicess;
