import React from 'react';
import "./icon.scss";

function FolderIcon(props) {
    return (
        <div id='folder_icon'>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 120">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.6" y1="59.89" x2="119.4" y2="59.89" gradientTransform="matrix(1, 0, 0, -1, 0, 119.89)" gradientUnits="userSpaceOnUse">
                        <stop offset="0.33" stop-color="#621ee6" />
                        <stop offset="0.51" stop-color="#5f1de7" />
                        <stop offset="0.63" stop-color="#561ae9" />
                        <stop offset="0.75" stop-color="#4615ed" />
                        <stop offset="0.85" stop-color="#2f0ef3" />
                        <stop offset="0.95" stop-color="#1206fa" />
                        <stop offset="1" stop-color="blue" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="33.07" y1="821.91" x2="96.89" y2="758.1" gradientTransform="translate(0 -719.89)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#621ee6" />
                        <stop offset="0.31" stop-color="#5f1de7" />
                        <stop offset="0.5" stop-color="#571be9" />
                        <stop offset="0.65" stop-color="#4916ec" />
                        <stop offset="0.78" stop-color="#3510f2" />
                        <stop offset="0.9" stop-color="#1b08f8" />
                        <stop offset="1" stop-color="blue" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="20.05" y1="797.45" x2="77.52" y2="739.98" xlinkHref="#linear-gradient-2" />
                </defs>
                <title>FolderIcon</title>
                <circle cx="60" cy="60" r="57.9" fill="none" stroke-miterlimit="10" stroke-width="3" stroke="url(#linear-gradient)" />
                <path d="M59,93.78H27.44c-2.84,0-4.93-1.49-5.47-4.08a7.34,7.34,0,0,1,.09-3.23c2.8-10.64,5.7-21.25,8.49-31.89.63-2.58,1.63-4.85,3.87-6.45a8.71,8.71,0,0,1,5.2-1.73h62.84c4,0,6.56,3.18,5.54,7.08Q103.77,69.26,99.58,85c-.19.71-.38,1.43-.58,2.13a9,9,0,0,1-8.71,6.62Z" fill="url(#linear-gradient-2)" />
                <path d="M44,36.63H90.66a8.07,8.07,0,0,1,8,6.63,10.68,10.68,0,0,1,.11,1.16H97.7c-19.21,0-38.41.07-57.62,0a11.72,11.72,0,0,0-11.2,8.69c-2.16,8.55-4.52,17-6.8,25.57a3.26,3.26,0,0,1-.22.69,3.51,3.51,0,0,0-.08-.57V33.38a6.88,6.88,0,0,1,6.59-7.16h8.54A6.87,6.87,0,0,1,44,32.85a3.84,3.84,0,0,1,0,.48Z" fill="url(#linear-gradient-3)" />
            </svg>
        </div>
    );
}

export default FolderIcon;