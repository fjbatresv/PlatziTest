import React from 'react'
import RcIf, { RcElse } from 'rc-if';
import './carousel.scss';
const Carousel = ({ children, axis }) => {
    return (
        <RcIf if={axis === 'x'} >
            <section className='carousel'>
                <div className='carousel__container'>
                    {children}
                </div>
            </section>
            <RcElse>
                <section className='grid'>
                    <div className='grid__container'>
                        {children}
                    </div>
                </section>
            </RcElse>
        </RcIf>
    );
};

export default Carousel;
