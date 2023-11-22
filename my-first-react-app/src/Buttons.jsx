import { useState } from 'react';

export default function Buttons() {
    const [curColor, setColor] = useState("black");

    function handleChangeColor(color) {
        setColor(color);
    }

    const colorsList = ["black", "red", "green", "blue"];

    const divStyle = {
        backgroundColor: curColor,
      
    }

    return (
        <div style={divStyle} id='buttonContainer'>
            {colorsList.map((color) => (
                <button key={color}
                    onClick= {()=>handleChangeColor(color)}
                style={{backgroundColor: color}}>{color}</button>
            ))}
        </div>
    );

}