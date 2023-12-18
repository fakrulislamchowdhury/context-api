import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const { house, asset } = props;
    return (
        <div>
            <h2>Myself</h2>
            <small>House: {house}</small>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;