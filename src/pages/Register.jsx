
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../slices/UserAuth'; // Import signUp function from Firebase auth
import { saveUserData } from '../Firestore';
import googleIcon from '../assets/googleicon.png'; // Update the path to your Google icon image
import facebookIcon from '../assets/facebookicon.png'; // Update the path to your Facebook icon image
import appleIcon from '../assets/appleicon.png'; // Update the path to your Apple icon image

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation or additional checks here if needed

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        phoneNumber,
        emailId,
        password
      });

      console.log("User registered with ID: ", docRef.id);
      const user = await signUp(emailId, password);

      // Optionally, you can save additional user details to Firestore or another database
      // Replace this with your own logic to save user details
      saveUserData({
        name,
        phoneNumber,
        emailId,
        
      });

      // Reset form fields
      setName('');
      setPhoneNumber('');
      setEmailId('');
      setPassword('');
      setConfirmPassword('');
      console.log('User registered:', user);
      alert('Registration successful!');
      navigate("/"); // Redirect to homepage after successful registration
    } catch (error) {
      console.error('Error registering:', error.message);
      alert('Error registering: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Left Side Image (adjust based on your design) */}
      {/* Uncomment and adjust as per your design requirements */}
      {/* <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${register})` }}></div> */}

      {/* Right Side Content */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:w-1/2">
        <h2 className="text-2xl mb-6 text-center">Register</h2>
        <p className="text-gray-600 mb-6 text-center">Enter your details below</p>
        
        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full p-2 border rounded"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="emailId">
              Email ID
            </label>
            <input
              type="email"
              id="emailId"
              className="w-full p-2 border rounded"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>

        <div className="my-4 text-center">
          <p>Already have an account? <Link to="/signin" className="text-blue-500 hover:text-blue-700">Sign in</Link></p>
        </div> 

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-around">
          <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
            <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
            <span className="text-sm"> Google</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
            <span className="text-sm"> Facebook</span>
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
            <img src={appleIcon} alt="Apple" className="w-6 h-6 mr-2" />
            <span className="text-sm"> Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
