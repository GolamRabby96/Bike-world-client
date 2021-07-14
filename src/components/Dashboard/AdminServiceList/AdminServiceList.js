import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import EditServicesList from "./EditServicesList";
import MediaQuery from "react-responsive";
import TopBar from "../../TopBar/TopBar";

const AdminServiceList = () => {
	const [viewServices, setViewServices] = useState({});
	const [check, setCheck] = useState(false);

	useEffect(() => {
		fetch("https://agile-forest-05247.herokuapp.com/AdminServices")
			.then((res) => res.json())
			.then((data) => {
				if (data.length > 0) {
					setViewServices(data);
					setCheck(true);
				} else {
					setCheck(false);
				}
			});
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<TopBar/>
				<div className="col-md-2">
					<Sidebar />
				</div>
				<div style={{ overflow: "hidden"}} className="col-md-10">
					<div className="ps-5 pt-3" style={{width: "90%"}}>
						<table class="table table-striped table-hover ">
							<tr>
								<th className="ps-2">Email</th>
								<th>Service</th>
								<th>Amount</th>
								<th style={{textAlign:'center'}}>Status</th>
							</tr>
							{check &&
								viewServices?.map((view) => <EditServicesList view={view} />)}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminServiceList;
