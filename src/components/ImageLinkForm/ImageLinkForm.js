import React from 'react';
import './imageLink.css';

const ImageLinkForm = ({ onInputChange, onFormSubmit }) => {
    return (
        <div>
            <div className="center div">
                <input type="text" className="w-70" onChange={onInputChange}/>
                <button className="btn w-30" onClick={onFormSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;