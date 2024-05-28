import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import {About} from "./Components/About";
import {Services} from "./Components/Services";
import {Contact} from "./Components/Contact";
import {Blog} from "./Components/Blog";
import { Home } from './Components/Home';
import {Login } from "./Components/Login"
import {Signup} from "./Components/Signup";
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-[100vh]'>
    <Routes>        
      <Route path="/" element={<Home/>}/>
      <Route path="/services"  element={<Services />}/>
      <Route path="/blog"  element={<Blog/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signup"  element={<Signup/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;

