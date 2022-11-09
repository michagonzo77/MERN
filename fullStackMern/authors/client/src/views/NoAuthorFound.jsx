import {Link} from "react-router-dom";

export const NoAuthorFound = (props) => {
    return (
        <>
        <div className="flex-col align-items-center text-center black-bg">
            <h2 className="cool-bg">We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h2>
            <Link className="h3" to="/authors/new">Add New Author</Link>
        </div>
    </>
    )
}