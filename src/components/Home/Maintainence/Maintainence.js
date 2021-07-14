import React from 'react';
import bike from '../../../photos/bike.jpg'
import './Maintainence.css'

const Maintainence = () => {
    return (
        <div className="container maintanencecontainer mt-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="maintainenceleft">
                        <img className="img-fluid shadow" src={bike} alt=""/>
                    </div>
                </div>
                <div className="col-md-7 maintainenceright">
                    <h2>Maintenance you bike like new</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum optio quidem ab veritatis quia distinctio! Ratione repudiandae exercitationem nulla et commodi voluptate facere praesentium perferendis, cupiditate iste. Velit ipsam nulla dicta veritatis quod numquam facere voluptatem eum culpa incidunt sint id, earum reprehenderit ut qui enim quaerat optio impedit illum?</p>
                    <div className="d-flex justify-content-center">
                         <button className="btn btn-info btn-sm">Learn more</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Maintainence;