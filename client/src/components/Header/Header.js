import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {faBed , faPlane ,faCar, faTaxi ,faCalendar,faPerson} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header'>
    <div className="headerContainer">
        <div className='headerList'>
            <div className='headerListItem  active'>
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>

            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
            </div>
        </div>
       
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDesc'>Get rewarded for your travels – unlock instant savings of 10% or
          more with a free Lamabooking account
        </p>
       <button className='headerBtn'>Sign in / Register</button> 
        <div className='headerSearch'>
        <div className='headerSearchItam'>
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text" placeholder='Where are you going?' className='headerSearchInput'  />
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
            <span className='headerSearchText' ></span>
       
         
        </div>
        <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
           <span className='headerSearchText'></span>
          <div className='options'>
            <div className='optionItem'>  
                    <span className='optionText'>Adult</span>
                    <div className='optionCounter'>
                        <button className='optionCounterButton' >-</button>
                        <span className='optionCounterNumber'></span>
                        <button className='optionCounterButton' >+</button>
                    </div>
            </div>
            <div className='optionItem'>  
                    <span className='optionText'>Children</span>
                    <div className='optionCounter'>
                        <button className='optionCounterButton' >-</button >
                        <span className='optionCounterNumber'></span>
                        <button className='optionCounterButton' >+</button>
                    </div>
            </div>
            <div className='optionItem'>  
                    <span className='optionText'>Room</span>
                    <div className='optionCounter'>
                        <button className='optionCounterButton' >-</button>
                        <span className='optionCounterNumber'></span>
                        <button className='optionCounterButton' >+</button>
                    </div>
            </div>
           </div>
        </div>
        <div className='headerSearchItem'>
            <button className='headerBtn' >Search</button>
        </div>



        </div>
     
       
    </div>
</div>
  )

  }

export default Header