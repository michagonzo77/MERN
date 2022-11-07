import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDestinationById } from '../services/internalApiService';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [destination, setDestination] = useState(null)

    useEffect(() => {
        getDestinationById(id)
            .then((data) => {
                setDestination(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    if (destination === null) {
        return null
    }

    const { location, description, summer, winter, fall, spring, srcType, src } = destination


    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{location}</h4>
            <p>{description}</p>
            <h5>Travel Seasons</h5>
            <ul className="list-group">
                {summer && <li className="list-group-item">Summer</li>}
                {winter && <li className="list-group-item">Winter</li>}
                {spring && <li className="list-group-item">Spring</li>}
                {fall && <li className="list-group-item">Fall</li>}
            </ul>
            {srcType === "img" && (
                <img className="shadow rounded" width="100%" src={src} alt={location} />
            )}
            {srcType === "Google Maps Embed" && (
                <iframe
                    src={src}
                    title={description}
                    width="100%"
                    height="600px"
                    frameborder="0"
                    loading="lazy"
                    className="shadow rounded"
                ></iframe>
            )}
            {srcType === "Youtube Embed" && (
                <iframe
                    src={src}
                    title={description}
                    width="100%"
                    height="600px"
                    frameborder="0"
                    loading="lazy"
                    className="shadow rounded"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            )}
        </div>
    )
}