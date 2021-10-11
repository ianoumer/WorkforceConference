import React, { Component } from "react";

class Program extends Component {
	render() {
		return (
			<section className='program'>
				<h2>What’s on for 2020</h2>
				<p>
					Upskill your team, meet the leaders in your industry, and propel your
					business to success. WorkCon2020 awaits you this July 2020!
				</p>
				<div className='row'>
					<div className='col-md-6'>
						<div className='row align-items-center justify-content-center'>
							<div className='col-xl-5'>
								<img
									src='https://marketing-assets.tanda.co/wp-content/uploads/20200212120045/keynotes-circle.png'
									alt=''
								/>
							</div>
							<div className='col-xl-7'>
								<h3>Keynotes</h3>
								<p>
									Learn from case studies of our high-profile speakers on hot
									topics such as workforce management, payroll and accounting,
									data management, cloud, AI, and many more.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='row align-items-center'>
							<div className='col-xl-5'>
								<img
									src='https://marketing-assets.tanda.co/wp-content/uploads/20200212120143/panel-groups-circle.png'
									alt=''
								/>
							</div>
							<div className='col-xl-7'>
								<h3>Panel groups and open forums</h3>
								<p>
									Discover disruptive tech trends that are changing customer
									behaviour and the way we do business. Whatever your industry,
									we’ve got a track for it at WorkCon.
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='row align-items-center'>
							<div className='col-xl-5 order-xl-2'>
								<img
									src='https://marketing-assets.tanda.co/wp-content/uploads/20200212120116/networking-circle.png'
									alt=''
								/>
							</div>
							<div className='col-xl-7 order-xl-1'>
								<h3>Extensive Networking Opportunities</h3>
								<p>
									WorkCon is where the business gets done. We’ll help you
									connect with the right people that are driven and focused -
									complete with live music and entertainment!
								</p>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='row align-items-center'>
							<div className='col-xl-5 order-xl-2'>
								<img
									src='https://marketing-assets.tanda.co/wp-content/uploads/20200212120019/exhibitors-circle.png'
									alt=''
								/>
							</div>
							<div className='col-xl-7 order-xl-1'>
								<h3>Interact with our Exhibitors</h3>
								<p>
									We foster lasting and reliable relationships with our sponsors
									and you’re sure to meet businesses that will help you give
									solutions to your business.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Program;
