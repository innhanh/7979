import React from 'react';
import "./userSvg.scss"

function UserSvg(props) {
    return (
        <div className='user_icon w-100'>
            <svg id="path" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 145"><defs><style>
                {`.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:5px;`}
            </style></defs><title>77777</title>
                <circle class="cls-1 user_circle" cx="72.5" cy="45.01" r="20.99" />
                <path class="cls-1 user_body" d="M28.5,121V113.5A37.5,37.5,0,0,1,66,76H79a37.5,37.5,0,0,1,37.5,37.5V121" />
                <rect class="cls-1 user_rectan" x="3.5" y="4" width="138" height="137" rx="24.83" transform="translate(145) rotate(90)" />
            </svg>
        </div>
    );
}

export default UserSvg;