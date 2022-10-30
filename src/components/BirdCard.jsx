import React from "react";

const BirdCard = ({bird}) => {
    return ( 
        <div className="bird">
            <div>
                <p></p>
            </div>
            <div>
                <img src={bird.images.full} alt={bird.name.spanish}/>
            </div>
            <div>
                <span>Latin: {bird.name.latin}</span>
                <h3>{bird.name.spanish}</h3>
            </div>
        </div>
    )
}
export default BirdCard;