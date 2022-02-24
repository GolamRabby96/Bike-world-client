import React, { useState } from "react";
import SubService from "./SubService/SubService";

const OurServices = () => {
    const [service, setService] = useState([])
    fetch('https://agile-forest-05247.herokuapp.com/services')
    .then( res => res.json())
    .then( data=>{
        setService(data);
    })

	return (
		<div id="services" className="container mt-5">
			<div className="row">
                <div className="col-md-12">
                    <h1 className="brand-header">Our Servicess</h1>
                </div>
                {
                    service.map(serviceList => <SubService key={serviceList._id} serviceList={serviceList}></SubService>)
                }
			</div>
		</div>
	);
};

export default OurServices;
