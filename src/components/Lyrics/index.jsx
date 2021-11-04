import React, { useState } from 'react';
import { LyricsButton } from '../LyricsButton';

export const Lyrics = ({ p }) => {
    const [ showLyrics, setShowLyrics ] = useState(false);
    const toggleLyrics = () => setShowLyrics(prevState => !prevState);

    return (
        <article aria-label='lyrics'>
            { showLyrics ? <LyricsButton close={toggleLyrics} artistName={p.artistName} songTitle={p.songTitle} /> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
        </article>
    )
}
