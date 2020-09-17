import React from 'react';
import './Facerecognition.css';

const Facerecognintion = ({ imgsrc, box, displayB }) => {
    return (
        <div style={{ position : 'relative',width : '90vw', height : 'auto' , margin: 'auto'}}>
            <img alt="" id="inputImg" src={imgsrc} width="100%" height="100%" />
            <div>
            {
                function(){
                    let a = []
                    for(let i = 0;i < box.length;i++){
                        a.push(
                                <div className="boundingBox" style={{top : box[i].topRow, right : box[i].rightCol, bottom : box[i].bottomRow, left : box[i].leftCol, display : displayB}}></div>    
                        )
                    }
                    return a;
                }.call(this)
            }
            </div>
            {/* {console.clear()} */}
        </div>
    )
}

export default Facerecognintion;