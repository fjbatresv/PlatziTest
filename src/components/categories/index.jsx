import React from 'react'
import style from './categories.styl';

const Categories = ({children, title}) => {
    return (
        <div className='w-100'>
            <h2 className={style.categoriesTitle}>{title}</h2>
            {children}
        </div>
    );
};

export default Categories;