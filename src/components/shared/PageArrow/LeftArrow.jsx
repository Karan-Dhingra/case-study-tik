import React from 'react'
import { prevSection } from '../../../main'
import './pageArrow.css'

const LeftArrow = () => {
    return (
        <button
            className='navigate-left enabled'
            aria-label='previous slide'
            onClick={() => prevSection()}
        >
            <div className='controls-arrow'></div>
        </button>
    )
}

export default LeftArrow
