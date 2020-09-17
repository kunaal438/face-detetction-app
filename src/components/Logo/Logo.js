import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './brain.png';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt shadow-1 ml3 pointer" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner"> 
                    <img alt="brain logo" className="mt3" src={Brain} width="85px"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;