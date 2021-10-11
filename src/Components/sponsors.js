import React, { Component } from "react";

class Sponsors extends Component {
  render() {
    const sponsors = [
        {
          company: "Aurion",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165101/aurion-logo1.png",
            alt: ""
          }
        },
        {
          company: "Xero",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165151/xero-logo2.png",
            alt: ""
          }
        },
        {
          company: "BDO",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165109/bdo-logo.png",
            alt: ""
          },
          size: "small"
        },
        {
          company: "Flare",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165115/flare-logo.png",
            alt: ""
          }
        },
        {
          company: "SilverChef",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190731161052/silverchef-logo1.png",
            alt: ""
          }
        },
        {
          company: "Smart Workforce Management",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165131/smart-workfore-management-logo.png",
            alt: ""
          }
        },
        {
          company: "Soul Origin",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165137/soul-origin-logo.png",
            alt: ""
          }
        },
        {
          company: "Roses Only",
          link:"",
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20191205084741/roses_only.png",
            alt: ""
          }
        },
        {
          company: "Workplace by Facebook",
          link:"",
          status: 1,
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165144/workplace-by-facebook-logo.png",
            alt: ""
          }
        },
        {
          company: "Sidekicker",
          link:"",
          status: 1,
          img: {
            src: "https://marketing-assets.tanda.co/wp-content/uploads/20190723165123/sidekicker-logo.png",
            alt: ""
          }
        }
      ];
      const mail = () => {
        window.location = "mailto:janine@tanda.co?subject=I'd like to learn more about being a sponsor.";
      }
    return (
      <section id="sponsors" className="sponsors">
        <div className="container">
            <h2>Previous Sponsors</h2>
            <div className="row justify-content-center">
            {sponsors.map((sponsor, index) => {
              return (
                <div key={index} className={`col-6 ${index > 2  && index < 7 ? 'col-sm-3' : 'col-sm-4'} ${sponsor.status ? 'inactive' : ''}`}>
                    <img src={sponsor.img.src} alt={sponsor.img.alt} className={sponsor.size === 'small' ? 'small' : ''}/>
                    {
                      sponsor.status ? 
                      <p className="text-center">(2019)</p> : 
                      ''
                    }
                </div>
              );
            })}
            </div>
            <div className="text-center">
              <button onClick={mail} className="btn">LEARN ABOUT BEING A SPONSOR</button>
            </div>
        </div>
        <span className="a-square1 a-blue "></span>
        <span className="a-square2 a-blue "></span>
      </section>
    );
  }
}

export default Sponsors;
