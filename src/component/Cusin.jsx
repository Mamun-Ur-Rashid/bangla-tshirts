import React from 'react';

const Cusin = ({children}) => {
    return (
        <div className='border-2 border-blue-500 p-3'>
            <h1>Cusin</h1>
            <p><small>{children}</small></p>
        </div>
    );
};

export default Cusin;