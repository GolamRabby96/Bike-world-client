import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SubBuyServices from "./SubBuyService/SubBuyService";

const BuyService = () => {
	return (
		<div className="">
			<Sidebar />
			<section className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="top-bar-brand"></div>
						<SubBuyServices />
					</div>
				</div>
			</section>
		</div>
	);
};

export default BuyService;
