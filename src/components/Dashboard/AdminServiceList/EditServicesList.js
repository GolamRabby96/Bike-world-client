import React, { useState } from "react";
import "./edit.css";

const EditServicesList = ({ view }) => {
	const count = 0;
	const [editServices, setEditServices] = useState({});
	const [current, setCurrent] = useState('');
	console.log(current);
	const handleStatusChange = (e) => {
		const newService = { ...editServices };
		newService[e.target.name] = e.target.value;
		setEditServices(newService);
		setCurrent(e.target.value)
	};

	const handleSubmit = (key) => {
		fetch(`https://agile-forest-05247.herokuapp.com/AdminUpdateStatus/${key}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(editServices),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				
			});
			alert('Updated')
	};
	return (
		<tr className={`shadow ${current} btn-${view.status} `}>
			<td className="ps-3">{view.useremail}</td>
			<td>{view.serviceName}</td>
			<td>${view.price}</td>
			<td style={{textAlign:'center'}}>
					<select onChange={handleStatusChange} name="status">
						<option value={view.status}>{view.status}</option>
						<hr />
						<option value="pending">pending</option>
						<option value="ongoing">Ongoing</option>
						<option value="done">Done</option>
					</select>
					<button
						onClick={() => handleSubmit(view.key)}
						className="ms-2"
						type="submit"
						value="ok"
					>
						ok{" "}
					</button>
			</td>
		</tr>
	);
};

export default EditServicesList;
