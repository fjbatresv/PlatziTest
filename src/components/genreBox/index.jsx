import React from 'react'
import style from './genreBox.styl';
const GenreBox = ({genre}) => {
    return (
        <div className={style.genreBox}>
                <span>
                {genre.name}
                </span>
        </div>
    );
}

export default GenreBox;