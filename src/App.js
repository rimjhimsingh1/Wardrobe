import React from "react";
import Navbar from './navbar';
import Header from "./Header";
import Aboutus from "./About";
import Services from "./Services";
import Products from "./Products";
import Contactus from "./Contactus";
import Footer from "./Footer";

const App = () => {
  return (
    <>
     <Navbar />
     <Header/>
     <Aboutus/>
     <Services/>
     <Products/>
     <Contactus/>
     <Footer/>
   
    </>
  );
};

export default App;   