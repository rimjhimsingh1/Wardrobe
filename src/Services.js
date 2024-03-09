import React from 'react';


const aboutus = props => {
    
  return (
    <>
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                        <img src='./images/image5.jpg' alt='servicesimg' /> 
                                           </div>
                                           {/*section right side data */}
                                           <div className='col-12 col-lg-7 our-services-list'>
                                            <h3 className='mini-title'>
                                            --AVAILABLE @GOOGLE AND IOS APP STORE ONLY 
                                            </h3>
                                                 <h1 className='main-heading'>Services</h1>
                                                 
                                                    <div className='row our-services-info'>
                                                    
                                                    <div className='col-10 our-services-data'>
                                                        <h2>Next Day Delivery - Wardrobe Wallet - Easy Returns -  Exchange Avaiable - Shop And Earn</h2>
                                                        <p className='main-hero-para'>
                                                            Next Day delivery avaiable at Delhi, Mumbai, Hyderabad, Banglore, Pune. 
                                                            You can deposit in your Wardrobe Wallet and spend whenever you want
                                                            30 day easy return and exchange avaiable.
                                                            Shop and earn our valuecoins and redeem them at the time of purchase.
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <br />
                                                 <button className='btn-style btn-style-border'>learn more</button>
                                           </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default aboutus;