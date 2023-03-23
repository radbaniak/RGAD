import React from 'react';
import config from '../../config';


export default function Subscribe() {
	return (
		<section id="signup" className="signup-section">
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<h2>Membership</h2>
						<script src="https://secure.clubmanagercentral.com/Portal/d5e6b88b-9f4c-491a-9274-09254872e5ce/Home/clubmanager-integration.js"></script><iframe width="100%" height="800" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://secure.clubmanagercentral.com/d5e6b88b-9f4c-491a-9274-09254872e5ce/Joining.mvc?showLogo=true&showBook=true&"></iframe>
					</div>
				</div>
			</div>
			<p></p>
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
					</div>
				</div>
			</div>
			<p></p>
			<div className="container">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">

					</div>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row">
					<div className="col-md-10 col-lg-8 mx-auto text-center">
						<h2>Free Trial Class</h2>
						<p>If you wish to organise a trial class, press the button below. Tell one of our instructors your level of experience, which discipline interests you, and any other queries. First class is free! </p>
							<button onClick={() => window.location = 'mailto:rgadarlington@gmail.com?subject=Free Trial Class&body=Hello,'} style={{minWidth: "250px" }} id="membership" type="submit" className="btn btn-primary mx-auto">
								Book Your Free Trial Now
							</button>
					</div>
				</div>
			</div>
		</section>
		
	);
}
