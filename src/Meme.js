import React from "react"
import memesData from "./memesData"
export default function Meme(){
    
    function getMemeImage(){
        const imgArr = memesData.data.memes
        const random = Math.floor(Math.random() * imgArr.length)
        const memeImage = imgArr[random].url
        console.log(memeImage)
    }

    return(
        <div className="input-container">
            <div className="input">
                <input className="up" type="text" placeholder="Top text"></input>
                <input className="down" type="text" placeholder="Bottom text"></input>
            </div>
            <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
    )
}