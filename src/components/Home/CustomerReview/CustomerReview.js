import React, { useEffect, useState } from "react";
import SubReview from "./SubReview";
import "./CustomerReview.css";
import dark from "../../../photos/dark.jpg";

const CustomerReview = () => {
	const [reviewUser, setReviewUser] = useState([]);
	useEffect(() => {
		fetch("https://agile-forest-05247.herokuapp.com/showreview")
			.then((res) => res.json())
			.then((data) => {
				setReviewUser(data);
			});
	}, []);

    const classget =()=>{
        const cl =document.getElementById("activeclass").firstChild.className += " active";
    }
    setTimeout(function wait(){
        if(reviewUser.length > 0){classget();}
    }, 500);
	return (
		<div className=" shadow mt-5">
			<div className="row">
				<div className="col-md-12 bg-info">
					<div
						id="carouselExampleControls1"
						class="carousel carousel1 slide"
						data-ride="carousel"
					>
						<div id="activeclass" class="carousel-inner carousel-inner1">
							{reviewUser.map((review) => (
								<SubReview review={review}></SubReview>
							))}
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleControls1"
							data-bs-slide="prev"
						>
							<span
								class="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleControls1"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
                
			</div>
		</div>
	);
};

export default CustomerReview;
