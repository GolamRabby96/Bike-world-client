import React from 'react';

const SubAllServicess = ({serviceList}) => {

    const handleDelete = id => {
        fetch(`https://agile-forest-05247.herokuapp.com/deleteservicess/${id}`, {
			method: "DELETE",
		})
          .then((result) => {
               document.getElementById(id).style.display = "none";
          });
    }
    console.log(serviceList);
    return (
		<div id={serviceList._id} className="col-md-4 mt-5 cardanimationset">
			<div class="card " style={{ width: "100%" }}>
				<img className="" src={`https://agile-forest-05247.herokuapp.com/${serviceList.image}`} class="card-img-top" alt="..." />
				<div class="card-body cardanimationsetimg">
					<h5 class="card-title">{serviceList.serviceName} - ${serviceList.price}</h5>
					<p class="card-text">{serviceList.serviceDetails}</p>
					<button onClick={()=>handleDelete(serviceList._id)} class="btn  btn-sm btn-info container">Delete</button>
				</div>
			</div>
		</div>
    );
};

export default SubAllServicess;