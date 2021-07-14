import React from "react";

const SubReview = ({ review}) => {
	return (
		<div class="carousel-item ">
			<div class="carousel-caption carousel-caption1">
				<h3>{review.userreview}</h3>
				<p>{review.email}</p>
			</div>
		</div >
		// <div className="col-md-4 mb-3">
		// 	<div class="card">
		// 		<div class="card-header">{review.email}</div>
		// 		<div class="card-body">
		// 			<p class="card-text">
		// 				{review.userreview}
		// 			</p>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default SubReview;
