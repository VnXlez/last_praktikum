import React, { useState, useEffect } from "react";
import './fetch.css';
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar} from "@fortawesome/free-regular-svg-icons";

const Fetch = () => {

    const [menu, setMenu] = useState([])

    const solidStarIcon = <FontAwesomeIcon icon={solidStar}/>
    const emptyStarIcon = <FontAwesomeIcon icon={emptyStar} />

    useEffect(() => {
        fetch("http://localhost:3030/cities")
            .then((res) => res.json())
            .then((json) => setMenu(json))
    }, [])

    const handleDelete = (id => {
        fetch(`http://localhost:3030/cities/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setMenu(menu.filter(post => post.id !== id))
            })
            .catch(error => {
                alert("error deleting", error);
            })
    })

    return (
        <div>
            <div className="imge">
                <div className="main-container">
                    {menu.map((post) => (
                        <div className="container">
                            <div className="box">
                                <img className="img2" src={post.imageUrl} />
                                <h1 className="box-content">{post.nama}</h1>
                                <button onClick={() => { handleDelete(post.id) }}>Hapus</button>
                                <p>{post.description}</p>
                                <p style={{color: "gold"}}>Rating :</p>
                                <Rating emptySymbol={emptyStarIcon} fullSymbol={solidStarIcon} className="rating" readonly initialRating={post.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Fetch