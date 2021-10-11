import React, { Component } from "react";
import Countdown from 'react-countdown-now';

class CountdownSection extends Component {
  render() {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
      if(completed) {
        return (
          <div className="container">
            <h2>Conference is now live</h2>
            <div className="row">
              <div className="col-3">
                <p>{days}</p>
                <span>Days</span>
              </div>
              <div className="col-3">
                <p>{hours}</p>
                <span>Hours</span>
              </div>
              <div className="col-3">
                <p>{minutes}</p>
                <span>{window.innerWidth > 425 ? "Minutes" : "Mins"}</span>
              </div>
              <div className="col-3">
                <p>{seconds}</p>
                <span>{window.innerWidth > 425 ? "Seconds" : "Secs"}</span>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div id="countdown" className="container">
            <h2>The countdown has begun</h2>
            <div className="row">
              <div className="col-3">
                <p>{days}</p>
                <span>{days === 1 ? "Day" : "Days"}</span>
              </div>
              <div className="col-3">
                <p>{hours}</p>
                <span>{hours === 1 ? "Hour" : "Hours"}</span>
              </div>
              <div className="col-3">
                <p>{minutes}</p>
                {window.innerWidth > 425 ?  
                <span>{minutes === 1 ? "Minute" : "Minutes"}</span>
                : 
                <span>{minutes === 1 ? "Min" : "Mins"}</span>
                }
              </div>
              <div className="col-3">
                <p>{seconds}</p>
                {window.innerWidth > 425 ?
                  <span>{seconds === 1 ? "Second" : "Seconds"}</span>
                  :
                  <span>{seconds === 1 ? "Sec" : "Secs"}</span>
                }
              </div>
            </div>
          </div>
        );
      }
    };
    return (
      <section className="countdown">
        <Countdown date={new Date('2020-07-23T00:00:00')} renderer={renderer} />
        <div className="a-triangle"></div>
      </section>
    );
  }
}

export default CountdownSection;
