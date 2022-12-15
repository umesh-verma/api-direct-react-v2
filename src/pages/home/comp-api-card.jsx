import ToolImgRenderer from "../../components/ToolImgTags.jsx";
import ImgTagRenderer from "../../components/ImageTags";
import TextTagRenderer from "../../components/TextTags";
import { useNavigate } from "react-router-dom";

const fakeData = {
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
}

function createSlug(title) {
    return title.trim().toLowerCase().replace(/\s+/g, '-');
}

export default function Card({ data = fakeData }) {

    const navigate = useNavigate();
    function onCardClick () {
        navigate('detail/'+createSlug(data.title));
    }

    return (
        // <Link to={createSlug(data.title)}>
            <div className="card" onClick={onCardClick}>
                <div className="brand-n-title">
                    <div className="title fsxl36 text-white font-mont fw-600">{data.title}</div>
                    <div className="brand-image-hold">
                        <img src={data.logoUrl} width="100%" />
                    </div>
                </div>
                <div className="tile-right">
                    <div className="img-tags py-1">
                        {
                            data.imgTags.map((t, i) => <ImgTagRenderer key={i} tag={t} />)
                        }
                    </div>
                    <div className="tool-imgs d-flex py-1">
                        {
                            data.toolTags.map((t, i) => <ToolImgRenderer key={i} tag={t} />)
                        }
                    </div>
                </div>
                <div className="text-tags pt-2">
                    {
                        data.textTags.map((t, i) => <TextTagRenderer key={i} tag={t} />)
                    }
                </div>
                <div className="desc">
                    <p className="font-lucida text-white fsxl-l16">
                        {data.description}
                    </p>
                </div>
                <div class="publish">
                    <div class="fsxl-l16">API by: <span class="value">{data.publisher.by}</span></div>
                    <div class="fsxl-l16">Published on: <span class="value">{data.publisher.date}</span></div>
                    <div class="fsxl-l16">Released version: <span class="value">{data.publisher.version}</span></div>
                </div>
            </div>
        // </Link>
    )
}