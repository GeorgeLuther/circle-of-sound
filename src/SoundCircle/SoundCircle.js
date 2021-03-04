import React from 'react'
import './SoundCircle.css'

export default function SoundCircle(props) {

    const circleArr = []
    for (let i=0; i<props.size; i++) {
        circleArr.push(
                <button
                    className='circleOption'
                >
                    test
                </button>
        )
    } 
    return (
        <div className="soundCircle">
            {circleArr}
        </div>
    )
}
