import React, { useState } from 'react';
import "../styles/global-n.css";
import "./style.css";


export default function Main() {
  return (
    <main>
      <section id='upload'>
        <div className="container py-4 d-flex">
          <div className='text-content'>
            <h1 className="fsxl48 font-mont fw-600 text-white">
              Upload your API
            </h1>
            <h5 className="fsxl24 fw-600 font-mont text-primary-2 py-2">
              Showcase your API and its capabilities.
            </h5>
            <div className="font-lucida fsxl-l18 text-white fw-400">
              <p>
                Increase awareness of your organisation’s Healthcare API with
                a <span style={{ color: "#F8B225" }}>FREE</span> listing on <span className="text-primary-2">APIdirect</span>, 
                the world’s first healthcare API library.
              </p>
              <p>
                Whether increasing awareness of your private API or accessibility to your open API, 
                the APIdirect library is the go-to online knowledge base for the healthcare API community.
              </p>
              <p>
                To apply for your free API listing, fill in the details below and our team will 
                endeavour to have your listing live within 48 hours following verification of your 
                submission. We will email you to let you know your API is live on our library!!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
