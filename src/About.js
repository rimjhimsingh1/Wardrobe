import React from 'react';


const categories = () => {
  
  return (
    <>
        <section>
            <div className='work-container container'>
                <h1 className='main-heading text-center'>About Us</h1>
                <div className='row'>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        
                        <h2>Our Aim</h2>
                        <p className='main-hero-para w-100'>We aim to provide a one stop shop for all your family's fashion needs, grooming products, and many more</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        
                        <h2>Our Team</h2>
                        <p className='main-hero-para w-100'>Currently, there are about 1000 people working in our team from different cities in order to provide best services to our customers.</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        
                        <h2>Eco Friendly Project</h2>
                        <p className='main-hero-para w-100'>We run a Sustainable India campaign, where all the products we offer are sustainable and eco friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default categories;