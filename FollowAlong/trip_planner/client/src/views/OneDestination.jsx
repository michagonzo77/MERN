import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getDestinationById, deleteDestination } from '../services/internalApiService';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getDestinationById(id)
            .then((data) => {
                setDestination(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteDestination(id)
            .then((data) => {
                navigate('/destinations')
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
            <button className="btn btn-sm btn-outline-danger mx-1"
                onClick={handleDeleteClick}
                >
                Delete
            </button>
            <Link className="btn btn-sm btn-outline-info mx-1"  to={`/destinations/${id}/edit`}>Edit</Link>
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