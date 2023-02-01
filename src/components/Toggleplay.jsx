import React, { useEffect } from 'react'
import { BsFillPauseBtnFill, BsFillPlayFill } from "react-icons/bs";
const Toggleplay = ({isplaying,music}) => {
    console.log("isplaying",isplaying,"top");
    const playmusic=()=>{
        if (isplaying) {
            music &&  music.play()
            console.log("isplaying",isplaying);


            
        }else{
            music.pause()
            console.log("isplaying not",isplaying);
        }
    }
    useEffect(()=>{
        playmusic()

    },[play,music])
  return (
    <div>
        {
            isplaying ?< BsFillPlayFill />:<BsFillPauseBtnFill/>
        }
       
    </div>
  )
}

export default Toggleplay
