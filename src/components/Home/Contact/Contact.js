import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <div id="contract" className="container-fluid">
           <section className="contact row mt-5">
           <div className="shadow p-2">
               <div className="section-header text-center mb-5">
                    <h1>Keep connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group mb-2">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-4">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-info container"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
       </div>
    );
};

export default Contact;