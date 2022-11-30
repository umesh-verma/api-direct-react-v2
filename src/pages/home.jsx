import React, { useState } from 'react';
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
      </section>

      <section className='not-api'>
        <div className='d-flex justify-content-between'>
          <div className='left-content'>
            <div className='d-flex justify-content-around align-items-center'>
              <div className='w-45'>
                <h3 className='font-mont text-white'>
                  Not got an API yet? We can build you one! 😊
                </h3>
                <p className='font-lucida'>
                  Just fill in the contact form and we will be in touch soon!
                </p>
              </div>
              <div className='like-form w-45'>
                <div>
                  <input type="text" name="name" className='input' placeholder='Firstname Surname' />
                  <input type="email" className='input' name="email" placeholder="Work Email" />
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
          <div className='adv-space'>
            <span>Advertising Space</span>
          </div>
        </div>
      </section>
      <LibraryHold />
    </>
  )
}

const tags = [
  { title: "EHR", tag: "ehr", iconUrl: "/images/ehr-page.svg" },
  { title: "Hospital", tag: "hospital", iconUrl: "/images/hospital-h.svg" },
  { title: "Clinicians", tag: "clinicians", iconUrl: "/images/clinicians.svg" },
]

function LibraryHold() {

  const [selectedTags, setSelectedTags] = useState([]);
  function onTagClick (tag) {
    if(selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag))
    } else {
      setSelectedTags(prev => [...prev, tag])
    }
  }

  const [listView, setListView] = useState(true);

  return (
    <section className='library-hold'>
      <div className='text-center text-white font-mont'>
        <h3>APIdirect Library</h3>
        <p className='pt-2'>
          Browse our selection of avaliable APIs or if you would like <br /> to have yours listed, request it <span style={{ color: 'var(--primary-3)' }}>here.</span>
        </p>
      </div>
      <div className='py-4'>
        <div className='search-bar text-white container'>
          <img src="/images/search.svg" alt="search icon" />
          <input type="text" placeholder='Search our 22 APIs' />
        </div>
        <div className='pt-3 px-0 d-flex container tag-container'>
          {
            tags.map((t, i) => <div key={i} className={`search-tag ${selectedTags.includes(t.tag) ? 'active': ''}`} 
              onClick={() => onTagClick(t.tag)}>
              <img src={t.iconUrl} alt="page icon" /> <span>{t.title}</span>
            </div>)
          }
          <button className='view-switch'  onClick={() => setListView(prev => !prev)}>
            <img src={listView ? "/images/grid_view.svg" : "/images/list_view.svg"} alt="icon" /> 
            <span>
              { listView? "Grid View": "List View"}
            </span>
          </button>
        </div>
      </div>
      <div className="py-3 card-hold container px-0">
        <div className="list-view">
          <div className="api-card p-2">
            <div className="title-hold">
              <div className="img">
                
              </div>
              <h3>Title Goes Here</h3>
              <div className="w-100">

              </div>
            </div>
            <div className='desc-hold'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis quas vel hic aspernatur facilis velit exercitationem ab, 
                ipsum in vitae.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
