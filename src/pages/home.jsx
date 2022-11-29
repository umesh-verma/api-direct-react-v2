import React from 'react';
import "./home.css";

export default function Home() {

  async function handleFormSubmit (e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="hero font-mont">
        <div className="holder align-items-center justify-content-between">
          <div className="text">
            <span className="hero-text">
              Welcome to <br /> APIdirect
            </span>
            <p className="tagline">
              The world’s first Healthcare API library.
            </p>
          </div>
          <div className="image debug">
           <img src="./images/hero_r_bot.png" alt="" />
          </div>
        </div>
      </section>

      <section className="api-decr-sect">
        <div className='w-100'>
          <h1 className='font-mont'>What is APIdirect?</h1>
          <div className='bg-hold'>
            <div className="d-flex w-100 justify-content-around">
              <div className='left-content'>
                <p className='font-mont'>
                  The library serves as a <span style={{ color: "#f8b225" }}>FREE</span> knowledge base for the
                  digital health tech community to access simplified information
                  on API’s that exist across the health and care ecosystem.
                </p>
                <div className='d-flex align-items-center justify-content-around py-2 gap'>
                  <div className='img-hold'>
                    <img
                      src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/Alphabot_plug.svg"
                      alt="alphabot"
                    />
                  </div>
                  <div className='font-lucida'>
                    <p>
                      Private and open APIs can be searched or browsed as both
                      traditional APIs and modern no-code Connectors. Each API
                      contains a simplified summary of the data endpoints available.
                      The library can also be used to quickly obtain available FHIR
                      resources.
                    </p>
                    <p>
                      Where a No-Code Connector exists for an API to offer plug and
                      play interoperability and improved automation, this is
                      displayed along with the API’s key information and capability.
                    </p>
                  </div>
                </div>
              </div>
              <form className='like-form' onSubmit={handleFormSubmit}>
                <div>
                  <h2 className='font-mont'>Like what you see ?</h2>
                  <p className='font-mont'>
                    Do you see an API that you think will be beneficial to your
                    organisation? Fill out the form below and we will be in touch
                    soon!
                  </p>
                </div>
                <div>
                  <input type="text" name="name" className='input' placeholder='Firstname Surname' />
                  <input type="email" className='input' name="email" placeholder="Work Email" />
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="libary_flexbox">
          <div className="left-content">
            <div className="library_desc">
              <p>
                The library serves as a <span style={{color: "#f8b225"}}>FREE</span> knowledge base for the
                digital health tech community to access simplified information
                on API’s that exist across the health and care ecosystem.
              </p>
            </div>
            <div className="d-flex">
              <div className="img">
                <img
                  src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/Alphabot_plug.svg"
                  alt="alphabot"
                />
              </div>
              <div className="libary_flex_desc">
                <p>
                  Private and open APIs can be searched or browsed as both
                  traditional APIs and modern no-code Connectors. Each API
                  contains a simplified summary of the data endpoints available.
                  The library can also be used to quickly obtain available FHIR
                  resources.
                </p>
                <p>
                  Where a No-Code Connector exists for an API to offer plug and
                  play interoperability and improved automation, this is
                  displayed along with the API’s key information and capability.
                </p>
              </div>
            </div>
          </div>

          <div className="right_content">
            <form action="">
              <h3>Like what you see?</h3>
              <p>
                Do you see an API that you think will be beneficial to your
                organisation? Fill out the form below and we will be in touch
                soon!
              </p>
              <input
                type="text"
                className="input"
                id="fname"
                name="firstname"
                placeholder="Firstname Surname"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Work Email"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div> */}
      </section>
    </>
  )
}
