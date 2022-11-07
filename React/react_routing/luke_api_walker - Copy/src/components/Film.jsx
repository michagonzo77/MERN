import React from "react";

export const Film = (props) => {
    const {title, opening_crawl, director, release_date} = props.film
    // const navigate = useNavigate();
    // const url = new URL(homeworld)

    // const sendToPlanet = () => {
    //     navigate(`/home${url.pathname}`)
    // }

    return (
        <>
            <div className="text-light flex-col align-items-center text-center w-50 main">
                <h1>{title}</h1>
                <p><b>Opening Crawl: </b> {opening_crawl}</p>
                <p><b>Director: </b> {director}</p>
                <p><b>Release Date: </b> {release_date}</p>
            </div>
        </>
    )
}