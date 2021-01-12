import React from 'react';
import style from './carouselItem.styl';
const CarouselItem = ({ movie, zoom }) => {

    const poster = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    let classNames = `${style.movieCard}`;
    if (zoom) {
        classNames += ` ${style.carouselItem}`;
    }
    return (
        <div className={classNames} >
            <img className={style.movieCardImg} src={poster} alt={movie.title} />
            <div className={style.movieCardDetails}>
                <div>
                    {/* <img className="movie-card__details--img" src={playIcon} alt="Play Icon" />
                    <img className="movie-card__details--img" src={plusIcon} alt="Plus Icon" /> */}
                </div>
                <p className={style.movieCardDetailsTitle}>{movie.title}</p>
                <p className={style.movieCardDetailsSubtitle}>{`${movie.release_date} ${movie.vote_average}`}</p>
            </div>
        </div>
    );
};

export default CarouselItem;
