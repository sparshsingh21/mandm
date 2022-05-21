import React, { useEffect, useState } from 'react';
import Confetti from "react-confetti";
import { Link } from 'react-router-dom';
import About from './About'

const Countdown = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    useEffect(() => {
        let countdownDate = Date.parse("June 01, 2022 00:00:00");
        let x = setInterval(function () {
            let now = new Date(Date.parse(Date()));
            let distance = countdownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(distance % (1000 * 60) / 1000);
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
    }, []);
    return (
    <>
        <Confetti/>
        <div className="overlay"></div>
 <div className="wrapper">
   <div className="">
     <h1 className="title"><span></span>Mad Masquerade COUNTDOWN</h1>
     <div className="countdown-container">
       <div>
         <p id="days" className="big-text">{days}</p>
         <span>Days</span>
       </div>
       <div>
        <p id="hours" className="big-text">{hours}</p>
        <span>Hours</span>
      </div>
      <div>
        <p id="min" className="big-text">{minutes}</p>
        <span>Min</span>
      </div>
      <div>
        <p id="sec" className="big-text">{seconds}</p>
        <span>Sec</span>
      </div>
     </div>
   </div>
   <div className='buttonsec'>
   <button className='btn'><Link to='/login'>Login</Link></button>
   <button className='btn'><Link to='/login'>About</Link></button></div>
 </div>
 </>

    )
}

export default Countdown