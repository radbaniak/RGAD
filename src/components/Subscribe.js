import React from 'react';
import config from '../../config';


export default function Subscribe() {
	return (
		<section id="signup" className="signup-section">
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<h1>Sign Up</h1>
						<p>We offer various memberships, depending on age:</p>
						<form action="https://pay.gocardless.com/AL0005H72P8388" target="_blank" className="form-inline d-flex">
							<button style={{minWidth: "250px" }} id="membership" type="submit" className="btn btn-primary mx-auto btn-lg">
								Adult Membership
							</button>  
						</form>
					</div>
				</div>
			</div>
			<p></p>
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<form action="https://pay.gocardless.com/AL0004DSMESD4D" target="_blank" className="form-inline d-flex">
							<button style={{minWidth: "250px" }} id="membership" type="submit" className="btn btn-primary mx-auto">
								Teen: Age 15-16
							</button>
						</form>
					</div>
				</div>
			</div>
			<p></p>
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<form action="https://pay.gocardless.com/AL0004DSMESD4D" target="_blank" className="form-inline d-flex">
							<button style={{minWidth: "250px" }} id="membership" type="submit" className="btn btn-primary mx-auto">
								Kids: Age 4-15
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<h2>Trial Class</h2>
						<p>If you wish to organise a trial class, press the button below. Tell one of our instructors your level of experience, which discipline interests you, or any other queries.</p>
							<button onClick={() => window.location = 'mailto:rgadarlington@gmail.com'} style={{minWidth: "250px" }} id="membership" type="submit" className="btn btn-primary mx-auto">
								Book Your Trial Now
							</button>
					</div>
				</div>
			</div>
		</section>
		
	);
}
