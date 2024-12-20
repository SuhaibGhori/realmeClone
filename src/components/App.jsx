import React from 'react'
import  './app.css'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import Banner from './Banner';
import About from './About';
import Accesories from './Accesories';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';  

 
 
 
const App = () => {
  return (
    <div> 
    <Header/>
   <Banner />
 <About />
 <Accesories />
 <Footer/>
    </div> )
}

export default App