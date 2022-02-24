import React, { useState } from "react";
import TopBar from "../../TopBar/TopBar";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
	const [Admin, setAdmin] = useState({});

	const handleBlur = (e) => {
		e.preventDefault();
		const newInfo = { ...Admin };
		newInfo[e.target.name] = e.target.value;
		setAdmin(newInfo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://agile-forest-05247.herokuapp.com/AddAdmin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(Admin),
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
		<div>
			<Sidebar />
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="p-5 mt-5 shadow">
							<form onSubmit={handleSubmit}>
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">
										Admin Email Address
									</label>
									<input
										type="email"
										class="form-control"
										name="email"
										required
										onBlur={handleBlur}
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>

								<button type="submit" class="btn btn-sm container btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddAdmin;
