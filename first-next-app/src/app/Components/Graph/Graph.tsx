import React from 'react'

const Graph = ({ yValues }) => {
    return (
        <svg className='m-12' height={200} width={200}>
            <line x1="0" y1="100" x2="200" y2="100" style={{ stroke: 'red', strokeWidth: 2 }} />
            <line x1="100" y1="0" x2="100" y2="200" style={{ stroke: 'red', strokeWidth: 2 }} />
            {yValues.map((item, index) => (
                <line
                    x1={-100 + index}
                    y1={yValues[index]}
                    x2={-99 + index}
                    y2={yValues[index + 1]}
                    style={{ stroke: 'red', strokeWidth: 2 }}
                    key={index}
                />
            ))}
        </svg>
    )
}

export default Graph