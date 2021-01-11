import React from 'react'
import './categories.scss';

const Categories = ({children, title}) => {
    return (
        <div className="categories w-100">
            <h2 className="categories__title">{title}</h2>
            {children}
        </div>
    );
};

export default Categories;