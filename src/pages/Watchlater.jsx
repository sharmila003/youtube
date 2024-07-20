//import React from 'react'

/*import  Sidebar  from '../components/Sidebar';
//import Bodycomponent from '../components/Bodycomponent';



 function Watchlater() {
  return (
    <div   className='app'>
    <div   className="flex">
       <Sidebar/>
    
    </div>
  </div>
  )
}


export default  Watchlater;*/



/*import  Sidebar  from '../components/Sidebar';
//import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from '../components/Videocard'; // Assuming you have a VideoCard component

function WatchLater() {
  const watchLaterlist = useSelector((state) => state.watchLaterlist.videos); // Ensure this matches your Redux state slice
 
  
  console.log('watchLaterVideos:', watchLaterlist); 

  if (!watchLaterlist || !Array.isArray(watchLaterlist))  {
    // Handle the case when watchLaterVideos is undefined
    return <p>Loading...</p>;
  }


  return (
    <div className="app">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          {watchLaterlist.length > 0 ? (
            watchLaterlist.map((video) => (
              <VideoCard key={video.id} data={video} /> // Render each video card
            ))
          ) : (
            <p>No videos in Watch Later</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchLater;*/




import  { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch} from 'react-redux';
import VideoCard from '../components/Videocard';
import { fetchWatchLater } from '../slices/Watchlaterslice';

function WatchLater() {
  const dispatch = useDispatch();
  const watchLaterlist = useSelector((state) => state.watchLaterlist.videos);
  const status = useSelector((state) => state.watchLaterlist.status);

  useEffect(() => {
    dispatch(fetchWatchLater());
  }, [dispatch]);

  
  
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load videos</p>;
  }

  return (
    <div className="app">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          {watchLaterlist.length > 0 ? (
            watchLaterlist.map((video,index) => (
              <VideoCard key={`${video.id}-${index}`} data={video} />
            ))
          ) : (
            <p>No videos in Watch Later</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchLater;
