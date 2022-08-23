import React from 'react'
import { nextSection } from '../../../main'
import './pageArrow.css'

const RightArrow = () => {
    return (
        <button
            className='navigate-right enabled'
            aria-label='next slide'
            onClick={() => nextSection()}
        >
            <div className='controls-arrow'></div>
        </button>
    )
}

export default RightArrow
