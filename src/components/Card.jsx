import React from 'react';
import Rating from 'react-rating-stars-component';


const Card = ({ data }) => {
    const {  image, title, rating } = data;

    return (
        <div className='card' >
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <div className="star_rating">
                    <Rating
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={rating}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;
