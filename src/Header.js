import React from 'react'

const Header = () => {
  return (
    <>
        <header>
        <section className="container main-hero-container">
              <div className="row">
                <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                <h1 className="display-2">
                  One Stop For <br/> All Your Fashion Needs
                </h1>
                <p className="main-hero-para">
                  We have a wide variety of clothes be it tshirts, shirts, dresses or anything.<br/>
                  Get your favourite shoes,accessories,makeup,skincare or hygiene products all together
                  at one single platform WARDROBE.
                </p>
                          <h3>Becomer a member <br/>and get early access to all the offers</h3>
                          <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-4 p-2 form-control-text"
                            placeholder="Enter coupon code"                              
                            />
                            <div className= "input-group-button">Avail it now</div>
                </div>
                </div>
                    {/* -----------main header right side--------------*/}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                    
                    <img src="./images/image4.jpg" alt="heroimg4" 
                    className="img-fluid"  
                    />
                    <img src="./images/image3.jpg" alt="heroimg3" 
                    className="img-fluid main-hero-img2"  
                    />
                    </div>
              </div>
            </section>
        </header>
    </>
    
  );
};

export default Header;