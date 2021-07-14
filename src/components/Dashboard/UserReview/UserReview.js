import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const UserReview = () => {
    const [review, setReview] = useState({});
    const [userreview, setUserreview] = useState({});
    console.log('this is review',review);
    const handleBlur = e =>{
        const useremail = sessionStorage.getItem("email");

        const newInfo = { ...review };
		newInfo[e.target.name] = e.target.value;
        newInfo.email = useremail
		setReview(newInfo);
    };

    const handleSubmit = (e) => {
		e.preventDefault();
        console.log('inside review',review)
		fetch("https://agile-forest-05247.herokuapp.com/userreview", {
			method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
			body: JSON.stringify(review),
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
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2">
					<Sidebar />
				</div>
				<div className="col-md-10">
					<div className="top-bar-brand"></div>
					<div className="p-5 mt-5 shadow">
						<form onSubmit={handleSubmit}>
							<label for="basic-url" class="form-label">
								Please enter you experience 
							</label>
							<div class="input-group mb-3">
								<span class="input-group-text" id="basic-addon3">
									{sessionStorage.getItem('email')}
								</span>
								<input
									type="text"
                                    name='userreview'
									class="form-control"
                                    required
                                    onBlur={handleBlur}
									id="basic-url"
									aria-describedby="basic-addon3"
								/>
							</div>
                            <button  type="submit" class="btn btn-sm container btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserReview;
