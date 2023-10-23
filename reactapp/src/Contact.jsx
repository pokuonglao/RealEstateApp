import './Contact.css';
import SignupFooter from './SignupFooter';

const Contact = () => {
	return (
		<>
		<main id="contact-chris" className="section white minfull active">
			<div id="main-content" className="wrapper center">
				<header><h1 className="screen-reader-text">Contact Chris Cortazzo</h1></header>
				<div className="content card_container">
					<div className="card user_card" data-tags="Chris Cortazzo">
						<span className="wrapper card_content">
							<span className="user_image thumb"><span className="image_container"><span role="img" aria-label="Chris Cortazzo" data-lazy="https://media.listquicker.com/users/cortazzo/4-5d782476c0bec-350x350.webp" className="loaded"><img src="../image/profile_pic.jpg" alt="Chris Cortazzo"></img></span></span></span>
							<span className="user_details">
								<span className="user_name">Chris Cortazzo</span>
								<span className="user_contact"><span className="user_phone">(310) 457-3995</span><a href="mailto:chris@chriscortazzo.com" className="user_email">chris@chriscortazzo.com</a></span>
								<span className="user_license">DRE# 01190363</span>
							</span>
						</span>
					</div></div>
				<div id="contact-form" className="form_container contact_form" data-listid="2010830637" data-user="5,8">
					<div className="form_response message"></div>
					<div className="form_group">
						<div className="form_item x2">
							<input type="text" id="first-name" name="lead[first_name]" placeholder="First name *" autocomplete="given-name" aria-label="First Name" required=""></input>
						</div>
						<div className="form_item x2">
							<input type="text" id="last-name" name="lead[last_name]" placeholder="Last name *" autocomplete="family-name" aria-label="Last Name" required=""></input>
						</div>
						<div className="form_item">
							<input type="text" id="company" name="lead[company]" placeholder="Company/Organization" autocomplete="company" aria-label="Company"></input>
						</div>
					</div>
					<div className="form_group">
						<div className="form_item x2">
							<input type="email" id="email-address" name="lead[email_address]" placeholder="Email address *" autocomplete="email" aria-label="Email Address" required=""></input>
						</div>
						<div className="form_item x2">
							<input type="text" id="phone-number" name="lead[phone_number]" placeholder="Phone number" autocomplete="tel" aria-label="Phone Number"></input>
						</div>
					</div>
					<div className="form_group">
						<div className="form_item">
							<textarea id="message" name="lead[message]" placeholder="Enter your message here... *" aria-label="Message" required=""></textarea>
						</div>
					</div>
					<div className="form_group checkbox_group">
						<div className="form_item checkbox_item"><label><input type="checkbox" id="opt-in" name="lead[opt_in]" value="1" checked=""></input> <span>Yes, add me to the Chris Cortazzo newsletter</span></label></div>
					</div>
					<div className="form_actions">
						<div className="action"><button type="button" id="submit-form" className="button black submit"><span className="icon send"></span><span>Send Message</span></button>
							<div className="captcha_field"><input type="text" value="" autocomplete="off"></input></div>
						</div>
					</div>
				</div>
			</div></main>
			<SignupFooter />
			</>
    );
};

export default Contact;