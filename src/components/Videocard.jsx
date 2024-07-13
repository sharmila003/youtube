/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import axios from "axios";
import Avatar from "react-avatar";
import API_KEY from '../data/youtube';
import  {Link}  from  'react-router-dom';
 

function Videocard({data}) {
    const {snippet, id}= data;
    const  {title, channelTitle, thumbnails , channelId} = snippet 
    console.log(snippet)


    const [channelLogo, setChannelLogo] = useState('');

    useEffect(() => {
        const fetchChannelLogo = async () => {
            try {
                const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
                setChannelLogo(res.data.items[0].snippet.thumbnails.default.url);
            } catch (error) {
                console.error('Error fetching channel logo:', error);
            }
        };

        fetchChannelLogo();
    }, [channelId]);

    return (
   
    <div className="w-1/3 p-1">
            <Link to={`/watch/${id}`}>
            <img className="rounded-xl" src={thumbnails.medium.url} alt="thumbnails" />
            
            <div className="flex mt-2 items-start">
                <Avatar  size={35}  round={true} src={channelLogo} alt="channel logo" className='mr-3' />
                <div>
                    <h5 className="font-medium text-sm">{title}</h5>
                    <p className="text-xs mt-2 text-gray-500">{channelTitle}</p>
                </div>
            </div>
           </Link>
        </div>
)
}

 export  default  Videocard;