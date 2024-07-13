import  Header  from  './components/Header'
//import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import  SignIn  from "./pages/Signin";
import  Register  from "./pages/Register";
import  Watch   from './pages/Watch';

function App() {
  return (
    <div> 
      <Header/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/register" element={<Register />} />
         <Route path="/watch/:videoId" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;




