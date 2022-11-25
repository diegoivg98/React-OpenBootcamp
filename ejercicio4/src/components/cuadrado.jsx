import React, { useState } from 'react';

const Cuadrado = () => {

    /*Color inicial black*/
    const [color, setColor] = useState('#000000');

    const [randomInterval, setRandomInterval] = useState(0)

    // genera un numero aleatorio entre 0 y 255
    const random0to255 = () => Math.floor(Math.random() * 256)

    // crea un color rgb aleatorio 
    const generateRandomRGB = () => ({
        r: random0to255(),
        g: random0to255(),
        b: random0to255(),
    })

    // pasa rgb a hex
    const rgbToHex = (r, g, b) =>
        "#" +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("");

    const changeColor = () => {
        setRandomInterval(setInterval(() => {
            const rgb = generateRandomRGB()
            setColor(rgbToHex(rgb.r, rgb.g, rgb.b))
        }, 350))
    }

    const onStopChangeColor = () => {
        clearInterval(randomInterval);
    };

    const handleClick = event => {
        if (event.detail === 2) {
            console.log('doble click')
            clearInterval(randomInterval);
        }
    };

    return (
        <div
            onMouseOver={changeColor}
            onMouseLeave={onStopChangeColor}
            onClick={handleClick}
            style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto', marginTop: '250px' }}>
        </div>
    );
}

export default Cuadrado;
