import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
     return (
          <div className="container-fluid">
               <Header/>
               <Contact/>
               <Footer/>
          </div>
     );
};

export default Home;