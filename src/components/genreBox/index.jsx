import React from 'react'
import './genreBox.scss';

const GenreBox = ({genre}) => {
    return (
        <div className="genreBox">
                <span>
                {genre.name}
                </span>
        </div>
    );
}

export default GenreBox;