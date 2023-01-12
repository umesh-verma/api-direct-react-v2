export function Github () {
    return <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/githubr.svg" alt="github logo" />
}

export function Swagger () {
    return <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/Swagger.svg" alt="swagger logo" />
}

export function UploadIo () {
    return <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Api%20Direct%20Version%202%20Resources/Image/upload-tr.png" alt="upload io-logo" width="45px" />
}

export function RestApi () {
    return <img src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/api-connect-images/RESTAPI_LOGO.svg" alt="rest-api" width="100px" />
}

export default function ToolImgRenderer ({ tag }) {
    switch (tag) {
        case 'GITHUB': return <Github/>;
        case 'SWAGGER': return <Swagger/>;
        case 'UPLOAD-TO': return <UploadIo/>;
        case 'UPLOAD-IO': return <UploadIo/>;
        case 'REST-API': return <RestApi/>;
        case 'REST': return <RestApi/>;
        case 'SOAP': return <RestApi/>
        default: return <></>;
    }
}