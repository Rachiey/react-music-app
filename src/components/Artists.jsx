import React from 'react';
import { Card } from './Card';
import { LikeButton } from './LikeButton'

const artists = [
    { artistName: 'ABBA', musicType: 'Pop',  intro: 'ABBA are a Swedish pop group formed in Stockholm in 1972.' },
    { artistName: 'Queen', musicType: 'Rock', intro: 'Queen are a British rock band formed in London in 1970.' }
]

export const Artists = () => {
    const renderArtists = () => artists.map((p, i) => {
        return (
            <> 
            <Card key ={i} artistName={p.artistName} musicType={p.musicType} intro ={p.intro}/>
            <LikeButton />
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