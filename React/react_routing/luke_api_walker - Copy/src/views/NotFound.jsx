import {Link} from "react-router-dom";

export const NotFound = (props) => {
    return (
        <>
            <Link className="text-light h1 main" to="/home/api">Go Back Home</Link>
            <div className="flex-col align-items-center text-center black-bg">
                <h1 className="cool-bg">Not The Droids You Are Looking For</h1>
            </div>
        </>
    )
}