import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import HeaderSlide from '../HeaderSlide/HeaderSlide';
import Maintainence from '../Maintainence/Maintainence';
import Navbar from '../Navbar/Navbar';
import OurServices from '../OurServices/OurServices';

const Header = () => {
     return (
          <div>
               <Navbar/>
               <HeaderSlide/>
               <OurServices/>
               <Maintainence/>
               <CustomerReview/>
          </div>
     );
};

export default Header;