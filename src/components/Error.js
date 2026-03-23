import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>
                Oops!!
            </h2>
            <h3>
                Something went wrong🙄😱!!
            </h3>
            <div>{err.status}:{err.statusText}</div>
        </div>
    )
}

export default Error;
