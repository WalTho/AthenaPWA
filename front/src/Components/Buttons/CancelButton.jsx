import React from "react";
import uuid from 'react-uuid';

const CancelButton = (props) => {
    const unique_id = uuid();
    return(
        <div className="cancel-button" key={unique_id}>
            <a
                className="cancel-button-text"
                key={unique_id}
                href={props?.Link ?? '/'}
            >
                {props?.Label}
            </a>
        </div>
    )
}

export default CancelButton;