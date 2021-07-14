import React from "react";
import './Myservice.css'

const MyServiceList = ({ mylist }) => {
	console.log(mylist);
	return (
		<div className="col-md-4 mt-5">
			<div class="card" style={{ width: "18rem" }}>
				<img
					src={`https://agile-forest-05247.herokuapp.com/${mylist.image}`}
					class="card-img-top"
					alt="..."
				/>
				<div class="card-body">
					<h5 class="card-title">
						{mylist.serviceName} - ${mylist.price}
					</h5>
					<p class="card-text">{mylist.serviceDetails}</p>
					<button class={`btn btn-${mylist.status} btn-sm container`}>{mylist.status}</button>
				</div>
			</div>
		</div>
	);
};

export default MyServiceList;
