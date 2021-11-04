import React, { useState } from 'react';
import './style.css';

export const LikeButton = () => {
    const [ liked, setLiked ] = useState(false);
    const handleClick = () => setLiked((prevLiked) => !prevLiked);
    return (
        <div className="like">
            <span
                onClick={handleClick}
                role="switch"
                style={{ color: liked ? '#1ED761' : 'grey' }}
            >♡</span>
        </div>
    );
}