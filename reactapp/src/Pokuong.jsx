import './Pokuong.css';

const Pokuong = () => {
    return (
        <>
            <aside id="chris-hero" className="section black minhalf active">
                <div className="wrapper center">
                    <div id="stat-highlight">
                        <div className="stat">
                            <div className="statbox">
                                <span className="count">$8+ billion</span>
                                <span className="label">in sales</span>
                            </div>
                        </div>
                    </div>
                    <div id="pull-quote">
                        <div className="quote">"The secret is to work hard and have integrity. I am proof that you can reach the top without sacrificing your values."</div>
                        <div className="source">~ Pokuong Lao</div>
                    </div>
                </div>
                <span className="mask black"></span>
            </aside>

            <main id="chris-bio" className="section white static">
                <div className="wrapper">
                    <div className="content split aligntop">
                        <div className="left">
                            <div id="user-image">
                                <img src="../image/profile_pic.jpg" alt="pokuong lao photo" className="fit" />
                            </div>
                            <address id="user-contact">
                                <div className="phone">(626) 272-8808</div>
                                <a href="mailto:pokuonglao@outlook.com" className="email">pokuonglao@outlook.com</a>
                            </address>
                        </div>
                        <div className="right">
                            <header>
                                <h1>Pokuong Lao</h1>
                            </header>
                            <p>
                                Pokuong Lao is a distinguished real estate professional with a remarkable passion for helping clients discover their dream homes. With a career spanning over two decades, Pokuong's expertise and commitment to excellence have made him a trusted name in the real estate industry.
                            </p>
                            {/* ... (Rest of the biography) ... */}
                        </div>
                    </div>
                </div>
            </main>
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
        </>
    );
};

export default Pokuong;
