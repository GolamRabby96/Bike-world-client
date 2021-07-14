import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SubBuyServices from './SubBuyService/SubBuyService';

const BuyService = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="top-bar-brand"></div>
                    <SubBuyServices/>
                </div>
            </div>
            
        </section>
    );
};

export default BuyService;