// @vite-ignore
import React from 'react';

let coefficients = {
    a: 0,
    b: 0,
    c: 0,
}

const Input = () => {

    return (
        <div className='font-serif basis-[50%]'>
            <h2 className='m-12'>f(x) = ax^2 + bx + c where a does not equal 0</h2>
            <p id='a' className='m-12'>a = <input type="number" value={coefficients.a} className='text-black' /></p>
            <p id='b' className='m-12'>b = <input type="number" value={coefficients.b} className='text-black' /></p>
            <p id='c' className='m-12'>c = <input type="number" value={coefficients.c} className='text-black' /></p>
            <button className='ml-12 text-[40px] p-2 border border-white w-min'>Evaluate</button>
        </div >
    );
};

export default Input;
