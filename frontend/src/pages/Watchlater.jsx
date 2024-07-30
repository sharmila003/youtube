//import {  useNavigate } from 'react-router-dom';
import  { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch} from 'react-redux';
import VideoCard from '../components/Videocard';
import { fetchWatchLater } from '../slices/Watchlaterslice';
//import axios from 'axios';

function WatchLater() {
  const dispatch = useDispatch();
 // const  navigate=useNavigate();
  //const [singleVideo, setSingleVideo] = useState(null);
  const watchLaterlist = useSelector((state) => state.watchLaterlist.videos);
  const status = useSelector((state) => state.watchLaterlist.status);
  //const [showDropdown, setShowDropdown] = useState(false); 
  //const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Get authentication status from Redux store
 

  /*const addVideoToWatchLater = async (video) => {
    try {
      await axios.post('/api/watch-later', { videoId: video.id });
      console.log('Video added to Watch Later');
    } catch (error) {
      console.error('Error adding video to Watch Later', error);
    }
  };*/
  
  /*const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
    
  }, []);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  // In handleSaveToWatchLater function
  const handleSaveToWatchLater = () => {
    if (!isLoggedIn) {
      navigate('/signin'); // Redirect to sign-in page if not logged in
    } else {
      addVideoToWatchLater(singleVideo);
      setShowDropdown(false);
      navigate('/watch-later');
    }
  };
   
  // Example axios request with token included
// eslint-disable-next-line no-undef
axios.post('/api/watch-later', { videoId: video.id }, {
  withCredentials: true
});*/


  useEffect(() => {
    dispatch(fetchWatchLater());
  }, [dispatch]);

  useEffect(() => {
    console.log('WatchLaterlist:', watchLaterlist); // Add this line for debugging
  }, [watchLaterlist]);

  
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





