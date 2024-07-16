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


//import React from 'react';
import { useSelector } from 'react-redux';
import Videocard from '../components/Videocard';

const WatchLaterPage = () => {
  const watchLaterList = useSelector((state) => state.auth.watchLaterList);

  return (
    <div className="watch-later-page">
      <h1 className="text-xl font-bold mb-4">Watch Later</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchLaterList.map((videoId) => (
          <Videocard key={videoId} data={{ id: videoId }} />
        ))}
      </div>
    </div>
  );
};

export default WatchLaterPage;
