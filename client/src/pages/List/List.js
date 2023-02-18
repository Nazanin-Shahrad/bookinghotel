import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import SearchItem from '../../components/SearchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
    // const [dates, setDates] = useState(null);
    const location = useLocation();
    const [openDate , setOpenDate] = useState(false)
    const [dates, setDates] = useState(location.state.dates);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [destination ,setDestination] = useState(location.state.destination);
    const {error , data , loading , reFetch} = useFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  
    console.log(location);
   console.log("data in list are ::::",data);

   const handleClick = () => {
    reFetch()
   }
   
  return (
    <div>
        <Navbar />
        <Header type="list"/>
        <div className="listContainer">
            <div className='listWrapper'>
                <div className='listSearch'>
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                    </div>
                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate , "MM/dd/yyyy")} to ${format(dates[0].endDate , "MM/dd/yyyy")}`}</span>
                       { openDate &&
                        <DateRange
                        onChange ={(item) => setDates[item.selection]}
                        minDate = {new Date()}
                        ranges = {dates} 
                        />
                       } 
                    </div>
                    <div className='lsItem'>
                        <label>Options</label>
                        <div className='lsOptions'>
                        <div className='lsOptionItem'>
                            <span className='lsOptionText'>Min Proce <small> per night</small></span>
                            <input type="number" className='lsOptionInput' onChange={(e) => setMin(e.target.value)}/>
                        </div>
                        <div className='lsOptionItem'>
                            <span className='lsOptionText'>Max Proce <small> per night</small></span>
                            <input type="number" className='lsOptionInput' onChange={(e) => setMax(e.target.value)}/>
                        </div>
                        <div className='lsOptionItem'>
                            <span className='lsOptionText'>Adult</span>
                            <input min={1} type="number" className='lsOptionInput' placeholder={options.adult}/>
                        </div>
                        <div className='lsOptionItem'>
                            <span className='lsOptionText'>Children</span>
                            <input min={0} type="number" className='lsOptionInput' placeholder={options.children}/>
                        </div>
                        <div className='lsOptionItem'>
                            <span className='lsOptionText'>Room</span>
                            <input min={1}  type="number" className='lsOptionInput' placeholder={options.room}/>
                        </div>

                        </div>
                       
                    </div>
                    <button onClick={handleClick}>Search</button>
                </div>
                <div className='listResult'>
                    {loading ? (
                        "loading" 
                        ) : (
                        <>
                        {data.map(item => (
                          <SearchItem item={item} key = {item._id}/>
                    ))}
                  </>
                )}  
                </div>
            </div>
        </div>

       
    </div>
   
    
  )
}

export default List