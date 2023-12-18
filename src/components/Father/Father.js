import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const { house, asset } = props;
    return (
        <div>
            <h2>Father</h2>
            <small>House: {house}</small>
            <div style={{ display: "flex" }}>
                <Brother house={house}></Brother>
                <Myself house={house} asset={asset}></Myself>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;