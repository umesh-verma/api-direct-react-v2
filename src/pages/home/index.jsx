import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CliniciansIcon, EhrIcon, GridIcon, HospitalIcon, ListIcon } from '../../components/TextTags';
import "../styles/global-n.css";
import Card from './comp-api-card';
import "./style.css";


const tags = [
    { title: "EHR", tag: "ehr", iconUrl: "/images/ehr-page.svg", icon: <EhrIcon /> },
    { title: "Hospital", tag: "hospital", iconUrl: "/images/hospital-h.svg", icon: <HospitalIcon /> },
    { title: "Clinicians", tag: "clinicians", iconUrl: "/images/clinicians.svg", icon: <CliniciansIcon /> },
]

const fakeCards = [
    {
        title: "Cerner R4 Millenium",
        logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png",
        imgTags: ["FHIR", "WORKATO"],
        textTags: ["EHR", "HOSPITALS", "CLINICIANS"],
        toolTags: ["GITHUB", "SWAGGER"],
        description: `Cerner Ignite APIs are cloud-based allowing for rapid,
        agile deployment of future updates or enhancements.
        It also simplifies implementation of the...`,
        publisher: {
            by: "Cerner",
            date: "xx/xx/xx",
            version: "xx.xx.alpha"
        }
    },
    {
        title: " Millenium",
        logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png",
        imgTags: ["FHIR", "WORKATO"],
        textTags: ["EHR", "HOSPITALS", "CLINICIANS"],
        toolTags: ["GITHUB", "SWAGGER"],
        description: `Cerner Ignite APIs are cloud-based allowing for rapid,
        agile deployment of future updates or enhancements.
        It also simplifies implementation of the...`,
        publisher: {
            by: "Cerner",
            date: "xx/xx/xx",
            version: "xx.xx.alpha"
        }
    },
    {
        title: "Cerner R4",
        logoUrl: "https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/cerner-1.png",
        imgTags: ["NON-FHIR", "WORKATO"],
        textTags: ["HOSPITALS", "CLINICIANS"],
        toolTags: ["GITHUB", "SWAGGER"],
        description: `Cerner Ignite APIs are cloud-based allowing for rapid,
        agile deployment of future updates or enhancements.
        It also simplifies implementation of the...`,
        publisher: {
            by: "Cerner",
            date: "xx/xx/xx",
            version: "xx.xx.alpha"
        }
    }
]

