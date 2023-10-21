import React, { useEffect, useState } from 'react';
import './Welcome.css';

const Welcome = () => {
    const [showVideo, setShowVideo] = useState(false);

    // Use a useEffect to delay showing the video
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(true);
        }, 3000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <main id="welcome" className="section full static">
            <div className={`wrapper ${showVideo ? 'hide' : ''}`}> {/* Hide the wrapper when the video is visible */}
                <header>
                    <h1 id="company-name">Pokuong Lao</h1>
                </header>
                <div id="key-phrases">
                    <div>Market Maker</div>
                    <div>Finest LA Estates</div>
                    <div>Exceptional Service</div>
                </div>
            </div>
            <div id="bgvid" className={showVideo ? 'show' : ''}>
                <iframe tabIndex="-1" title="pokuonglao spash video" src="https://player.vimeo.com/video/875746351?background=1&autoplay=1&loop=1&byline=0&title=0" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen>
                </iframe>
            </div>
        </main>
    );
};

export default Welcome;
