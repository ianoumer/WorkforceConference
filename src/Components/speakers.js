import React, { Component } from "react";

class Speakers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
  }

  toggle = index => {
    this.setState({
      active: index
    })
  }


  render() {
    // const speakers = [
    //   {
    //     name: "Steve Baxter",
    //     position: "Tech entrepreneur and investor",
    //     company: {
    //       url: "",
    //       name: ""
    //     },
    //     img: {
    //       src:
    //         "https://marketing-assets.tanda.co/wp-content/uploads/20191213113102/stev-baxter-2020.jpg",
    //       alt: "steve baxter"
    //     },
    //     social: {
    //       twitter:"https://twitter.com/sbxr",
    //       facebook:"",
    //       linkedin:"",
    //       website:"https://www.stevebaxter.com.au/"
    //     }
    //   },
    //   {
    //     name: "",
    //     position: "Nominate a Speaker",
    //     company: {
    //       url: "",
    //       name: ""
    //     },
    //     img: {
    //       src:
    //         "https://marketing-assets.tanda.co/wp-content/uploads/20191217143602/profile-silhouette.svg",
    //       alt: "profile"
    //     },
    //     social: {
    //     }
    //   }
    // ];

    const mail = () => {
      window.location =
        "mailto:janine@tanda.co?subject=I'd like to nominate as a speaker.";
    };
    return (
      <section id="speakers" className="speakers">
        <span className="a-square a-blue "></span>
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img alt="Steve Baxter" src="https://marketing-assets.tanda.co/wp-content/uploads/20200210115140/speakers-steve-baxter.png"/>
              <span></span>
            </div>
            <div className="col-md-6 order-md-1">
              <h2>2020 Speakers</h2>
              <p>Learn from the experts to bring you innovative content on how to grow your business where technology is the enabler!</p>
              <button onClick={mail} className="btn btn-sponsor">
                NOMINATE A SPEAKER
              </button>
            </div>
          </div>
         
          {/* <div className="row justify-content-center">
            {speakers.map((speaker, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className={`d-flex position-relative ${speaker.position === "Nominate a Speaker" ? "default" : "" }`}>
                    <img src={speaker.img.src} alt={speaker.img.alt} />
                    <div className="d-flex flex-column">
                      <p className="name">{speaker.name}</p>
                      <p className="position">{speaker.position}</p>
                      {speaker.company.url && speaker.company.name  ? (
                        <a
                          href={speaker.company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p className="company">{speaker.company.name}</p>
                        </a>
                      ) : (
                        <p className="company">{speaker.company.name}</p>
                      )}
                    </div>
                    {!speaker.social.twitter && !speaker.social.facebook && !speaker.social.linkedin && !speaker.social.website ? "" :
                    <Fragment>
                    <button className="menu" onClick={ e => this.toggle(index)}>
                      <img src="https://marketing-assets.tanda.co/wp-content/uploads/20191213121219/more.svg" alt="menu"/>
                    </button>
                    <div className={`socials ${this.state.active === index ? "d-flex" : "d-none"} `}>
                        <span onClick={e => this.toggle(-1)} className="social__close">×</span>
                        {speaker.social.twitter ? <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" >
                        <i className="fa fa-twitter"></i>
                          </a> : ""}
                        {speaker.social.facebook ? <a href={speaker.social.facebook} target="_blank" rel="noopener noreferrer" >
                        <i className="fa fa-facebook"></i>
                          </a> : ""}
                        {speaker.social.linkedin ? <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" >
                        <i className="fa fa-linkedin"></i>
                          </a> : ""}
                        {speaker.social.website ? <a href={speaker.social.website} target="_blank" rel="noopener noreferrer" >
                        <i className="fa fa-globe"></i>
                          </a> : ""}
                    </div>
                    </Fragment>
                    }
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    );
  }
}

export default Speakers;
