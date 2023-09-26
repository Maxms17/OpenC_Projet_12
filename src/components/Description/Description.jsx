import React from 'react';
import './Description.css'

function Description({para}) {
    return (
        <div className=''>
            {para && <p className='my-Text'>{para}</p>}
        </div>
    )
}

export default Description