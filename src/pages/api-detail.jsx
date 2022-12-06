import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/api-detail.css";
import { EHRTag, HospitalTag, ClinicianTag } from '../components/TextTags';

const fakeDatabase = {
    'cerner-r4': {
        title: "Cerner R4",
        image: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png",
        tags: ["EHR", "HOSPITALS", "CLINICIANS"],
        description: `Cerner Ignite APIs are cloud-based allowing for rapid,
        agile deployment of future updates or enhancements. It also simplifies`,
        by: "",
        publishedOn: "",
        version: "",
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

// async function getApiDetails (apiName) {
//     try {
//         // const { data } = await 
//         return { error: false, data };
//     } catch (error) {
//         console.log(error);
//         return { error };
//     }
// }

export default function ApiDetail() {
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [apiData, setApiData] = useState({});

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
        <>
            <section id="api-detail">
                <div className="detail-hero text-white container-fluid">
                    <div className="font-lucida fsxl-l16">
                        APIdirect Library &gt; {params.api}
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="api-logo">
                            <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png" alt="api logo" width='100%' />
                        </div>
                        <div className="api-title">
                            <h1 className="font-mont">Cerner R4</h1>
                        </div>
                        <div className="api-tags pt-2 d-flex gap-2 font-mont">
                            {
                                ["EHR", "HOSPITALS", "CLINICIANS"].map((t, i) => <TagRenderer key={i} tag={t} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between overview-hold">
                    <div className="overview text-white">
                        <h3 className="font-mont">Overview</h3>
                        <br />
                        <p className="font-lucida">
                            Cerner Ignite APIs are cloud-based allowing for rapid,
                            agile deployment of future updates or enhancements.
                            It also simplifies implementation of the APIs for healthcare
                            providers because the ontology mapping process is centralized,
                            which requires less effort than when performed on a per-deployment
                            basis.
                        </p>
                        <div className="pt-4 font-mont">
                            <div className="dot-details">
                                <span className="label">Publisher: </span> Cerner
                            </div>
                            <div className="dot-details">
                                <span className="label">Published on: </span> xx/xx/xx
                            </div>
                            <div className="dot-details">
                                <span className="label">Release Version: </span> xx.xx.alpha
                            </div>
                        </div>
                        <div className="d-flex w-75 justify-content-between pt-4 mt-3">
                            <div className="dev-resource w-50">
                                <h3 className="font-mont">Developer Resources</h3>
                                <br />
                                <a href="#" target='_blank'>
                                    <h6 className="font-mont text-white">
                                        <span className="pt-3">
                                            Documentation
                                        </span>
                                        <span className="px-2"></span> <img src="/images/open_in_new.svg" alt="open in new" width='20px' />
                                    </h6>
                                </a>
                                <div className="d-flex w-100 pt-3 justify-content-between">
                                    <div className="w-50">
                                        <h6 className="font-mont text-white pb-2">
                                            Doc Tooling:
                                        </h6>
                                        <div className="d-flex">
                                            <div className="img-wrap ">
                                                <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/githubr.svg" alt="github logo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <h6 className="font-mont text-white pb-2">
                                            Wrapper:
                                        </h6>
                                        <div className="d-flex">
                                            <div className="img-wrap ">
                                                <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/Swagger.svg" alt="swagger logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accessibility">
                                <h3 className="font-mont">Accessibility</h3>
                                <br />
                                <h6 className="font-mont" style={{ color: "var(--primary-3)"}}>
                                    Partner-only
                                </h6>
                                <div className="dot-details font-mont">
                                    <span className="label">Pricing options in public domain, </span>
                                    <br />
                                    become a partner here.
                                </div>
                                <div className="ticks font-mont">
                                    <h6> Documentation <TickMark /></h6>
                                    <h6>Open Sandbox <TickMark /></h6>
                                </div>
                                <br />
                                <div className="font-mont" style={{ fontSize: 'small' }}>
                                    <i>
                                        *Documentation and sandbox only available to partners.
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="enquire-form">
                            <h5 className="font-mont text-white">Enquire about this API</h5>
                            <br />
                            <div>
                                <input type="text" name="name" className='input' placeholder='Firstname Surname' />
                                <input type="email" className='input' name="email" placeholder="Work Email" />
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section id="resource-tab" className="pt-2">
                <nav>
                    <div className="nav nav-tabs w-100" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab"
                            data-bs-toggle="tab" data-bs-target="#nav-home"
                            type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">
                            Endpoints
                        </button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab"
                            aria-controls="nav-profile" aria-selected="false">
                            FHIR Resources
                        </button>
                        <button
                            className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-contact" type="button" role="tab"
                            aria-controls="nav-contact" aria-selected="false">
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
                        <div className="d-flex flex-wrap justify-content-around">
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
        </>
    )
}

const tagComponentMap = {
    "EHR": <EHRTag />,
    "HOSPITALS": <HospitalTag />,
    "CLINICIANS": <ClinicianTag />
}

function TagRenderer({ tag }) {
    return tagComponentMap[tag];
}

function TickMark() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
            <rect width="16" height="16" id="icon-bound" fill="none" />
            <path d="M0,9.014L1.414,7.6L5.004,11.189L14.593,1.6L16.007,3.014L5.003,14.017L0,9.014Z" fill="#ffffff88" />
        </svg>
    )
}