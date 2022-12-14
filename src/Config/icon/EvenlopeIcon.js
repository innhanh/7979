import React from 'react';
import "./icon.scss";

function EvenlopeIcon(props) {
    return (
        <div id='evenlope_icon'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
                <defs>
                    <linearGradient id="linear-gradient" x1="1.1" y1="62" x2="118.9" y2="62" gradientTransform="matrix(1, 0, 0, -1, 0, 122)" gradientUnits="userSpaceOnUse"><stop offset="0.33" stop-color="#621ee6" /><stop offset="0.51" stop-color="#5f1de7" /><stop offset="0.63" stop-color="#561ae9" /><stop offset="0.75" stop-color="#4615ed" /><stop offset="0.85" stop-color="#2f0ef3" /><stop offset="0.95" stop-color="#1206fa" /><stop offset="1" stop-color="blue" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="19.68" y1="68.04" x2="100.32" y2="68.04" gradientTransform="matrix(1, 0, 0, -1, 0, 122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#621ee6" /><stop offset="0.07" stop-color="#5a1ce8" /><stop offset="0.49" stop-color="#290df4" /><stop offset="0.82" stop-color="#0b03fc" /><stop offset="1" stop-color="blue" />
                    </linearGradient>
                </defs>
                <title>Envelope_Icon</title>
                <circle cx="60" cy="60" r="57.9" fill="none" stroke-miterlimit="10" stroke-width="3" stroke="url(#linear-gradient)" />
                <path d="M60,93.69H21.82c-1.85,0-2.14-.28-2.14-2.15V48.65a2.6,2.6,0,0,1,1-2.19Q39.77,30.7,58.78,14.88c1-.87,1.38-.87,2.42,0q19,15.79,38.08,31.58a2.59,2.59,0,0,1,1,2.21v43c0,1.72-.31,2-2,2Zm0-76.55L22.9,47.94,60,78.7,97.08,47.9Zm-35.54,74H95.52L72.25,71.79C68.48,74.92,64.79,78,61.13,81a1.5,1.5,0,0,1-2.12.16,1.21,1.21,0,0,1-.16-.16c-1.78-1.54-3.62-3-5.43-4.56l-5.71-4.71ZM22.34,50.69v39L45.76,70.15Zm75.41,0L74.21,70.16,97.69,89.64Z" fill="url(#linear-gradient-2)" />
            </svg>
        </div>
    );
}

export default EvenlopeIcon;