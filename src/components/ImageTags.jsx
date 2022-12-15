export function FHIR() {
    return (
        <div className="img-tag">
            <img className="fhir-image" src="https://www.alphalake.ai/hubfs/api-connect-images/FHIR.png" />
            <div className="font-mont fhir-text">FHIR</div>
        </div>
    )
}

export function WorkatoNoCode() {
    return (
        <div className="img-tag">
            <img className="workato-image" src="https://fs.hubspotusercontent00.net/hubfs/6637851/api-connect-images/Workato.png" />
            <div className="workato-text">No<span style={{ color: "#67EADD" }}>code</span></div>
        </div>
    )
}

export function NonFHIR() {
    return (
        <div className="img-tag">
            <img className="fhir-image" src="https://www.alphalake.ai/hubfs/api-connect-images/FHIR.png" style={{ filter: "grayscale(100)" }} />
            <div className="fhir-text ">Non-FHIR</div>
        </div>
    )
}

export default function ImgTagRenderer ({ tag }) {
    switch (tag) {
        case 'FHIR': return <FHIR/>;
        case 'WORKATO': return <WorkatoNoCode/>;
        case 'NON-FHIR': return <NonFHIR />;
        default: return <></>;
    }
}
