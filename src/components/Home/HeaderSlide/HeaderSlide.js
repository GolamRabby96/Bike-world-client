import React from "react";
import master from "../../../photos/master.jpg";
import two from "../../../photos/two.jpg";
import three from "../../../photos/three.jpg";

const HeaderSlide = () => {
	return (
				<div
					id="carouselExampleCaptions"
					class="carousel slide"
					data-bs-ride="carousel"
				>
					<div class="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							class="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src={master} class="d-block w-100 sliderImage" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5>Master Servicing</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
									quam, eveniet aliquam asperiores reiciendis amet.
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src={two} class="d-block w-100 sliderImage" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5>Bike Repair</h5>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
									repellendus quibusdam nam laborum quaerat ut?
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src={three} class="d-block w-100 sliderImage" alt="..." />
							<div class="carousel-caption d-none d-md-block">
								<h5>Bike wash</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
									aliquid autem. Possimus adipisci provident delectus.
								</p>
							</div>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
	);
};

export default HeaderSlide;
