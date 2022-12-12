export function Github () {
    return <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/githubr.svg" alt="github logo" />
}

export function Swagger () {
    return <img src="https://www.alphalake.ai/hubfs/API%20Direct%20Logo/Swagger.svg" alt="swagger logo" />
}

export default function ToolImgRenderer ({ tag }) {
    switch (tag) {
        case 'GITHUB': return <Github/>;
        case 'SWAGGER': return <Swagger/>;
        default: return <></>;
    }
}