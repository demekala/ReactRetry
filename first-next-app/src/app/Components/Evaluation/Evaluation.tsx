import React from 'react'
import Graph from '../Graph/Graph';

const Evaluation = ({ firstCoefficient, secondCoefficient, thirdCoefficient }) => {
    const discriminant = Math.pow(secondCoefficient, 2) - 4 * firstCoefficient * thirdCoefficient;
    const rootOne = (-secondCoefficient - Math.pow(discriminant, 0.5)) / (2 * firstCoefficient);
    const rootTwo = (-secondCoefficient + Math.pow(discriminant, 0.5)) / (2 * firstCoefficient);

    const yValues = [];

    for (let i = -100; i < 100; i++) {
        yValues.push(firstCoefficient * Math.pow(i, 2) + secondCoefficient * i + thirdCoefficient);
    }

    return (
        <div>
            <h1 className='m-12'>f(x) = {firstCoefficient}x^2 + {secondCoefficient}x + {thirdCoefficient}</h1>
            <p className='m-12'>discriminant is equal to {discriminant}</p>
            {discriminant > 0 && <p className='m-12'>function crosses x axis twice, meaning that function has two roots</p>}
            {discriminant == 0 && <p className='m-12'>function touches x axis once, meaning that function has one root</p>}
            {discriminant < 0 && <p className='m-12'>function doesnt cross or touch x axis, meaning that the function has no roots</p>}

            {discriminant >= 0 && <p className='ml-12'>x1 = {rootOne}</p>}
            {discriminant > 0 && <p className='ml-12'>x2 = {rootTwo}</p>}

            <Graph yValues={yValues} />
        </div>
    )
}

export default Evaluation