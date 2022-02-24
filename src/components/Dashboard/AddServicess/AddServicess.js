import React, { useState } from "react";
import TopBar from "../../TopBar/TopBar";
import Sidebar from "../Sidebar/Sidebar";

const AddServicess = () => {
	const [info, setInfo] = useState({});
	const [file, setFile] = useState(null);

	console.log("this is info", info, file);

	const handleBlur = (e) => {
		const newInfo = { ...info };
		newInfo[e.target.name] = e.target.value;
		setInfo(newInfo);
	};

	const handleFileChange = (e) => {
		const newFile = e.target.files[0];
		setFile(newFile);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", file);
		formData.append("serviceName", info.serviceName);
		formData.append("serviceDetails", info.serviceDetails);
		formData.append("price", info.price);
		console.log("this is formate datra", formData);
		fetch("https://agile-forest-05247.herokuapp.com/addservices", {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
		alert("Services added");
	};

	return (
		<section>
			<Sidebar />
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form onSubmit={handleSubmit} className="p-5">
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									Service Name
								</label>
								<input
									type="text"
									name="serviceName"
									class="form-control"
									id="exampleInputEmail1"
									required
									onBlur={handleBlur}
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Service details
								</label>
								<input
									type="text"
									name="serviceDetails"
									class="form-control"
									required
									onBlur={handleBlur}
									id="exampleInputPassword1"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Service price
								</label>
								<input
									type="number"
									name="price"
									class="form-control"
									required
									onBlur={handleBlur}
									id="exampleInputPassword1"
								/>
							</div>
							<div class="form-group">
								<label for="exampleFormControlFile1">file input</label>
								<br />
								<input
									type="file"
									class="form-control-file"
									onChange={handleFileChange}
								/>
							</div>
							<br />
							<button type="submit" class="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddServicess;
