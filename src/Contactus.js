import React from 'react'

const contact = () => {
  return (
    <>
        <section className='contactus-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='contact-leftside col-12 col-lg-5'>
                                <h1 className='main-heading fw-bold'>
                                    Any Queries??<br />Connect with our Team .
                                </h1>
                                <p className='main-hero-para'>
                                    For any queries regarding services,delivery, product or feedback connect to our team.<br/>
                                    Fill up the given form and subbmit. Our team will connect to you very soon.
                                </p>
                                <figure>
                                    <img src="./images/image7.jpeg" 
                                    alt='image7img'
                                     className='img-fluid' />
                                </figure>
                            </div>
                            {/*right side contact form */ }
                            <div className='contact-rightside col-12 col-lg-7'>
                                <form method='POST'>
                                    
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='First Name'
                                                  />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Last Name'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Phone No'
                                                  />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='E-mail'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                            <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Add Address'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                            <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Fill up your queries'
                                                  />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style contact-input-field">
                                           <input class="form-check-input"
                                            type="checkbox" value="" 
                                            id="flexCheckChecked" 
                                             />
                                              <label class="form-check-label" for="flexCheckChecked">
                                                Iagree that Wardrobe group can contact me and access my contact details.                                              </label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100'>
                                            Submit
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default contact;