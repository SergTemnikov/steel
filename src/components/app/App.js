import React from 'react'
import {Route} from 'react-router-dom'
import PageHome from '../../pages/page-home'
import PageAbout from '../../pages/page-about'
import Header from '../../components/header'
import './App.scss'
import PageAudio from '../../pages/page-audio'
import PageContacts from '../../pages/page-contacts'

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        
        <div className='contentWrapper'>
          <div className='header'>
            <Header/>
          </div>
          <div className='content'>
            <Route path='/home' component={PageHome}/>
            <Route path='/about' component={PageAbout}/>
            <Route path='/audio' component={PageAudio}/>
            <Route path='/contacts' component={PageContacts}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App