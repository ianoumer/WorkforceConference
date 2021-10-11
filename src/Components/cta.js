import React, { Component} from "react";

class CTA extends Component {

  register = () => {
    window.open('https://www.eventbrite.com.au/e/workforce-conference-2020-tickets-81421135809')
  }

  render() {
    return (
        <section className="cta">
            <div className="text-center text-white mt-5">
              <small>Follow us on social media</small>
              <p className="hashtag">#WorkforceConference</p>
            </div>
            <div className="d-flex container socials justify-content-center">
              <a rel="noopener noreferrer" href="https://www.facebook.com/TandaHQ/" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a rel="noopener noreferrer" href="https://www.instagram.com/tandahq/" target="_blank"> 
                <i className="fa fa-instagram"></i>
              </a>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/company/tandahq" target="_blank"> 
                <i className="fa fa-linkedin"></i>
              </a>
              <a rel="noopener noreferrer" href="https://twitter.com/TandaHQ" target="_blank"> 
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="container">
                <h2>Early Bird registration is now open!</h2>
                <p>Grab discounted tickets while they last</p>
                <button onClick={this.register} className="btn">Register Now</button>
            </div>

            <div className="bush">
              <img alt="" src="https://marketing-assets.tanda.co/wp-content/uploads/20200212165732/bushfire-relief-icon.svg"/>
              <strong>Workforce for Bushfire Relief</strong>
              <p>50% of early bird sales will be donated to bushfire relief efforts</p>
            </div>
            <span className="bg"></span>
            <span className="teal"></span>
        </section>
    );
  }
}

export default CTA;
