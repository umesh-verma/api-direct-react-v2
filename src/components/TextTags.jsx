export function EHR() {
    return (
        <div className="text-tag">
            <img className='tag-image' src="https://www.alphalake.ai/hubfs/api-connect-images/note.png" />
            <div className="tag-text">EHR</div>
        </div>
    )
}

export function Hospitals() {
    return (
        <div className="text-tag">
            <img className='tag-image' src="https://www.alphalake.ai/hubfs/api-connect-images/hospital.png" />
            <div className="tag-text">Hospitals</div>
        </div>
    )
}

export function Clinicians() {
    return (
        <div className="text-tag">
            <img className='tag-image' src="https://www.alphalake.ai/hubfs/api-connect-images/Clinician-icon.png" />
            <div className="tag-text">Clinicians</div>
        </div>
    )
}

export default function TextTagRenderer ({ tag }) {
    switch (tag) {
        case "EHR": return <EHR/>;
        case "HOSPITALS": return <Hospitals />;
        case "CLINICIANS" : return <Clinicians />;
        default: return <></>;
    } 
}

// TypeMismatchError: Expected 'number' found 'string';