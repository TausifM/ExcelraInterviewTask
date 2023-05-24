import React, { useState } from 'react'
const Test = () => {
    const [number, setNumber] = useState(0)
    const handleColumnRows = (e) => {
        const { value } = e.target;
        const parseValue = parseInt(value)
        setNumber(parseValue)
    }
    return (
        <>
            <input type='number' onChange={handleColumnRows} placeholder='type number' />
            <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${number}, 60px) `,
                gridTemplateRows: `repeat(${number}, 60px)`,
                padding: "10px",
                margin: "10px",
            }}>
                {Array.from({ length: number * number }, (_, index) => (
                    <div key={index} style={{width: "50px", height: "50px" , backgroundColor: 'black'}} ></div>
                ))}
            </div>
        </>
    )
}

export default Test;