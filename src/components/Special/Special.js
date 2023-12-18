import React, { useContext } from 'react';
import { RingContest } from '../../App';

const Special = (props) => {
    const { asset } = props;
    const [myContext, house] = useContext(RingContest);
    return (
        <div>
            <h2>Special</h2>
            <small>Asset: {asset}</small>
            <p>{myContext}</p>
            <p>House: {house}</p>
        </div>
    );
};

export default Special;