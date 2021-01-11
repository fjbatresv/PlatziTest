import React from 'react'
import './categories.scss';

const Categories = ({children, title}) => {
    return (
        <div className="categories">
            <h2 className="categories__title">{title}</h2>
            {children}
        </div>
    );
};

export default Categories;