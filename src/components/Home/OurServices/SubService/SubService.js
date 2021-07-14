import React from "react";
import '../SubService.css'

import {
	BrowserRouter as Router,
	Link
  } from "react-router-dom";
const SubService = ({ serviceList }) => {
	return (
		<div className="col-md-4 mt-5 cardanimationset">
			<div class="card " style={{ width: "100%" }}>
				<img className="" src={`https://agile-forest-05247.herokuapp.com/${serviceList.image}`} class="card-img-top" alt="..." />
				<div class="card-body cardanimationsetimg">
					<h5 class="card-title">{serviceList.serviceName} - ${serviceList.price}</h5>
					<p class="card-text">{serviceList.serviceDetails}</p>
					<Link to={`/dashboard/buyservice/${serviceList._id}`} class="btn btn-info btn-sm container">
						Select Item
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SubService;
