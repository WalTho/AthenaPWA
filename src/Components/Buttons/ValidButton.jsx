import React from "react";
import uuid from 'react-uuid';

const ValidButton = (props) => {
    const unique_id = uuid();
     return(
        <div className="valid-button" key={unique_id}>
            <a 
                className="valid-button-text" 
                key={unique_id} 
                href={props?.Link ?? '/'}
            >
               {props?.Label}
            </a>
        </div>
     )
}

export default ValidButton;