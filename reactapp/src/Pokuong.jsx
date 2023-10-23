import './Pokuong.css';
import SignupFooter from './SignupFooter.jsx';

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
                        </div>
                    </div>
                </div>
            </main>
            <SignupFooter/>
        </>
    );
};

export default Pokuong;
