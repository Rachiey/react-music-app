import React, { useState } from 'react';
import './style.css';

export const LikeButton = () => {
    const [ liked, setLiked ] = useState(false);
    const handleClick = () => setLiked((prevLiked) => !prevLiked);
    return (
        <div className="like">
            <p aria-label="paragraph">Like</p>
            <span
                onClick={handleClick}
                role="switch"
                style={{ color: liked ? 'red' : 'grey' }}
            >♥</span>
        </div>
    );
}