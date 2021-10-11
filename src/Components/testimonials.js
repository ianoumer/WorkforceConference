import React, { Component } from "react";
import Slider from "react-slick";

class Testimonials extends Component {
  render() {
    const SliderArrow = props => {
      return (
        <button type="button" className={`arrows ${props.to}`} onClick={props.onClick} aria-label={props.to}>
          {props.position}
        </button>
      );
    };

    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SliderArrow to="left" position="&#8592;" />,
      nextArrow: <SliderArrow to="right" position="&#8594;" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows:false
          }
        }
      ]
    };

    return (
      <section className={`testimonials ${this.props.theme}`}>
        <h2>Audience Testimonials</h2>
        {this.props.theme ? (
          <Slider {...settings}>
            <div>
              <div className="container">
                <blockquote>
                  Being here to support Tanda does push the message that we work
                  together really well.
                </blockquote>
                <img src="" alt="" />
                <p>Elliott Spirrett</p>
                <p>Ecosystem Partner Manager - Small Business, Xero</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  I really enjoyed listening to Steve [Baxter] and his ideas on
                  team building. A lot of good things there.
                </blockquote>
                <img src="" alt="" />
                <p>Nick Braban</p>
                <p>
                  General Manager, Celissa Group (The Met Brisbane, Beirne Lane)
                </p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  [I saw] inspirational leaders talking about what they’re
                  passionate about — which is empowering others.
                </blockquote>
                <img src="" alt="" />
                <p>Zamil Solanki</p>
                <p>Co-founder and Director, Innovative Pharmacy Group</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  You’ve got to get the basics right first. Empower your staff,
                  empower your crew.
                </blockquote>
                <img src="" alt="" />
                <p>Steve Baxter</p>
                <p>CEO, Transition Level Investments</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  It’s an opportunity to see what's happening in the workforce
                  space. We like to keep ahead of the technology, and understand
                  what’s happening in the marketplace.
                </blockquote>
                <img src="" alt="" />
                <p>Cassandra Scott</p>
                <p>Director, Laurus Bookkeeping</p>
              </div>
            </div>
          </Slider>
        ) : (
          <Slider {...settings}>
            <div>
              <div className="container">
                <blockquote>
                  Tanda is a great product and is going places. It’s an absolute
                  pleasure to be involved in the [Workforce Success] conference.
                </blockquote>
                <img src="" alt="" />
                <p>Reianna Vercoe</p>
                <p>Product & Marketing Manager, Aurion People & Payroll</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  Look out world this Brisbane-based company is engineering
                  capacity to build cool stuff with workforce data!
                  #futureofwork
                </blockquote>
                <img src="" alt="" />
                <p>Indi Tansey</p>
                <p>Co-founder - Codebots</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  Today has been an incredible experience. Thoroughly enjoyed
                  each and every speaker. You guys have absolutely rocked it
                </blockquote>
                <img src="" alt="" />
                <p>Ashleigh Scrieber</p>
                <p>Gindaja Treatment & Healing Indigenous Corporation</p>
              </div>
            </div>

            <div>
              <div className="container">
                <blockquote>
                  Thank you so much for a fantastic and informative day. The
                  Tanda Team were very welcome and the day was incredibly well
                  run with valuable speakers
                </blockquote>
                <img src="" alt="" />
                <p>Sarah Leadbeater</p>
                <p>Peppermint</p>
              </div>
            </div>
          </Slider>
        )}
      </section>
    );
  }
}

export default Testimonials;
