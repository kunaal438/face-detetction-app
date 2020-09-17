import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="pr3 f4 underline pointer white dim" onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="pr3 f4 underline pointer white dim" onClick={() => onRouteChange('signin')}>Sign In</p>
                <p className="pr3 f4 underline pointer white dim" onClick={() => onRouteChange('register')}>Register</p>
            </nav>
        )
    }
}

export default Navigation;