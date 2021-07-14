import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../../App";
import Payment from "../../Payment/Payment";

const SubBuyServices = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [singleService, setSignleService] = useState({});
	// console.log(singleService);
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://agile-forest-05247.herokuapp.com/singleService/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setSignleService(data);
			});
	}, [id]);
	const randomid =Math.random().toString(36).substring(9);
	const handlepayment = (paymentId) => {
		const useremail = sessionStorage.getItem("email");
		const paymentAllData = {
			...singleService,
			useremail: useremail,
			paymentId: paymentId,
			status: "pending",
			key:randomid,
			_id:randomid
		};
        console.log(paymentAllData)
		fetch("https://agile-forest-05247.herokuapp.com/sellservices", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body:JSON.stringify(paymentAllData) ,
		})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
	};
	return (
		<div className="row">
			<div className="col-md-8 pt-5">
				<Payment handlepayment={handlepayment} />
			</div>
			<div className="col-md-4 mt-5">
				<div class="card" style={{ width: "18rem" }}>
					<img
						src={`https://agile-forest-05247.herokuapp.com/${singleService.image}`}
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">
							{singleService.serviceName} - ${singleService.price}
						</h5>
						<p class="card-text">{singleService.serviceDetails}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubBuyServices;
