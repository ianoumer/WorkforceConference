import React, { Component} from "react";
import Slider from "react-slick";
import Modal from 'react-modal';

const gallery = [
  {
    category: "All Images",
    images: [
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102954/Talk-Sessions-50.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102943/Talk-Sessions-49.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102922/Talk-Sessions-46.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102904/Talk-Sessions-45.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102849/Talk-Sessions-43.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102833/Talk-Sessions-41.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102817/Talk-Sessions-37.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102802/Talk-Sessions-35.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102746/Talk-Sessions-34.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102730/Talk-Sessions-33.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102714/Talk-Sessions-30.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102658/Talk-Sessions-29.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102641/Talk-Sessions-28.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102625/Talk-Sessions-27.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102606/Talk-Sessions-26.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102549/Talk-Sessions-25.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102533/Talk-Sessions-24.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102513/Talk-Sessions-23.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102456/Talk-Sessions-22.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102435/Talk-Sessions-21.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102419/Talk-Sessions-20.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102403/Talk-Sessions-19.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102347/Talk-Sessions-18.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102329/Talk-Sessions-16.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102310/Talk-Sessions-14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102253/Talk-Sessions-13.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102234/Talk-Sessions-11.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102218/Talk-Sessions-10.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102200/Talk-Sessions-9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102144/Talk-Sessions-8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102125/Talk-Sessions-6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102108/Talk-Sessions-5.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102053/Talk-Sessions-4.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102032/Talk-Sessions-3.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213102015/Talk-Sessions-1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100652/Partners-_-Sponsors-17.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100632/Partners-_-Sponsors-16.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100612/Partners-_-Sponsors-14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100553/Partners-_-Sponsors-13.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100535/Partners-_-Sponsors-12.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100513/Partners-_-Sponsors-10.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100455/Partners-_-Sponsors-9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100438/Partners-_-Sponsors-8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100418/Partners-_-Sponsors-6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100358/Partners-_-Sponsors-5.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100340/Partners-_-Sponsors-4.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213100320/Partners-_-Sponsors-1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213085911/networking-and-socials-1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213085930/networking-and-socials-6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213085947/networking-and-socials-7.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090004/networking-and-socials-8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090024/networking-and-socials-9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090042/networking-and-socials-14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090205/networking-and-socials-16.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090315/networking-and-socials-17.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090335/networking-and-socials-22.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090352/networking-and-socials-24.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090411/networking-and-socials-29.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090431/networking-and-socials-31.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090451/networking-and-socials-33.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090511/networking-and-socials-34.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090529/networking-and-socials-38.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090549/networking-and-socials-40.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090610/networking-and-socials-41.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090628/networking-and-socials-45.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090651/networking-and-socials-46.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090710/networking-and-socials-47.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090727/networking-and-socials-48.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090744/networking-and-socials-50.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090759/networking-and-socials-51.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090816/networking-and-socials-52.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090833/networking-and-socials-53.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090850/networking-and-socials-54.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090907/networking-and-socials-55.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090924/networking-and-socials-56.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213090944/networking-and-socials-57.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213091000/networking-and-socials-58.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20200213091018/networking-and-socials-59.jpg"
    ]
  },
  {
    category: "Networking & Socials",
    images: [
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165200/networkingSocials1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165214/networkingSocials2.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165226/networkingSocials3.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165238/networkingSocials4.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165248/networkingSocials5.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165303/networkingSocials6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165315/networkingSocials7.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165327/networkingSocials8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165339/networkingSocials9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165352/networkingSocials10.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165404/networkingSocials11.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165415/networkingSocials12.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165427/networkingSocials13.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165438/networkingSocials14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165449/networkingSocials15.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165501/networkingSocials16.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165514/networkingSocials17.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165539/networkingSocials19.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165551/networkingSocials20.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165727/networkingSocials21.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165739/networkingSocials22.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165753/networkingSocials23.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165806/networkingSocials24.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165817/networkingSocials25.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165829/networkingSocials26.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165841/networkingSocials27.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165853/networkingSocials28.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165906/networkingSocials29.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165917/networkingSocials30.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165929/networkingSocials31.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165940/networkingSocials32.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829165950/networkingSocials33.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170002/networkingSocials34.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170013/networkingSocials35.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170026/networkingSocials36.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170038/networkingSocials37.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170050/networkingSocials38.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170103/networkingSocials39.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170114/networkingSocials40.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170125/networkingSocials41.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170135/networkingSocials42.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170146/networkingSocials43.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170157/networkingSocials44.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170207/networkingSocials45.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170219/networkingSocials46.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170230/networkingSocials47.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170242/networkingSocials48.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170253/networkingSocials49.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170305/networkingSocials50.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170318/networkingSocials51.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170340/networkingSocias52.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829170329/networkingSocials53.jpg"
    ]
  },
  {
    category: "Partners & Sponsors",
    images: [
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105247/partnerSponsor1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105300/partnerSponsor2.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105312/partnerSponsor3.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105324/partnerSponsor4.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105337/partnerSponsor5.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105348/partnerSponsor6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105400/partnerSponsor7.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105414/partnerSponsor8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105427/partnerSponsor9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105438/partnerSponsor10.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105557/partnerSponsor17.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105450/partnerSponsor11.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105501/partnerSponsor12.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105512/partnerSponsor13.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105524/partnerSponsor14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105536/partnerSponsor15.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190829105547/partnerSponsor16.jpg"
    ]
  },
  {
    category: "Talk Sessions",
    images: [
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163357/talkSession1.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163409/talkSession2.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163421/talkSession3.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163433/talkSession4.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163445/talkSession5.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163456/talkSession6.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163507/talkSession7.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163518/talkSession8.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163528/talkSession9.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163538/talkSession10.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163900/talkSession11.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163911/talkSession12.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163922/talkSession13.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163933/talkSession14.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163943/talkSession15.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828163954/talkSession16.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164005/talkSession17.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164015/talkSession18.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164026/talkSession19.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164035/talkSession20.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164813/talkSession21.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164825/talkSession22.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164836/talkSession23.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164846/talkSession24.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164857/talkSession25.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164908/talkSession26.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164920/talkSession27.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164932/talkSession28.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164943/talkSession29.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828164954/talkSession30.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165152/talkSession31.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165203/talkSession32.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165215/talkSession33.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165226/talkSession34.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165238/talkSession35.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165248/talkSession36.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165258/talkSession37.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165310/talkSession38.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165321/talkSession39.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165333/talkSession40.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165524/talkSession41.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165535/talkSession42.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165546/talkSession43.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165557/talkSession44.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165609/talkSession45.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165622/talkSession46.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165633/talkSession47.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165642/talkSession48.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165654/talkSession49.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165706/talkSession50.jpg",
      "https://marketing-assets.tanda.co/wp-content/uploads/20190828165717/talkSession51.jpg"
    ]
  }
];
class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      previewImage: "",
      activeGallery: 0
    };
  }

  toggle = gallery => {
    this.setState({
      activeGallery: gallery
    })
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  next = () => {
    let index = gallery[this.state.activeGallery].images.indexOf(this.state.previewImage);
    let updatedIndex;
    if(index < gallery[this.state.activeGallery].images.length-1){
      updatedIndex = gallery[this.state.activeGallery].images[index+1];
    } else {
      updatedIndex = gallery[this.state.activeGallery].images[0];
    }
    this.setState({
      previewImage: updatedIndex
    })
  }
  prev = () => {
    let index = gallery[this.state.activeGallery].images.indexOf(this.state.previewImage);
    let updatedIndex;
    if(index === 0){
      updatedIndex = gallery[this.state.activeGallery].images[gallery[this.state.activeGallery].images.length-1];
    } else {
      updatedIndex = gallery[this.state.activeGallery].images[index-1];
    }
    this.setState({
      previewImage: updatedIndex
    })
  }
  preview = (e) => {
    this.setState({
      modalIsOpen: true,
      previewImage: e.target.getAttribute("data-img")
    })
  }
  

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
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <SliderArrow to="left" position="&#8592; Prev" />,
      nextArrow: <SliderArrow to="right" position="Next &#8594;" />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };

    let array = gallery[this.state.activeGallery].images
    var i,j,temparray,chunk = 5, newArray = [];
    for(i = 0, j = array.length; i<j; i+= chunk){
      temparray = array.slice(i,i+chunk);
      newArray.push(temparray)
    }

    return (
      <section id="gallery" className="gallery">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          className="modal__content"
          overlayClassName="modal__overlay"
        >
          <button onClick={this.prev} className="modal__left">❮</button>
          <img src={this.state.previewImage} alt="images"/>
          <button onClick={this.next} className="modal__right">❯</button>
          <button onClick={this.closeModal} className="modal__close">✕</button>
        </Modal>

        <div className="container">
          <div className="heading">
            <img src="https://marketing-assets.tanda.co/wp-content/uploads/20191203105833/WSCon_colored-compressed.svg" alt=""/>
            <span>WSCon 2019 highlights</span>
            <h2 className="text-white">Moving people and businesses towards Workforce Success</h2>
          </div>
          {/* <ul className="gallery__tabs">
            {gallery.map((value, index) => {
              return (
                <li key={index} onClick={e => this.toggle(index)} className={`list-unstyled ${this.state.activeGallery === index ? 'active':''}`}>
                  {value.category}
                </li>
              );
            })}
          </ul> */}
        </div>

        <Slider {...settings}>
          {newArray.map((value, index) => {
            return  (
              <div key={index}> 
                <div className="gallery__wrapper">
                  <div onClick={e => this.preview(e)} data-img={value[0]} style={{backgroundImage: `url(${value[0]})`}} className={value[0] ? '' : 'invisible'}/>
                  <div onClick={e => this.preview(e)} data-img={value[1]} style={{backgroundImage: `url(${value[1]})`}} className={value[1] ? '' : 'invisible'}/>
                  <div onClick={e => this.preview(e)} data-img={value[2]} style={{backgroundImage: `url(${value[2]})`}} className={value[2] ? '' : 'invisible'}/>
                  <div onClick={e => this.preview(e)} data-img={value[3]} style={{backgroundImage: `url(${value[3]})`}} className={value[3] ? '' : 'invisible'}/>
                  <div onClick={e => this.preview(e)} data-img={value[4]} style={{backgroundImage: `url(${value[4]})`}} className={value[4] ? '' : 'invisible'}/>
                </div>
              </div>
            )
          })}
        </Slider>
        <span className="a-circle2 a-blue "></span>
      </section>
    );
  }
}

export default Gallery;
