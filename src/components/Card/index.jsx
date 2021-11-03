import React, {useState } from 'react';
import './style.css';



export const Card = ({size, artistName, musicType, intro }) => {
    const [ showIntro, setShowIntro ] = useState(false);

    const handleMouseEnter = () => setShowIntro(true);
    const handleMouseLeave = () => setShowIntro(false);

    return (
        <div className={`card ${size}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <h3>{artistName}</h3>
            <em>{musicType}</em>
            <h4> {showIntro ? intro: "See more..."}</h4>
        </div>
    )
}
