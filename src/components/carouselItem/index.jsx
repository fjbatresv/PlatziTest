import React from 'react';
import './carouselItem.scss';
const CarouselItem = ({ movie, className }) => {
    const poster = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    const classNames= `movie-card ${className}`;
    return (
        <div className={classNames} >
            <img className="movie-card__img" src={poster} alt={movie.title} />
            <div className="movie-card__details">
                <div>
                    {/* <img className="movie-card__details--img" src={playIcon} alt="Play Icon" />
                    <img className="movie-card__details--img" src={plusIcon} alt="Plus Icon" /> */}
                </div>
                <p className="movie-card__details--title">{movie.title}</p>
                <p className="movie-card__details--subtitle">{`${movie.release_date} ${movie.vote_average}`}</p>
            </div>
        </div>
    );
};

export default CarouselItem;
