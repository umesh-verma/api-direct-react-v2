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
    }, [params.api])



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
                        <br/>
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
                            <div  className="dot-details">
                                <span className="label">Published on: </span> xx/xx/xx
                            </div>
                            <div  className="dot-details">
                                <span className="label">Release Version: </span> xx.xx.alpha
                            </div>
                        </div>
                        <div className="d-flex gap-2 pt-4 mt-3">
                            <div className="dev-resource">
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
                                <div className="d-flex justify-content-between">
                                    <div className="w-50">
                                        <h6 className="font-mont text-white">
                                            Doc Tooling:
                                        </h6>
                                    </div>
                                    <div className="w-50">
                                        <h6 className="font-mont text-white">
                                            Wrapper:
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="accessibility">
                                <h3 className="font-mont">Accessibility</h3>
                            </div>
                        </div>
                    </div>
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