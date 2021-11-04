import React from 'react';
import { Card, LikeButton, Lyrics } from '../../components/';
import './style.css';

const artists = [
    { artistName: 'ABBA', musicType: 'Pop',  intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.', songTitle: 'mamma-mia', showLyrics: false, image: "https://upload.wikimedia.org/wikipedia/en/2/27/ABBA_-_The_Album_%28Polar%29.jpg" },
    { artistName: 'Queen', musicType: 'Rock', intro: 'Queen are a British rock band formed in London in 1970.', songTitle: 'bohemian-rhapsody', showLyrics: false, image: "https://i.pinimg.com/564x/d1/3b/88/d13b88230364d2f9d3e6f52db9495636.jpg" },
    { artistName: 'BTS', musicType: 'Kpop',  intro: 'BTS also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in 2013 under Big Hit Entertainment.', songTitle: 'dynamite', showLyrics: false, image: "https://img.discogs.com/S2JVLVAXzShRiwbRKVaW5Ttj3m8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15974524-1601197609-6669.jpeg.jpg"},
    { artistName: 'Bon Jovi', musicType: 'Rock', intro: 'Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey.', songTitle: 'always', showLyrics: false, image: "https://upload.wikimedia.org/wikipedia/en/9/96/BJ_Greatest.jpg" },
    { artistName: 'Lauv', musicType: 'Pop',  intro: 'Ari Staprans Leff (born August 8, 1994), known professionally as Lauv is an American singer, songwriter, and record producer.', songTitle: 'i-like-me-better', showLyrics: false, image:"https://upload.wikimedia.org/wikipedia/en/4/45/Lauv_-_How_I%27m_Feeling.png"},
    { artistName: 'Linkin Park', musicType: 'Rock', intro: 'Linkin Park is an American rock band from Agoura Hills, California.', songTitle: 'numb', showLyrics: false, image: "https://images-eu.ssl-images-amazon.com/images/I/41E27Y6YHXL.__AC_QL70_ML2_.jpg" },
]


export const Artists = () => {
    const renderArtists = () => artists.map((p, i) => {
        return (
            <div key ={i} className="artists">
                <div className="greyBox">
                    <Card artistName={p.artistName} musicType={p.musicType} intro={p.intro} image={p.image} />
                    <LikeButton />
                    <div aria-label='lyrics' style={{margin: "10px", color: "white", whiteSpace: "pre-wrap", fontFamily: "Helvetica"}}>
                    <Lyrics p={p}/>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
        <h1 className="artistTitle"> Artists </h1>
        <section id="artists">
           
            { renderArtists() }
        </section>
        </>
    )
}