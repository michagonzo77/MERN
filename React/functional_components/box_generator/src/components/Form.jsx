import React, { useState } from 'react';

export const Form = (props) => {
    const [allBoxes, setAllBoxes] = useState([]);
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const grabColor = (e) => {
        e.preventDefault();
        const newBox = {
            color: color,
            width: width,
            height: height
        };
        setAllBoxes([...allBoxes, newBox]);
        console.log(allBoxes)
        setColor('');
        setWidth('');
        setHeight('');
    };

    return (
        <div>
            <form className="form-group mt-5" onSubmit={ grabColor }>
            <div>
                <label>
                    <span>Color:</span>{' '}
                    <input name="color" className="form-control" onChange={ (e) =>{
                        setColor(e.target.value);
                    }} value={color} />
                </label>
                <label>
                    <span>Width:</span>{' '}
                    <input name="width" className="form-control" onChange={ (e) =>{
                        setWidth(e.target.value);
                    }} value={width} />
                </label>
                <label>
                    <span>Height:</span>{' '}
                    <input name="height" className="form-control" onChange={ (e) =>{
                        setHeight(e.target.value);
                    }} value={height} />
                </label>
            </div>
            <input className="mt-3" type="submit" value="Add" />
            </form>
            <div className="boxSection">
                {allBoxes.map((box, i) => {
                    return (
                        <div key={i} style={{ backgroundColor: box.color, width: box.width +'px', height: box.height + 'px'}}></div>
                    )
                })}
            </div>
        </div>
    );
}