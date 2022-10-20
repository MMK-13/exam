import React, { useEffect, useState } from "react";
import './Convertor.css'

const getEurope = (size) => {
    return Number.parseFloat(size) + 15
}
const getRussia = (size) => {
    return Number.parseFloat(size) + 14
}
const getInter = (size) => {
    return Number.parseFloat(size) - 18
}

const Convertor = () => {
    const [size, setSize] = useState(26);
    const [russia, setRussia] = useState('--');
    const [europe, setEurope] = useState('--');
    const [inter, setInter] = useState('--');

    useEffect(() => {
        setEurope(getEurope(size))
        setRussia(getRussia(size))
        setInter(getInter(size))
    }, [size]);
    
    return (
        <div className="Convertor">
            <div className="size">
                <label htmlFor="size" className="size__label">Ваш размер в см</label>
                <input id="size" type="number" className="size__input" value={size} min="25" max="32" step=".5" onChange={(e) => setSize(e.target.value)} /> 
            </div>
            <div className="result">
                <div className="result__russian">Россия : { russia }</div>
                <div className="result__europe">Европа : { europe }</div>
                <div className="result__international">США : { inter }</div>
            </div>
        </div>
    )
}

export default Convertor