
import { setCategory } from '../slices/appslice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import youtubeicon from '../assets/youtubeicon.jpg';
import voiceicon from '../assets/searchbyvoiceicon.png';
import creatoricon from '../assets/creatoricon.png';
import notificationicon from '../assets/notificationicon.png';
import pictureicon from '../assets/pictureicon.png';
import { useDispatch } from 'react-redux';
import { CiSearch } from 'react-icons/ci'; 

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRegister = () => {
    navigate('/register'); // Replace with your registration page route
  };

  const handleSignIn = () => {
    navigate('/signin'); // Replace with your sign-in page route
  };

  return (
    <div className="flex justify-between items-center p-1 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/11480/11480420.png"
          alt="menuicon"
          onClick={toggleSidebar}
        />
        <img
          className="h-6 w-15"
          src={youtubeicon}
          alt="youtubeicon"
        />
      </div>
      <div className="flex items-center flex-grow justify-center">
        <div className="flex w-[60%] items-center">
          <div className="flex w-[100%]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />
            <button
              onClick={searchVideo}
              className="py-2 border border-gray-400 rounded-r-full px-4"
            >
              <CiSearch size="24px" />
            </button>
          </div>
          <img
            className="w-5 h-5 ml-3 cursor-pointer"
            src={voiceicon}
            alt="voiceicon"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6 relative">
        <img
          className="w-6 h-6 cursor-pointer"
          src={creatoricon}
          alt="creatoricon"
        />
        <img
          className="w-5 h-5 cursor-pointer"
          src={notificationicon}
          alt="notificationicon"
        />
        <div className="relative">
          <img
            className="w-6 h-6 cursor-pointer"
            src={pictureicon}
            alt="pictureicon"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;




