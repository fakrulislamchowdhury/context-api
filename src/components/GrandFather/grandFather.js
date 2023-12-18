import React from 'react';
import "./grandFather.css";
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const grandFather = (props) => {
    const { house, asset } = props;
    return (
        <div>
            <h1>GrandFather</h1>
            <small>House: {house}</small>
            <div className='container'>
                <Father house={house} asset={asset}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
        </div>
    );
};

export default grandFather;