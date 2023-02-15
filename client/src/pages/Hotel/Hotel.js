import React, { useState } from 'react';
import './hotel.css';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Hotel = () => {
  const [slideNumber ,setSlideNumber] = useState(0)
  const [open ,setOpen] = useState(false)




  const photos = [
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      },
    ];

    const handleOpen = (index) => {
    setSlideNumber(index)
    setOpen(true)

    }

    const handleMove =(direction) => {
      let newSlideNumber ;
      if(direction === "l"){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
      }else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
      }
      setSlideNumber(newSlideNumber);
      }



  return (
    <div>
    <Navbar />

    <Header type="list" />
    <div className='hotelContainer'>
 
      {open && <div className='slider'>
        <FontAwesomeIcon icon= {faCircleXmark} className="close" onClick={() => setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
        <div className='sliderWrapper' >
          <img className='sliderImg' src={photos[slideNumber].src}  alt=""/>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick = {() => handleMove("r")}/>
      </div>
   }
      <div className='hotelWrapper'>
        <button className='bookNow'>Reserve or Book Now !</button>
        <h1 className='hotelTitle'>Grand Hotel</h1>
        <div className='hotelAddress'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span></span>
        </div>
        <span className='hotelDistance'>
          Excellent location - 500m from center
        </span>
        <span className='hotelPriceHighlight'>
          
        </span>
        <div className='hotelImages'>
          {photos.map((photo,index) => (
            <div className='hotelImgWrapper'>
            <img onClick={() => handleOpen(index)} src={photo.src} alt="" className='hotelImg' />
          </div>
          ))}
         
            
         
        </div>
        <div className='hotelDetails'>
          <div className='hotelDetailsTexts'>
            <h1 className='hotelTitle'> Stay in the heart of city</h1>
            <p className='hotelDesc'>
            sleepy pearling village just 50 years ago, Dubai has risen from the sand dunes to become one of the world’s most dynamic travel destinations. Blending coastal cool with big-city vibes, the jewel of the United Arab Emirates lures tourists with year-round sunshine and record-breaking attractions like the world’s tallest building and the largest waterpark on Earth.
            Dubai’s dining scene is a celebration of cultures and cuisines–200-plus nationalities call the emirate home–offering everything from Middle Eastern street food to Michelin-starred fine dining.

Dubai’s hotels are equally diverse. Sun-seeking couples and families favor the seaside resorts along Jumeirah Beach and Palm Jumeirah, the man-made palm-shaped island that’s visible from space. For business travelers, a roll call of luxury hotels can be found in the heart of the fast-paced city, the Dubai International Financial Center or DIFC. From a high-end beach resort to an artsy retreat down an historic alleyway, here are the 10 best hotels in Dubai.
            </p>

          </div>
          <div className='hotelDetailsPrice'>
            <h1>Perfect for 6-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an excellent location score of 9.8!
            </span>
            <h2>
              <b></b> (6 - nights)
            </h2>
            <button >Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  
  
  </div>
  )
}

export default Hotel