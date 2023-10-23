import './SignupFooter.css';

const SignupFooter = () => {
    return (
            <aside id="signup-footer" className="section white static">
                <div className="wrapper">
                    <div className="content center optin_form" data-listid="2010830637" data-user="5,8">
                        <div id="signup-title">Subscribe to Pokuong's Newsletter</div>
                        <p>Sign up with your email address to receive news and updates.</p>
                        <div id="optin-response" className="message"></div>
                        <div className="form_group">
                            <div className="form_item combo_item">
                                <input type="email" name="email_address" placeholder="Email address..." autoComplete="email" aria-label="Email Address" />
                                <button type="button" className="black submit">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
    );
};

export default SignupFooter;
