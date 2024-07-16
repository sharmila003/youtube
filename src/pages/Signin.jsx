
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import { initializeApp } from 'firebase/app';
import { auth } from '../firebase';
import signin from '../assets/register.jpg';
import googleIcon from '../assets/googleicon.png';
import facebookIcon from '../assets/facebookicon.png';
import appleIcon from '../assets/appleicon.png';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
      navigate('/'); // Redirect to home page or desired route
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorCode, errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${signin})` }}></div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-center mb-4">YouTube</h1>
          <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back</h2>
          <p className="mb-4 text-center">Enter your details below</p>
          {error && (
            <div className="mb-4 p-2 bg-red-200 text-red-800 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </form>
          <div className="my-4 text-center">
            <p>Dont have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link></p>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-around">
            <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
              <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
              <span className="text-sm">Google</span>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
              <span className="text-sm">Facebook</span>
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded p-2 hover:bg-gray-100 focus:outline-none">
              <img src={appleIcon} alt="Apple" className="w-6 h-6 mr-2" />
              <span className="text-sm">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

