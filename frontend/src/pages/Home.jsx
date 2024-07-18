import React from 'react';
import MyCarousel from '../components/MyCarousel';
import '../assets/css/Home.css';

//import Contact from './Contact';
const Home = () => {
 
  const Speak=()=>{
    var text="Welcome i'm siva";
    var utterance=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
  return (
    <div id="section-home"  className="Home">
      <MyCarousel />
      <p className='intro'>Hi! I'm Siva</p>
      <div>
        <button className='bg-white' onClick={Speak}>Speak</button>
      </div>
     
        <div className='cont' style={{display:'flex',flexDirection:'row',}} >
          <p>i am </p>
          <img src='https://drive.google.com/file/d/1oder6ABTO-mnyvKz92Rabsw2y-Iy1Plg/view?usp=sharing'/>
        </div>
       
    
    
    </div>
  );
};

export default Home;
