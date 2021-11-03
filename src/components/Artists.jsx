import React, { useState } from 'react';
import { Card } from './Card';
import { LikeButton } from './LikeButton'
import { Lyrics } from './Lyrics'




const artists = [
    { artistName: 'ABBA', musicType: 'Pop',  intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.', songTitle: 'mamma-mia' },
    { artistName: 'Queen', musicType: 'Rock', intro: 'Queen are a British rock band formed in London in 1970.', songTitle: 'bohemian-rhapsody' }
]


export const Artists = () => {
    const [showLyrics, setShowLyrics] = useState(false);
    const toggleLyrics = () => setShowLyrics (prevState => !prevState);

    const renderArtists = () => artists.map((p, i) => {
        return (
            <> 
            <Card key ={i} artistName={p.artistName} musicType={p.musicType} intro ={p.intro}/>
            <LikeButton />
            <article aria-label='lyrics' id="fun" style={{margin: "10px", color: "pink"}}>
          { showLyrics ? <Lyrics close={toggleLyrics} artistName={p.artistName} songTitle={p.songTitle}/> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
          </article>
            </>
        )
    });


    return (
        <section id="artists">
            <h2>Choose an artist:</h2>
            <ol>
                { renderArtists() } 
                
            </ol>

        </section>
    )
}