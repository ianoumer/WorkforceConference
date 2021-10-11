import React, { Component } from "react";
import Slider from "react-slick";
import twitterLogo from "../images/twitter.svg";
class Tweets extends Component {
  constructor(props) {
    super(props);
    this.prevArrow = React.createRef();
    this.nextArrow = React.createRef();
    this.slider = React.createRef();
  }

  render() {
    const SliderArrow = props => {
      return (
        <button
          type="button"
          className={`arrows ${props.to}`}
          onClick={props.onClick}
          aria-label={props.to}
        >
          {props.position}
        </button>
      );
    };

    const settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      swipe: false,
      prevArrow: <SliderArrow to="left" position="&#8592;" />,
      nextArrow: <SliderArrow to="right" position="&#8594;" />,
      responsive: [
        {
          breakpoint: 1840,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1460,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <section className="tweets">
        <p className="text-white font-20px font-weight-bold text-right follow-us container">
          Follow us on Twitter{" "}
          <a href="https://twitter.com/tandahq" className="text-workcon">
            @tandahq
          </a>
        </p>
        <div className="twitter-card">
          <p className="text-white text-right font-weight-bold">
            Join the conversation
          </p>
          <p className="text-white font-20px font-weight-bold text-right follow-us">
            Follow us on Twitter{" "}
            <a href="https://twitter.com/tandahq">@tandahq</a>
          </p>
          <img src={twitterLogo} alt="twitter icon" />
        </div>
        <Slider {...settings} ref={this.slider}>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                &quot;It&#39;s more important than ever before for workers to be
                experts at opportunity seeking, networking and contact
                building.&quot; Discussing{" "}
                <a href="https://twitter.com/hashtag/microtribes?src=hash&amp;ref_src=twsrc%5Etfw">
                  #microtribes
                </a>{" "}
                with Peta Ellis, CEO of{" "}
                <a href="https://twitter.com/RiverCityLabs?ref_src=twsrc%5Etfw">
                  @RiverCityLabs
                </a>{" "}
                <a href="https://twitter.com/hashtag/WSCon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #WSCon2019
                </a>{" "}
                <a href="https://t.co/0mNMhs8lA3">pic.twitter.com/0mNMhs8lA3</a>
              </p>
              &mdash; WorkingMouse (@WorkingMouse_){" "}
              <a href="https://twitter.com/WorkingMouse_/status/1154575930158796800?ref_src=twsrc%5Etfw">
                July 26, 2019
              </a>
            </blockquote>
          </div>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                Team{" "}
                <a href="https://twitter.com/BDOAustralia?ref_src=twsrc%5Etfw">
                  @BDOAustralia
                </a>{" "}
                checking out the{" "}
                <a href="https://twitter.com/hashtag/WSCon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #WSCon2019
                </a>{" "}
                <a href="https://twitter.com/TandaHQ?ref_src=twsrc%5Etfw">
                  @TandaHQ
                </a>{" "}
                Next up the king of Coffee on personal and business success -
                Phil Di Bella ☕️✅😎{" "}
                <a href="https://t.co/uK3JDxdj6b">pic.twitter.com/uK3JDxdj6b</a>
              </p>
              &mdash; Naomi Lynn 🦁 (@miss_nay_){" "}
              <a href="https://twitter.com/miss_nay_/status/1154556126278516736?ref_src=twsrc%5Etfw">
                July 26, 2019
              </a>
            </blockquote>
          </div>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                The Epos Systems Team got to attend one of the best organised
                conferences of 2019, with speakers in retail, hospo, software,
                HR &amp; Marketing all sharing an abundance of information to
                assist in businesses sharpen their skills! Big thank you to{" "}
                <a href="https://twitter.com/TandaHQ?ref_src=twsrc%5Etfw">
                  @TandaHQ
                </a>{" "}
                for the invite
                <a href="https://twitter.com/hashtag/WSCon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #WSCon2019
                </a>{" "}
                <a href="https://t.co/ESJA7Afk7y">pic.twitter.com/ESJA7Afk7y</a>
              </p>
              &mdash; Epos Systems (@EposSystems_au){" "}
              <a href="https://twitter.com/EposSystems_au/status/1155677124805533697?ref_src=twsrc%5Etfw">
                July 29, 2019
              </a>
            </blockquote>
          </div>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                Why should someone follow you?
                <a href="https://twitter.com/TandaHQ?ref_src=twsrc%5Etfw">
                  @TandaHQ
                </a>{" "}
                <a href="https://twitter.com/hashtag/WSCon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #WSCon2019
                </a>{" "}
                <a href="https://t.co/5rHBQbX46e">pic.twitter.com/5rHBQbX46e</a>
              </p>
              &mdash; Heather Smith (@HeatherSmithAU){" "}
              <a href="https://twitter.com/HeatherSmithAU/status/1154642307766816773?ref_src=twsrc%5Etfw">
                July 26, 2019
              </a>
            </blockquote>
          </div>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                Illuminating and goosebump-inducing talk on compliance from{" "}
                <a href="https://twitter.com/KateCarnellAus?ref_src=twsrc%5Etfw">
                  @KateCarnellAus
                </a>{" "}
                the same rules apply to all Aus businesses, R&amp;D is such a
                grey area for platform businesses.{" "}
                <a href="https://twitter.com/hashtag/startupaus?src=hash&amp;ref_src=twsrc%5Etfw">
                  #startupaus
                </a>{" "}
                <a href="https://twitter.com/hashtag/wscon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #wscon2019
                </a>{" "}
                <a href="https://t.co/L7rQUtBexV">pic.twitter.com/L7rQUtBexV</a>
              </p>
              &mdash; Indi Tansey (@indiana_june){" "}
              <a href="https://twitter.com/indiana_june/status/1154541218447032320?ref_src=twsrc%5Etfw">
                July 25, 2019
              </a>
            </blockquote>
          </div>
          <div>
            <blockquote
              className="twitter-tweet"
              data-width="350"
              data-height="286"
            >
              <p lang="en" dir="ltr">
                Experts{" "}
                <a href="https://twitter.com/elliotspirrett1?ref_src=twsrc%5Etfw">
                  @elliotspirrett1
                </a>
                ,{" "}
                <a href="https://twitter.com/reianna?ref_src=twsrc%5Etfw">
                  @reianna
                </a>
                , Jason Daniels and{" "}
                <a href="https://twitter.com/HeatherSmithAU?ref_src=twsrc%5Etfw">
                  @HeatherSmithAU
                </a>{" "}
                talked all things Payroll at the{" "}
                <a href="https://twitter.com/hashtag/WScon2019?src=hash&amp;ref_src=twsrc%5Etfw">
                  #WScon2019
                </a>{" "}
                panel discussion. They shared some practical do&#39;s and
                don&#39;ts that all businesses can take on board and highlighted
                the importance of getting{" "}
                <a href="https://twitter.com/hashtag/payroll?src=hash&amp;ref_src=twsrc%5Etfw">
                  #payroll
                </a>{" "}
                right!{" "}
                <a href="https://t.co/Hpr5q1cYSa">pic.twitter.com/Hpr5q1cYSa</a>
              </p>
              &mdash; Aurion (@AurionHRIS){" "}
              <a href="https://twitter.com/AurionHRIS/status/1154647183095787521?ref_src=twsrc%5Etfw">
                July 26, 2019
              </a>
            </blockquote>
          </div>
        </Slider>
      </section>
    );
  }
}

export default Tweets;
