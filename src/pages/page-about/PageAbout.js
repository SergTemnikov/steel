import React from 'react'
import './PageAbout.scss'
import Kolyan from '../../images/Kolyan.jpg'
import Serg from '../../images/Serg2.jpg'

const PageAbout = () => {
  return (
    <div className='about'>
      <h1>S T E E L</h1>
      <div className='about__vocal'>
        <img src={Kolyan}/>
        <p>I'm an amateur musician from Siberia, rock songwriter, composer, singer and guitarist. This channel belongs to my band 'Steel', my friends, our songs and performances.</p>
      </div>
      <div className='about__sound'>
        <p>I'm just a kind of amateur sound engineer who loves to sing, write songs and make fine records of all of that! Earlier, If I wouldn't have a music in my life, I could really go slightly mad!</p>
        <img src={Serg}/>
      </div>
      
    </div>
  )
}

export default PageAbout