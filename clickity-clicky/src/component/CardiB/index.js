import React from "react";
import "./style.css";

function CardiB (props) {
    const {
        image,
        clickCards
      } = props;
    
      var sectionStyle = {
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`
      };
    
      return (
        <div className="card" onClick={e => clickCards( e, props.id )} style={ sectionStyle }>
        </div>
      );
    }

export default CardiB;

