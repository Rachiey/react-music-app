import React from 'react';
import { Card, LikeButton, Lyrics } from '../../components/';
import './style.css';

const artists = [
    { artistName: 'ABBA', musicType: 'Pop',  intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.', songTitle: 'mamma-mia', showLyrics: false },
    { artistName: 'Queen', musicType: 'Rock', intro: 'Queen are a British rock band formed in London in 1970.', songTitle: 'bohemian-rhapsody', showLyrics: false },
    { artistName: 'BTS', musicType: 'Kpop',  intro: 'BTS also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in 2013 under Big Hit Entertainment.', songTitle: 'dynamite', showLyrics: false },
    { artistName: 'Bon Jovi', musicType: 'Rock', intro: 'Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey.', songTitle: 'always', showLyrics: false },
    { artistName: 'Lauv', musicType: 'Pop',  intro: 'Ari Staprans Leff (born August 8, 1994), known professionally as Lauv is an American singer, songwriter, and record producer.', songTitle: 'i-like-me-better', showLyrics: false },
    { artistName: 'Linkin Park', musicType: 'Rock', intro: 'Linkin Park is an American rock band from Agoura Hills, California.', songTitle: 'numb', showLyrics: false },
]

{/* <div aria-label='lyrics' style={{margin: "10px", color: "#1ED761", whiteSpace: "pre-wrap"}}> */}
// </div>

export const Artists = () => {
    const renderArtists = () => artists.map((p, i) => {
        return (
            <div key ={i} className="artists">
                <div>
                    <Card artistName={p.artistName} musicType={p.musicType} intro={p.intro} />
                    <LikeButton />
                    <div aria-label='lyrics' style={{margin: "10px", color: "white", whiteSpace: "pre-wrap", fontFamily: "Helvetica"}}>
                    <Lyrics p={p}/>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <section id="artists">
            { renderArtists() }
        </section>
    )
}