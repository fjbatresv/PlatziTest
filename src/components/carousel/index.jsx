import React from 'react'
import RcIf, { RcElse } from 'rc-if';
import style from './carousel.styl';
const Carousel = ({ children, axis }) => {
    return (
        <RcIf if={axis === 'x'} >
            <section className={style.carousel}>
                <div className={style.carouselContainer}>
                    {children}
                </div>
            </section>
            <RcElse>
                <section className={style.grid}>
                    <div className={style.gridContainer}>
                        {children}
                    </div>
                </section>
            </RcElse>
        </RcIf>
    );
};

export default Carousel;
