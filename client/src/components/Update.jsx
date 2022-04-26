import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props) => {
    const {_id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then( (res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${_id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Title:
                    <input type='text'
                    name='title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                </label>
                <label>
                    Price:
                    <input type="text"
                    name='price'
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
                </label>
                <label>
                    Description:
                    <input type="text"
                    name='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;