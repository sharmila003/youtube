import {useEffect, useState} from 'react'
import Videocard from "./Videocard"
import API_KEY from '../data/youtube'
//import  TagList  from '../lists'
//import VideoContainer from './videocontainer'

export const Feed = () => {
  useEffect (()=>{
      fetchvideos()
  },[])
   const[videolist,setvideolist]=useState([])
  
  
  async  function fetchvideos() {
     const  res= await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY)
     const   data = await res.json()
      console.log(data.items)
      setvideolist(data.items);
    }
   
  
    return (
    <div  className='ml-5 mr-5 w-[100%] flex  flex-wrap  col-3'>
       {videolist.map((item)=>{return <Videocard  key={item.id}  data={item}/>})}  
    </div>
  )
}

