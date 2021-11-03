import React, { useEffect } from 'react';
import axios from 'axios';

export const Lyrics= ({ close }) => {
    const [ lyrics, setLyrics ] = React.useState();
    useEffect(() => {
        async function showLyrics() {
            try {
                let opts = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get('https://api.lyrics.ovh/v1/abba/mamma-mia', opts)
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
    <span onClick={close} style={{cursor: "pointer"}}>x</span>
    { lyrics ?
        <>
        <p>{lyrics}</p>
        </>
    : <h2>Lyrics are on their way!</h2> }
    </>
)
}