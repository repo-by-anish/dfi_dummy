import React, { useState } from 'react';
import VideoPlayer from '../basics/VideoPlayer';

const Advertisement = (): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayButtonClick = () => {
        setIsPlaying(prev=>!prev)
    };

    return (
        <section className='advertisement'>
            <div className="advertisement-container">
                <div style={{visibility: isPlaying ? 'hidden' : 'visible'}}  className="popup">
                    <img className="advertisement-video" alt='' style={{visibility: isPlaying ? 'hidden' : 'visible'}} src={"https://cdn.jsdelivr.net/gh/repo-by-anish/image_for_DFI/video/poster.png"}/>
                    <VideoPlayer isPlaying={isPlaying} handlePlayButtonClick={handlePlayButtonClick}/>
                    <div onClick={handlePlayButtonClick} className={`play-button ${isPlaying ? 'pause' : ''}`}></div>
                </div>
            </div>
            <div className="adv_quote">
                <h1>Empower Your Growth</h1>
                <p>Navigate Global Trade Seamlessly. Our export-import solutions break down barriers, offering open flexibility and limitless potential for your business.</p>
            </div>
        </section>
    );
};

export default Advertisement;
