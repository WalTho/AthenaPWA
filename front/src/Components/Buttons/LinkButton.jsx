import React from "react";
import uuid from 'react-uuid';

const LinkButton = (props) => {
    const unique_id = uuid();
    return (
        <div className="link-button" key={unique_id}>
            <a
                className="link-button-text"
                key={unique_id}
                href={props?.Link ?? '/'}
            >
                {props?.Label}
            </a>
        </div>
    )
}

export default LinkButton;