import React, { Component, Fragment } from "react";

class Header extends Component {
  register = () => {
    window.open('https://www.eventbrite.com.au/e/workforce-conference-2020-tickets-81421135809')
  }
  render() {
    return (
      <Fragment>
        <header className="text-center">
          <div>
            <div className="container">
              <img
                src="https://marketing-assets.tanda.co/wp-content/uploads/20191203103440/workcon2020-logo-dark.svg"
                alt=""
              />
              <h1>The Future is Now</h1>
              <div className="row setting">
                <div className="col-md-6  d-flex align-items-center">
                  <img
                    className="icon"
                    src="https://marketing-assets.tanda.co/wp-content/uploads/20191203093855/calendar_today-24px.svg"
                    alt=""
                  />
                  <span className="break">|</span>
                  <div className="d-flex flex-column date">
                    <span>JUL</span>
                    <span>23</span>
                  </div>
                  <span className="break">|</span>
                  <span className="day">Thu</span>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <img
                    src="https://marketing-assets.tanda.co/wp-content/uploads/20191203093849/venue-24px.svg"
                    alt=""
                  />
                  <span className="break">|</span>
                  <span className="location">
                    Brisbane Convention & Exhibition Centre
                  </span>
                </div>
              </div>
              <button onClick={this.register} className="btn">
                REGISTER NOW
              </button>
              <span>
                <strong>Early Bird</strong> tickets are now
                available!
              </span>
            </div>
          </div>
          <video autoPlay muted loop>
            <source
              src="https://marketing-assets.tanda.co/wp-content/uploads/20190813152638/WSCON-Web-Highlight.mp4"
              type="video/mp4"
            />
          </video>
          <a href="#countdown" className="arrow__down">
            &darr;
          </a>
        </header>
        {/* <span className="a-circle a-blue "></span> */}
      </Fragment>
    );
  }
}

export default Header;
