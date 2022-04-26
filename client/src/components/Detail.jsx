import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {_id} = useParams();
    const navigate = useNavigate();
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                navigate('/home');
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then( (res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <h3>Title: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => deleteProduct(_id)}>Delete</button>
            <a href="/home">Home</a>
        </div>
    )
}
export default Detail;