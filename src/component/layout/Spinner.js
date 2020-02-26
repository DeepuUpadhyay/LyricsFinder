import React from 'react';

const Spinner = () => {
    const url = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
    return (
        <div>
            <img src={url} alt="Loading" style={{ width: '200px', margin: '40px auto', display: 'block' }} />
        </div>
    );
};

export default Spinner;