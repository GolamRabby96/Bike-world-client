import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MyServiceList from "./MyServiceList";

const ServiceList = () => {
	const [myserviceList, setMyserviceList] = useState([]);
	console.log(myserviceList);
	const email = sessionStorage.getItem("email");

	useEffect(() => {
		fetch(`https://agile-forest-05247.herokuapp.com/myservices/${email}`)
			.then((response) => response.json())
			.then((data) => {
				setMyserviceList(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div>
			<Sidebar />
			<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="top-bar-brand"></div>
                    {myserviceList &&
					myserviceList.map((mylist) => <MyServiceList mylist={mylist} />)}
				</div>
			</div>
		</div>
		</div>
		
	);
};

export default ServiceList;
