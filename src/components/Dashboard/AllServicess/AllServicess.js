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
		<div>
			<Sidebar />
			<div className="container">
			<div className="row">
				<div className="col-md-12">
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
		</div>
	);
};

export default AllServicess;
