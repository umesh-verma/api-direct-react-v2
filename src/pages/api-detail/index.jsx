import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextTagRenderer from '../../components/TextTags';
import "../styles/global-n.css";
import "./style.css";

const fakeDatabase = {
    'cerner-r4': {
        title: "Cerner R4",
        image: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png",
        tags: ["EHR", "HOSPITALS", "CLINICIANS"],
        description: `Cerner Ignite APIs are cloud-based allowing for rapid,
        agile deployment of future updates or enhancements.
        It also simplifies implementation of the APIs for healthcare
        providers because the ontology mapping process is centralized,
        which requires less effort than when performed on a per-deployment
        basis.`,
        publish: {
            by: "Cerner",
            date: "xx/xx/xx",
            version: "xx.xx.alpha"
        },
        imgTags: ["FHIR", "WORKATO"],
        devResources: {
            documentationUrl: "",
            tooling: "",
            wrapper: ""
        },
        accessibility: {
            type: "Partner-only",
            desc: "Pricing options in public domain, become a partner here.",
            tags: ["Documentation", "Open Sandbox"],
            remarks: "Documentation and sandbox only available to partners"
        }
    }
}

export default function Main() {

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [apiData, setApiData] = useState(fakeDatabase['cerner-r4']);

    useEffect(() => {
        if (!params.api) return;
        // getApiDetails(params.api).then(res => {
        //     if(res.error) alert('Error While Fetching API Data.');
        //     else {
        //         setApiData(res.data);
        //     };
        //     setLoading(false);
        // })
    }, [params.api]);
    
    return (
        <main>
            <section id="api-detail">
                <div className="detail-hero container text-white container-fluid">
                    <div className="font-lucida fsxl-l16">
                        APIdirect Library &gt; {apiData.title}
                    </div>
                    <div className="grid-center pt-4">
                        <div className="api-logo">
                            <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png"
                                alt="api logo" width='100%' />
                        </div>
                        <div className="api-title">
                            <h1 className="font-mont">{apiData.title}</h1>
                        </div>
                        <div className="text-tags pt-2">
                            {
                                apiData.tags.map((t, i) => <TextTagRenderer key={i} tag={t} />)
                            }
                        </div>
                    </div>
                    <div className="overview-n-form">
                        <div className="overview">
                            <h6 className="fsxl20 text-white font-mont fw-600">
                                Overview
                            </h6>
                            <br />
                            <p className="font-lucida text-white fsxl-l16 fw-400">
                                {apiData.description}
                            </p>
                            <br />
                            <div className="publish font-mont">
                                <div className="fsxl-l16">Publisher: <span className="value">{apiData.publish.by}</span></div>
                                <div className="fsxl-l16">Published on: <span className="value">{apiData.publish.date}</span></div>
                                <div className="fsxl-l16">Release Version: <span className="value">{apiData.publish.version}</span></div>
                            </div>
                            <div className="w-100 d-flex mt-4">
                                <div className="w-50">
                                    <h6 className="fsxl20 text-white font-mont fw-600 pb-2">
                                        Developer Resources
                                    </h6>
                                    <a href="#" className="fsxl-m16 fw-600 o-08 text-white font-mont">
                                        <span>Documentation</span>
                                        <span className="px-2"></span>
                                        <img src="/images/open_in_new.svg" alt="open in new" width='20px' />
                                    </a>
                                    <div className="w-100 d-flex pt-3">
                                        <div className="w-50">
                                            <h6 className="fsxl-m16 fw-600 o-08 text-white font-mont">
                                                Doc Tooling:
                                            </h6>
                                            <div className="tool-imgs d-flex py-1">
                                                <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/githubr.svg"
                                                    alt="github logo" />
                                            </div>
                                        </div>
                                        <div className="w-50">
                                            <h6 className="fsxl-m16 fw-600 o-08 text-white font-mont">
                                                Wrapper:
                                            </h6>
                                            <div className="tool-imgs d-flex py-1">
                                                <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/Swagger.svg"
                                                    alt="swagger logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-50">
                                    <h6 className="fsxl20 text-white font-mont fw-600 pb-2">
                                        Accessibility
                                    </h6>
                                    <div className="fsxl-m16 fw-600 font-mont" style={{color: "var(--primary-3)"}}>
                                        Partner-only
                                    </div>
                                    <div className="font-mont pt-1">
                                        <p className="fsxl-m16">
                                            Pricing options in public domain,
                                            <br />
                                            <a href="#" className="fw-600">become a partner here.</a>
                                        </p>
                                    </div>
                                    <div className="font-mont o-08 fw-600 text-white pt-1 fsxl-m16">
                                        Documentation <span className="px-1"></span> <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px"
                                            viewBox="0 0 16 16" version="1.1">
                                            <rect width="16" height="16" id="icon-bound" fill="none" />
                                            <path
                                                d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z"
                                                fill="#ffffff88" />
                                        </svg>
                                        <br />
                                        Open Sandbox <span className="px-1"></span> <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px"
                                            viewBox="0 0 16 16" version="1.1">
                                            <rect width="16" height="16" id="icon-bound" fill="none" />
                                            <path
                                                d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z"
                                                fill="#ffffff88" />
                                        </svg>
                                    </div>
                                    <div className="pt-3 font-mont fsxl12">
                                        <i>*Documentation and sandbox only avaliable to <br /> partners</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-hold">
                            <div className="know-form font-mont">
                                <div className="pb-4">
                                    <h5 className="fsxl20 text-white  fw-600">Enquire about this API</h5>
                                </div>
                                <form>
                                    <input type="text" name="name" placeholder="Firstname Surname" />
                                    <input type="email" name="email" placeholder="Work Email" />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            
            <section id="resource-tab" className="pt-2 container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link fsxl24 active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">
                            Endpoints
                        </button>
                        <button className="nav-link fsxl24" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            FHIR Resources
                        </button>
                        <button className="nav-link fsxl24" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                            type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                            Triggers &amp; Actions
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit.
                        Exercitationem consequatur aliquid itaque
                        ratione eveniet. Impedit tenetur
                        voluptatem perspiciatis pariatur nemo.
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="rs-card-wrap">
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rs-card-wrap">
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rs-card-wrap">
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="rs-card-wrap">
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="rs-card-wrap">
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                                <div className="rs-card">
                                    <div className="header">
                                        Conformance
                                    </div>
                                    <ul>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                        <li>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit.
                        Exercitationem consequatur aliquid itaque
                        ratione eveniet. Impedit tenetur
                        voluptatem perspiciatis pariatur nemo.
                    </div>
                </div>
            </section>
        </main>
    )
}