import { useParams } from "react-router-dom";

export const EditDestination = (props) => {
    const {id} = useParams();
    return <h2>Edit Destination id: {id}</h2>
}