export default function Main() {

    const [selectedTags, setSelectedTags] = useState([]);
    const [listView, setListView] = useState(true);
    const [cards, setCards] = useState(fakeCards);

    function onTagClick(tag) {
        if (selectedTags.includes(tag)) {
            setSelectedTags(prev => prev.filter(t => t !== tag))
        } else {
            setSelectedTags(prev => [...prev, tag])
        }
    }

    const scrollRef = useRef();
    const executeScroll = () => scrollRef.current.scrollIntoView();


    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }
        window.addEventListener('resize', handleResize);

        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    });

    useEffect(() => {
        if (dimensions.width < 768) {
            setListView(false)
        }
    }, [dimensions]);

    return (
        <main id="home">
            <section className="cdh hero py-3">
                <div className="container-fluid d-flex">
                    <div className="d-flex py-4 my-auto w-100">
                        <div className="l-bg d-flex">
                            <div className="my-auto">
                                <h1 className="fsxl96 fw-600 text-white">
                                    Welcome to <br /> APIdirect
                                </h1>
                                <br />
                                <h3 className="fsxl32 fw-600 text-primary-3">
                                    The world's first Healthcare API library.
                                </h3>
                            </div>
                        </div>
                        <div className="r-bg d-flex">
                            <div className="my-auto">
                                <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/ReactApiImg/hero-bot.png" alt="bg-imge" width="90%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white browse">
                    <h4 className="fsxl24" onClick={executeScroll}>Browse our API Library </h4>
                </div>
            </section>

            <section className="cdh center what">
                <div className="container">
                    <div className="text-center font-mont text-white">
                        <h3 className="fsxl32 fw-600">What is APIdirect ?</h3>
                    </div>
                    <div className="content-form d-flex justify-content-around flex-wrap">
                        <div className="content">
                            <h5 className="fsxl24 font-mont">
                                The library serves as a <span style={{ color: "#F8B225" }}>FREE</span> knowledge base for the
                                digital health tech community to access simplified
                                information on API’s that exist across the health
                                and care ecosystem.
                            </h5>
                            <br />
                            <div className="d-flex bot-n-content">
                                <div className="plug-bot-img-hold">
                                    <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/ReactApiImg/plug-bot.png" alt="alphabot plug" />
                                </div>
                                <div className="font-lucida plug-content text-white">
                                    <p className="fsxl-l16">
                                        Private and open APIs can be searched or browsed as both traditional
                                        APIs and modern no-code Connectors. Each API contains a simplified
                                        summary of the data endpoints available. The library can also be used
                                        to quickly obtain available FHIR resources.
                                    </p>
                                    <p className="fsxl-l16">
                                        Where a No-Code Connector exists for an API to offer plug
                                        and play interoperability and improved automation, this is
                                        displayed along with the API’s key information and capability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="form-hold">
                            <div className="know-form font-mont">
                                <div>
                                    <h5 className="fsxl20 text-white  fw-600">Like what you see ?</h5>
                                    <p className="fsxl-m14 text-white my-4">
                                        Do you see an API that you think will
                                        be beneficial to your organisation?
                                        Fill out the form below and we will
                                        be in touch soon!
                                    </p>
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

            <section className="not-got">
                <div className="container-fluid d-flex gap-2">
                    <div className="l-hold">
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="text-side">
                                <h3 className="fsxl32 font-mont text-white fw-600">
                                    Not got an API yet? We can build you one! 😊
                                </h3>
                                <p className="fsxl-l16 font-lucida text-white">
                                    Just fill in the contact form and we will be in touch soon!
                                </p>
                            </div>
                            <div className="know-form font-mont">
                                <form>
                                    <input type="text" name="name" placeholder="Firstname Surname" />
                                    <input type="email" name="email" placeholder="Work Email" />
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="adv-space">
                        Advertising Space
                    </div>
                </div>
            </section>

            <section className="direct" ref={scrollRef}>
                <div className="container-fluid text-center font-mont">
                    <h2 className="fsxl36 fw-600 text-white">APIdirect Library</h2>
                    <br />
                    <p className="fsxl20 text-white">
                        Browse our selection of avaliable APIs or if you would like <br />
                        to have yours listed, request it <Link to="upload" className='text-primary-3 imp' style={{ textDecoration: "none" }}>here.</Link>
                    </p>
                </div>
                <br />
                <div className="container">
                    <div className="search-box d-flex">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1553_6033" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1553_6033)">
                                <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 
                                16 6.146 15.371 4.888 14.113C3.62933 12.8543 3 11.3167 3 9.5C3 7.68333 3.62933 6.14567 4.888 
                                4.887C6.146 3.629 7.68333 3 9.5 3C11.3167 3 12.8543 3.629 14.113 4.887C15.371 6.14567 
                                16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 
                                19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5627 11.8127 14 10.75 14 9.5C14 
                                8.25 13.5627 7.18733 12.688 6.312C11.8127 5.43733 10.75 5 9.5 5C8.25 5 7.18733 5.43733 6.312 
                                6.312C5.43733 7.18733 5 8.25 5 9.5C5 10.75 5.43733 11.8127 6.312 12.688C7.18733 13.5627 8.25 14 9.5 14Z"
                                    fill="#059B9A"
                                />
                            </g>
                        </svg>
                        <input type="text" name="search" placeholder="Search our 22 APIs" />
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex tag-box">
                            {
                                tags.map((t, i) => <div key={i} className={`search-tag ${selectedTags.includes(t.tag) ? 'active' : ''}`}
                                    onClick={() => onTagClick(t.tag)}>
                                    {t.icon} <span>{t.title}</span>
                                </div>)
                            }
                        </div>
                        <button className='view-switch' onClick={() => setListView(prev => !prev)}>
                            {listView ? <GridIcon /> : <ListIcon />}
                            <span>
                                {listView ? "Grid View" : "List View"}
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section className={`cards container ${listView ? 'tile' : 'grid'}`}>
                {
                    cards.map((c, i) => <Card key={i} data={c} />)
                }
            </section>

            <section className="container mt-3 pb-2">
                <div className="adv-space">
                    Advertising Space
                </div>
            </section>
        </main>
    )
}

