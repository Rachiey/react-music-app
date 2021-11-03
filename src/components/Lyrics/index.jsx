import React, { useEffect } from 'react';
import axios from 'axios';
import './style.css';
// import { artists } from '../Artists'

export const Lyrics= ({ close, artistName, songTitle }) => {
    const [ lyrics, setLyrics ] = React.useState();
    useEffect(() => {
        async function showLyrics() {
            try {
                let opts = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`, opts)
                console.log(data)
                setLyrics(data['lyrics']);
            } catch (err) {
                console.warn(err);
                setLyrics("No lyrics found...")
            }
        }

        showLyrics()
        const stream = setInterval(showLyrics, 10000)

        return () => clearInterval(stream)
    }, [])


return (
    <>
    <span onClick={close} style={{cursor: "pointer"}}>Hide Lyrics</span>
    { lyrics ?
        <>
        <p>{lyrics}</p>
        </>
    : <h2>Lyrics are on their way!</h2> }
    </>
)
}