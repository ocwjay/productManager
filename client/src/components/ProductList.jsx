import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const {products, setProducts} = props;
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
        console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>{console.log(err)})
    }, [])
    
    return (
        <div>
            {
                products.map((product, index)=>{
                    return(
                        <div key={index}>
                            <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                            <Link to={`/products/edit/${product._id}`}>Edit</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;