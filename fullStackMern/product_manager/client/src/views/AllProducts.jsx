import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from "../services/internalApiService";

export const AllProducts = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    
    const handleDeleteClick = (idToDelete) => {
        deleteProduct(idToDelete)
            .then((data) => {
                console.log(data)
                const filteredProducts = products.filter((product) => {
                    return product._id !== idToDelete
                })
                setProducts(filteredProducts);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="w-50 mx-auto text-center">
            <h2>Travel Products</h2>
            {products.map((product, i) => {
                const {_id, title, price, description} = product;
                return (
                    <div key={i} className="shadow mb-4 rounded border p-4">
                        <Link to={`/products/${_id}`}>
                            <h4>{title}</h4>
                        </Link>
                        <p>${price}</p>
                        <p>{description}</p>
                        <button className="btn btn-sm btn-outline-danger mx-1" 
                        onClick={(e) => {
                            handleDeleteClick(_id)
                        }}
                        >Delete</button>
                        <Link className="btn btn-sm btn-outline-info mx-1"  to={`/products/${_id}/edit`}>Edit</Link>
                    </div>
                )
            })}
        </div>
    )
}