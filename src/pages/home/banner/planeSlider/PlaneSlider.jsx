import React from 'react';
import './PlaneSlider.css'
import plane from '../../../../assets/images/plane.svg'
import cloud1 from '../../../../assets/images/cloud1.svg'
import cloud2 from '../../../../assets/images/cloud2.svg'

const PlaneSlider = () => {
    return (
        <div className='flex overflow-hidden planeSlider'>
            <div className='cloud1'>
                <img src={cloud2} alt="Images" />
            </div>
            <div className='cloud2'>
                <img src={cloud1} alt="Images" />
            </div>
            <div className='plane'>
                <img src={plane} alt="Images" />
            </div>
            <div className='cloud3'>
                <img src={cloud1} alt="Images" />
            </div>
        </div>
    );
};

export default PlaneSlider;