import React from "react";
import "./App.css";
import Header from "./Components/header";
import Countdown from "./Components/countdown";
import Speakers from "./Components/speakers";
import Sponsors from "./Components/sponsors";
import Testimonials from "./Components/testimonials";
// import Videos from "./Components/videos";
import Program from "./Components/program";
import Tweets from "./Components/tweets";
import Gallery from "./Components/gallery";
import CTA from "./Components/cta";
import Nav from "./Components/nav";

function App() {
	return (
		<div className='workcon'>
			<Nav />
			<Header />
			<Countdown />
			<Testimonials />
			<Speakers />
			{/* <Videos /> */}
			<Program />
			<Sponsors />
			<Gallery />
			<Testimonials theme='blue' />
			<Tweets />
			<CTA />
		</div>
	);
}

export default App;
