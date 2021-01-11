import React from 'react';
import './carouselItem.scss';
const CarouselItem = ({ movie }) => {
    const poster = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={poster} alt={movie.title} />
            <div className="carousel-item__details">
                <div>
                    {/* <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                    <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> */}
                </div>
                <p className="carousel-item__details--title">{movie.title}</p>
                <p className="carousel-item__details--subtitle">{`${movie.release_date} ${movie.vote_average}`}</p>
            </div>
        </div>
    );
};

export default CarouselItem;
