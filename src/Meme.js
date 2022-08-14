import React from "react"
import memesData from "./memesData"
export default function Meme(){

    const [meme , setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const imgArr = allMemeImages.data.memes
        const random = Math.floor(Math.random() * imgArr.length)
       setMeme(prevMeme => {
        return{
            ...prevMeme,
            randomImage: imgArr[random].url
        }
       })
    }

    
    return(
        <div>
            <div className="input-container">
            <div className="input">
                <input className="up" type="text" placeholder="Top text"></input>
                <input className="down" type="text" placeholder="Bottom text"></input>
            </div>
            <button onClick={getMemeImage}>Get a new meme image</button>

        </div>
        <div className="meme-container">
            <img src={meme.randomImage} className="meme-img"></img>
        </div>
        
        </div>
        
    )
}