import { useRef } from "react";
import "./styles/navbar.css";

const sideItems = [
    { title: "Alphabot-for-Teams", link: "https://www.alphalake.ai/alphabot-for-teams?hsLang=en", sup: true },
    { title: "NLP Connect", link: "https://www.alphalake.ai/nlpconnect?hsLang=en", sup: true },
    { title: "API Direct", link: "https://www.alphalake.ai/apiconnect?hsLang=en", sup: true },
    { title: "Future Of Health", link: "https://www.alphalake.ai/future-of-health?hsLang=en" },
    { title: "Technology", link: "https://www.alphalake.ai/technology?hsLang=en" },
    { title: "Services", link: "https://www.alphalake.ai/services?hsLang=en" },
    { title: "Events", link: "https://www.alphalake.ai/events?hsLang=en" },
    { title: "Blog", link: "https://www.alphalake.ai/blog?hsLang=en" },
    { title: "Resources", link: "https://www.alphalake.ai/resources?hsLang=en" },
    { title: "Company", link: "https://www.alphalake.ai/company?hsLang=en" }
]

export default function Navbar() {
    const navRef = useRef();
    function openNav() {
        navRef.current.style.width = "min(500px, 100vw)";
    }

    function closeNav() {
        navRef.current.style.width = 0;
    }

    return (
        <nav>
            <div className="logo">
                <img
                    src="https://www.alphalake.ai/hs-fs/hubfs/logo-1.png?width=366&name=logo-1.png"
                    alt="AlphalakeAi Logo"
                />
            </div>
            <div className="sidepanel" ref={navRef}>
                <div className="btn-holder">
                    <button className="nav-toggle-btn" onClick={closeNav}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="ulScroll">
                    <ul>
                        {
                            sideItems.map((item, idx) => <SidebarListItem
                                title={item.title}
                                href={item.link}
                                key={idx}
                                sup={item.sup}
                            />)
                        }
                    </ul>
                </div>
            </div>
            <button className="nav-toggle-btn" onClick={openNav}>
                <i className="fa fa-bars"></i>
            </button>
        </nav>
    );
}


function SidebarListItem({
    href,
    title,
    sup = false
}) {
    return (
        <li>
            <a href={href}>
                {title} {sup ? <sup>TM</sup> : <></>}
            </a>
        </li>
    )
}