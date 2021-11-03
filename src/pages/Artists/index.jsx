import React, { useState } from 'react';
import { Card } from '../../components/Card';
import { LikeButton } from '../../components/LikeButton'
import { Lyrics } from '../../components/Lyrics'


const artists = [
    { artistName: 'ABBA', musicType: 'Pop',  intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.', songTitle: 'mamma-mia', showLyrics: false },
    { artistName: 'Queen', musicType: 'Rock', intro: 'Queen are a British rock band formed in London in 1970.', songTitle: 'bohemian-rhapsody', showLyrics: false },
    { artistName: 'BTS', musicType: 'Kpop',  intro: 'BTS also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in 2013 under Big Hit Entertainment.', songTitle: 'dynamite', showLyrics: false },
    { artistName: 'Bon Jovi', musicType: 'Rock', intro: 'Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey.', songTitle: 'always', showLyrics: false },
    { artistName: 'Lauv', musicType: 'Pop',  intro: 'Ari Staprans Leff (born August 8, 1994), known professionally as Lauv is an American singer, songwriter, and record producer.', songTitle: 'i-like-me-better', showLyrics: false },
    { artistName: 'Linkin Park', musicType: 'Rock', intro: 'Linkin Park is an American rock band from Agoura Hills, California.', songTitle: 'numb', showLyrics: false },
]


export const Artists = () => {

    const [showLyrics, setShowLyrics] = useState(false);
    const toggleLyrics = () => setShowLyrics (prevState => !prevState);

    const renderArtists = () => artists.map((p, i) => {
        return (
            <> 
            <Card key ={i} artistName={p.artistName} musicType={p.musicType} intro ={p.intro}/>
            <LikeButton />
            <div aria-label='lyrics' style={{margin: "10px", color: "#1ED761", whiteSpace: "pre-wrap"}}>
          { showLyrics ? <Lyrics close={toggleLyrics} artistName={p.artistName} songTitle={p.songTitle}/> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
          </div>
            </>
        )
    });


    return (
        <section id="artists">
            <h2>Choose an artist:</h2>
            <ol>
                <div className= "grid">
                { renderArtists() } 
                </div>
            </ol>

        </section>
    )
}