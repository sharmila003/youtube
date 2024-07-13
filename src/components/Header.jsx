
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import youtubeicon from '../assets/youtubeicon.jpg';
import voiceicon from '../assets/searchbyvoiceicon.png';
import creatoricon from '../assets/creatoricon.png';
import notificationicon from '../assets/notificationicon.png';
import pictureicon from '../assets/pictureicon.png';


function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

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
        <div className="relative flex items-center w-full max-w-xl">
          <input
            type="text"
            className="p-2 border h-10 w-full rounded-l-full pr-5 pl-5"
            placeholder="Search"
          />
          <button className="absolute right-0 top-0 h-10 px-4 bg-gray-100 border-l rounded-r-full">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m-3.15-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <img
          className="w-5 h-5 ml-3 cursor-pointer"
          src={voiceicon}
          alt="voiceicon"
        />
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
