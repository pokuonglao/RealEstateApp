import './Welcome.css';
const Welcome = () => {
    return (
        <main id="welcome" className="section full static">
            <div className="wrapper">
                <header>
                    <h1 id="company-name">Pokuong Lao</h1>
                </header>
                <div id="key-phrases">
                    <div>Market Maker</div>
                    <div>Finest LA Estates</div>
                    <div>Exceptional Service</div>
                </div>
            </div>
            <div id="bgvid">
                <iframe tabIndex="-1" title="pokuonglao spash video" src="https://player.vimeo.com/video/875746351?background=1&autoplay=1&loop=1&byline=0&title=0" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen>
                
                </iframe>
            </div>
            {/*<svg id="scroll-me" class="mouse" data-anchor="properties" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130" preserveAspectRatio="xMidYMid meet" tabindex="-1">*/}
            {/*    <g fill="none" fill-rule="evenodd">*/}
            {/*        <rect width="70" height="118" x="1.5" y="1.5" stroke="#FFF" stroke-width="3" rx="36"></rect>*/}
            {/*        <circle class="scroll" cx="36.5" cy="31.5" r="7" fill="#FFF"></circle>*/}
            {/*    </g>*/}
            {/*</svg>*/}
        </main>
    );
};

export default Welcome;