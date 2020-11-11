import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {listmenu,listCards} from './components/Lists'
import ProfilImage from './image/profil.jpg'
import Logo from './image/logo.png'
function App() {
  return (
    <React.Fragment>
      <Navbar logo={Logo} listItems={listmenu}/>
      <Home/>
      <About title="About" profilPhoto={ProfilImage}/>
      <Projects title="Projects" listCards={listCards} />
      <Contact title="Contact"/>
      <Footer/>
      </React.Fragment>
  
  );
}

export default App;
