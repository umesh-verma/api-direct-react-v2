import React, { useState } from 'react';
import "../styles/global-n.css";
import "./style.css";


export default function Main() {
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
                    aria-selected="true">
                    Basic Information
                  </button>
                  <button className="nav-link fsxl24" id="nav-resource-tab" data-bs-toggle="tab" data-bs-target="#nav-resource"
                    type="button" role="tab" aria-controls="nav-resource" aria-selected="false">
                    Endpints &amp; Connectors
                  </button>
                  <button className="nav-link fsxl24" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    Accessibiliy
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
                  <div className="d-flex flex-wrap justify-content-between q-grid">
                    <div className="q-hold">
                      <label htmlFor="type">Name of your API?</label>
                      <input type="text" name='name' placeholder='Name' className="form-control" />
                    </div>
                    <div className="q-hold">
                      <label htmlFor="publisher">Who is the publisher of this API?</label>
                      <input type="text" name='publisher' placeholder='Publisher name' className="form-control" />
                    </div>
                    <div className="q-hold">
                      <label htmlFor="release">When was this API first released?</label>
                      <input type="date" name='release' placeholder='DD/MM/YYYY' className="form-control" />
                    </div>
                    <div className="q-hold">
                      <label htmlFor="latest">When was the last version released?</label>
                      <input type="date" name='latest' placeholder='DD/MM/YYYY' className="form-control" />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="callCount">How many API calls made in the last 12 months?</label>
                      <input type="number" name='callCount' placeholder='API calls' className="form-control" />
                    </div>

                    <div className="q-hold">
                      <label htmlFor="doc">Is API Documentation available for your API?</label>
                      <select name="type" className='form-control form-select' id="doc">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="version">What is the current release version?</label>
                      <input type="text" name='version' placeholder='Current release version' className="form-control" />
                    </div>
                    <div className="q-hold">
                      <label htmlFor="type">What is the type of API?</label>
                      <select name="type" className='form-control form-select' id="type">
                        <option value="SOAP">SOAP</option>
                        <option value="SOAP">REST</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="doc">Where is the documentation defined?</label>
                      <div className="d-flex flex-wrap">
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="SWAGGER" id="SWAGGER_CHECK" />
                          <label class="form-check-label" for="SWAGGER_CHECK">
                            Swagger
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="UPLOAD-IO" id="UPLOAD-IO_CHECK" />
                          <label class="form-check-label" for="UPLOAD-IO_CHECK">
                            Upload.io
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="GITHUB" id="GITHUB_CHECK" />
                          <label class="form-check-label" for="GITHUB_CHECK">
                            Github
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="RAPID-API" id="RAPID-API_CHECK" />
                          <label class="form-check-label" for="RAPID-API_CHECK">
                            RapidAPI
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="doc">What is the type of API?</label>
                      <div className="d-flex flex-wrap">
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="JSON" id="JSON_CHECK" />
                          <label class="form-check-label" for="JSON_CHECK">
                            JSON
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="URL-ENCODED" id="URL_CHECK" />
                          <label class="form-check-label" for="URL_CHECK">
                            URL Encoded
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="XML" id="XML_CHECK" />
                          <label class="form-check-label" for="XML_CHECK">
                            XML
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='dataFormat' value="FORM-DATA" id="Form_CHECK" />
                          <label class="form-check-label" for="Form_CHECK">
                            Form Data
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="sandbox">Is a secured sandbox available?</label>
                      <select name="type" className='form-control form-select' id="sandbox">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-resource" role="tabpanel" aria-labelledby="nav-resource-tab">
                  <div className='section-title'>
                    <h5 className="fsxl24 fw-600 font-mont text-white">
                      API Resource/Enpoints
                    </h5>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className="q-hold">
                      <label htmlFor="FHIR">Is the API FHIR compliant?</label>
                      <select name="fhirCompliant" className='form-control form-select' id="FHIR">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="list">
                        Please list any non-FHIR API endpoints available or may even
                        provide a link to documentation or list in the text box provided.
                      </label>
                      <textarea name="list" className='form-control' rows="3" placeholder='Type list here'></textarea>
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
                      <select name="sandbox" className='form-control form-select' id="sandbox">
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
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='connection' value="JSON" id="PER_CHECK" />
                          <label class="form-check-label" for="PER_CHECK">
                            Periodic/Scheduled
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='connection' value="URL-ENCODED" id="OTH_CHECK" />
                          <label class="form-check-label" for="OTH_CHECK">
                            Other (please specify)
                          </label>
                        </div>
                        <div class="form-check w-50">
                          <input class="form-check-input" type="checkbox" name='connection' value="XML" id="REAL_CHECK" />
                          <label class="form-check-label" for="REAL_CHECK">
                            Real time
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="other">Please specify other:</label>
                      <textarea name="other" className='form-control' rows="3" placeholder='Type list here'></textarea>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="sandbox">What is the type of API?</label>
                      <select name="sandbox" className='form-control form-select' id="sandbox">
                        <option value={true}>Open</option>
                        <option value={false}>Partner</option>
                      </select>
                    </div>
                    <div className="q-hold">
                      <label htmlFor="sandbox">Is pricing open to public or only to partners?</label>
                      <select name="sandbox" className='form-control form-select' id="sandbox">
                        <option value={true}>Open</option>
                        <option value={false}>Partner</option>
                      </select>
                    </div>
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
