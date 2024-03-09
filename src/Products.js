import React from 'react';


const products = props => {
    
  return (
    <>
        <section className='common-section our-products'>
            <div className='container mb-5'>
                <div className='row'>
                   
                                           {/*section right side data */}
                                           <div className='col-12 col-lg-7  our-products-list'>
                                                 <h1 className='main-heading'><i>Categories</i></h1>
                                                 
                                                    <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Women</h2>
                                                        <p className='main-hero-para'>
                                                        Your one stop for all women clothes, jewelleries. makeup products, bags, shoes and many more.
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Men</h2>
                                                        <p className='main-hero-para'>
                                                        Shop Men clothes, footwear, wallets, accessories, luxury perfumes and grooming products only at Wardrobe
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Kids</h2>
                                                        <p className='main-hero-para'>
                                                        Wardrobe offers you a wide variety of toys along with kids clothing, footwear, accessoriesand school requirements
                                                        </p>
                                                    </div>
                                                 </div>
                                           </div>
                                           <div className='col-12 col-lg-5 text-center our-products-leftside-img'>
                        <img src='./images/image6.jpg' alt='image6img' /> 
                                           </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default products;