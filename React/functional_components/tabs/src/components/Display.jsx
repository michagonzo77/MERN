import React from "react";

export const Display = (props) => {
    const {tab} = props;
    const {isSelected, content} = tab;
    return (
        <div
            className="Display"
            style={isSelected ? {height: '300px', width: '300px', border: '1px solid black', animationName: 'fadein', animationDuration: '3s'}: {display: 'none'}}
        >
            {
                isSelected && <p>{content}</p>
            }
        </div>
    )
}