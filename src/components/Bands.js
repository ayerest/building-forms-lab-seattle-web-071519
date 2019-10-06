import React from 'react';

const Bands = props => {
    let bands = props.bands.map((band, id) => {
        return <li key={id}>{band.name}</li>;
    });

    return (
        <ul>
            {bands}
        </ul>
    );

};

export default Bands;