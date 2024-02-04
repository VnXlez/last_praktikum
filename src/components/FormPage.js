import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css'
import Rating from "react-rating";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const FormPage = () => {

    const solidStarIcon = <FontAwesomeIcon icon={solidStar} />
    const emptyStarIcon = <FontAwesomeIcon icon={emptyStar} />

    const [name, setName] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [imageLink, setImageLink] = useState('')
    const navigate = useNavigate()

    const HandleSubmit = (e) => {
        e.preventDefault()
        const city = { name, rating, imageLink, description }

        fetch('http://localhost:3030/cities', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(city)
        }).then(() => {
            console.log("New City added")
        }).then(() => {
            navigate("/")
        })
    }

    const handleCancel = () => {
        navigate("/")
    }

    return (
        <form onSubmit={HandleSubmit} className="form-container">
            <label>City Name:</label>
            <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>City Rating:</label>
            {/* <input 
            type="number"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            /> */}

            <Rating
                emptySymbol={emptyStarIcon}
                fullSymbol={solidStarIcon}
                className="rating"
                value={rating}
                onChange={(e) => setRating(e)} />

            <label>City Description</label>
            <input
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Image Link:</label>
            <input
                type="link"
                required
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
            />
            <button className="formSubmit">Add City</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    )
}

export default FormPage