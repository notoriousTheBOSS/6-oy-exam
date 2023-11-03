import React, { useState, useRef } from "react";
import "./style.scss";
const index = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };
    return (
        <section className="ikromsharifsection">
            <div className="container">
                <div className="ikromsharifwrapper">
                    <video className="ikromsharifvideo" ref={videoRef}>
                        <source src="#" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button
                        className="ikromsharifvideobtn"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? "Pause" : ""}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default index;
