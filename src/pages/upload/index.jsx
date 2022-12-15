import React, { useEffect, useRef, useState } from 'react';
import "../styles/global-n.css";
import "./style.css";


export default function Main() {


  const [data, setData] = useState({
    name: "", publisher: "", firstRelease: "", latestRelease: "",
    callsCount: "", documentation: true, currentVersion: "",
    type: "", tools: "", dataFormats: "",
    fhirCompliant: false, nonFhirEndpoints: "", sandbox: false,
    databaseType: "", otherConnection: "", openApi: false,
    openPricing: false, contactName: "", email: ""
  });

  const navBasic = useRef();
  const navEndpoint = useRef();
  const navAccess = useRef();
  const basicForm = useRef();

  function handleBasicFormSubmit (e) {
    e.preventDefault();
    console.log(e.target);
    const form = document.forms[e.target];
    console.log(new FormData(form));
  }

  function handleInputChanges ({target}) {
    setData(prev => ({...prev, [target.name]: target.value}));
  }

  function handleCheckboxChange ({ target }) {
    const { name, value } = target;
    if(data[name].includes(value)) {
      let modified = data[name].filter(e => e !== value);
      setData(prev => ({...prev, [name]: modified}));
    } else {
      let modified = [...data[name], value];
      setData(prev => ({...prev, [name]: modified}));
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  function handleSelectChange ({ target }) {
    setData(prev => ({...prev, [target.name]: target.value}));
  }

  function handleBack (current) {
    switch(current) {
      case 'ENDPOINT': navBasic.current.click(); break;
      case 'ACCESS': navEndpoint.current.click(); break;
      default: break;
    }
  }

  function handleNext (current) {
    switch(current) {
      case 'BASIC': navEndpoint.current.click(); break;
      case 'ENDPOINT': navAccess.current.click(); break;
      default: break;
    }
  }

  return (
    <main>
      <section id='upload'>
        <div className="container d-flex align-items-center justify-content-between">
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
          <div className="img-content d-flex">
            <div className='mt-auto w-100 mb-4'>
              <img src="/images/plug-bot.png" alt="Alphabot Plug" width="100%" />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="title not-xl">
            <h5 className="fsxl24 font-mont fw-600 text-white">
              Registration Form
            </h5>
            <br />
            <p className="font-lucida fsxl-l18 text-white">
              Please fill in all fields.
            </p>
          </div>
          <div className="form-wrap">
            <div id='form-tabs'>
              <nav>
                <div className="title">
                  <h5 className="fsxl24 font-mont fw-600 text-white">
                    Registration Form
                  </h5>
                  <br />
                  <p className="font-lucida fsxl-l18 text-white">
                    Please fill in all fields.
                  </p>
                </div>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link fsxl24 active" id="nav-basic-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-basic" type="button" role="tab" aria-controls="nav-basic"
                    aria-selected="true" ref={navBasic} >
                    Basic Information
                  </button>
                  <button className="nav-link fsxl24" id="nav-resource-tab" data-bs-toggle="tab" data-bs-target="#nav-resource"
                    type="button" role="tab" aria-controls="nav-resource" aria-selected="false" ref={navEndpoint} >
                    Endpoints &amp; Connectors
                  </button>
                  <button className="nav-link fsxl24" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false" ref={navAccess} >
                    Accessibility
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-basic" role="tabpanel" aria-labelledby="nav-basic-tab">
                  <div className='section-title'>
                    <h5 className="fsxl24 fw-600 font-mont text-white">
                      Basic Information
                    </h5>
                  </div>
                  <form onSubmit={handleBasicFormSubmit} className="d-flex flex-wrap justify-content-between q-grid">

                    <div className="q-hold">
                      <label htmlFor="type">Contact name:</label>
                      <input type="text" name='contactName' placeholder='Contact name' 
                        value={data.contactName} onChange={handleInputChanges} 
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="type">Email</label>
                      <input type="email" name='email' placeholder='Email' 
                        value={data.email} onChange={handleInputChanges} 
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="type">Name of your API?</label>
                      <input type="text" name='name' placeholder='Name' 
                        value={data.name} onChange={handleInputChanges} 
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="publisher">Who is the publisher of this API?</label>
                      <input type="text" name='publisher' placeholder='Publisher name' 
                        value={data.publisher} onChange={handleInputChanges} 
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="release">When was this API first released?</label>
                      <input type="date" name='firstRelease' placeholder='DD/MM/YYYY' 
                        value={data.firstRelease} onChange={handleInputChanges}
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="latest">When was the last version released?</label>
                      <input type="date" name='latestRelease' placeholder='DD/MM/YYYY' 
                        value={data.latestRelease} onChange={handleInputChanges}
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="callCount">How many API calls made in the last 12 months?</label>
                      <input type="number" name='callsCount' placeholder='API calls' 
                        value={data.callsCount} onChange={handleInputChanges}
                        className="form-control" required 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="doc">Is API Documentation available for your API?</label>
                      <select name="documentation" 
                        onChange={handleSelectChange} value={data.documentation} 
                        className='form-control form-select' id="doc"
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>

                    <div className="q-hold">
                      <label htmlFor="version">What is the current release version?</label>
                      <input type="text" name='currentVersion' placeholder='Current release version' 
                        value={data.currentVersion} onChange={handleInputChanges}
                        className="form-control" 
                      />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="type">What is the type of API?</label>
                      <select name="type" value={data.type} onChange={handleSelectChange} 
                        className='form-control form-select' id="type"
                      >
                        <option value="SOAP">SOAP</option>
                        <option value="SOAP">REST</option>
                      </select>
                    </div>

                    <div className="q-hold">
                      <label htmlFor="doc">What other tools have you used to publish this API?</label>
                      <div className="d-flex flex-wrap">
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='tools'
                           value="SWAGGER" id="SWAGGER_CHECK" 
                           onChange={handleCheckboxChange}
                          />
                          <label className="form-check-label" for="SWAGGER_CHECK">
                            Swagger
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='tools'
                            onChange={handleCheckboxChange} 
                            value="UPLOAD-IO" id="UPLOAD-IO_CHECK" 
                          />
                          <label className="form-check-label" for="UPLOAD-IO_CHECK">
                            Upload.io
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='tools'
                            onChange={handleCheckboxChange} 
                            value="GITHUB" id="GITHUB_CHECK" 
                          />
                          <label className="form-check-label" for="GITHUB_CHECK">
                            Github
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='tools'
                            onChange={handleCheckboxChange} 
                            value="RAPID-API" id="RAPID-API_CHECK" 
                          />
                          <label className="form-check-label" for="RAPID-API_CHECK">
                            RapidAPI
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="q-hold">
                      <label htmlFor="doc">What data formats are used in your API?</label>
                      <div className="d-flex flex-wrap">
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='dataFormats' 
                            onChange={handleCheckboxChange} 
                            value="JSON" id="JSON_CHECK" 
                          />
                          <label className="form-check-label" for="JSON_CHECK">
                            JSON
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='dataFormats'
                            onChange={handleCheckboxChange} 
                            value="URL-ENCODED" id="URL_CHECK" 
                          />
                          <label className="form-check-label" for="URL_CHECK">
                            URL Encoded
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='dataFormats' 
                            onChange={handleCheckboxChange} 
                            value="XML" id="XML_CHECK" 
                          />
                          <label className="form-check-label" for="XML_CHECK">
                            XML
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="checkbox" name='dataFormats' 
                            onChange={handleCheckboxChange} 
                            value="FORM-DATA" id="Form_CHECK" 
                          />
                          <label className="form-check-label" for="Form_CHECK">
                            Form Data
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="q-hold">
                      <button type="submit">Submit</button>
                    </div>

                  </form>
                </div>
                <div className="tab-pane fade" id="nav-resource" role="tabpanel" aria-labelledby="nav-resource-tab">
                  <div className='section-title'>
                    <h5 className="fsxl24 fw-600 font-mont text-white">
                      API Resource/Endpoints
                    </h5>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className="q-hold">
                      <label htmlFor="FHIR">Is the API FHIR compliant?</label>
                      <select name="fhirCompliant" className='form-control form-select' id="FHIR"
                        value={data.fhirCompliant} onChange={handleSelectChange}
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="list">
                        Please list any non-FHIR API endpoints available or may even
                        provide a link to documentation or list in the text box provided.
                      </label>
                      <textarea name="nonFhirEndpoints" className='form-control' 
                        rows="3" placeholder='Type list here'
                        value={data.nonFhirEndpoints} onChange={handleInputChanges}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                  <div className='section-title'>
                    <h5 className="fsxl24 fw-600 font-mont text-white">
                      Accessibility
                    </h5>
                  </div>
                  <div className='d-flex flex-column rg-1'>
                    <div className="q-hold">
                      <label htmlFor="sandbox">Is a secured sandbox avaliable?</label>
                      <select name="sandbox" className='form-control form-select' id="sandbox"
                        value={data.sandbox} onChange={handleSelectChange}
                      >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="real-time">
                        Is the API connected to a database that is updated in real
                        time or are periodic updates scheduled
                        at your database level?
                      </label>
                      <div className="d-flex flex-wrap">
                        <div className="form-check w-50">
                          <input className="form-check-input" type="radio" name='databaseType' 
                            onChange={handleCheckboxChange}
                            value="PERIODIC-SCHEDULED" id="PER_CHECK" 
                          />
                          <label className="form-check-label" for="PER_CHECK">
                            Periodic/Scheduled
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="radio" name='databaseType' 
                            onChange={handleCheckboxChange}
                            value="URL-ENCODED" id="OTH_CHECK" 
                          />
                          <label className="form-check-label" for="OTH_CHECK">
                            Other (please specify)
                          </label>
                        </div>
                        <div className="form-check w-50">
                          <input className="form-check-input" type="radio" name='databaseType' 
                            onChange={handleCheckboxChange}
                            value="XML" id="REAL_CHECK" 
                          />
                          <label className="form-check-label" for="REAL_CHECK">
                            Real time
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="other">Please specify other:</label>
                      <textarea name="databaseType" className='form-control' rows="3"
                        value={data.databaseType} onChange={handleInputChanges} 
                        placeholder='Type list here'
                      ></textarea>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="sandbox">Is your API OPEN in public domain or works on a partnership basis?</label>
                      <select name="openApi" className='form-control form-select'
                        value={data.openApi} onChange={handleSelectChange}
                        id="sandbox"
                      >
                        <option value={true}>Open</option>
                        <option value={false}>Partner</option>
                      </select>
                    </div>
                    {
                      data.openApi === 'true' ? <></> :
                        <div className="q-hold">
                          <label htmlFor="sandbox">Is pricing open to public or only to partners?</label>
                          <select name="openPricing" className='form-control form-select' id="sandbox"
                            value={data.openPricing} onChange={handleSelectChange}
                          >
                            <option value={true}>Open</option>
                            <option value={false}>Partner</option>
                          </select>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}