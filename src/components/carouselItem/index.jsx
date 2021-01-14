import React from 'react';
// Redux
import { connect } from 'react-redux';
// Style
import style from './carouselItem.styl';
// Actions
import { setMovie } from '../../actions/index';
// Router
import { useHistory } from 'react-router-dom';

const CarouselItem = props => {
    const history = useHistory();

    const goMovie = () => {
        props.setMovie(props.movie.id);
        history.push('/movie');
    }

    const poster = `https://image.tmdb.org/t/p/w185${props.movie.poster_path}`;
    let classNames = `${style.movieCard}`;
    if (props.zoom) {
        classNames += ` ${style.carouselItem}`;
    }
    return (
        <div className={classNames} onClick={goMovie} >
            <img className={style.movieCardImg} src={poster} alt={props.movie.title} />
            <div className={style.movieCardDetails}>
                <p className={style.movieCardDetailsTitle}>{props.movie.title}</p>
                <p className={style.movieCardDetailsSubtitle}>{`${props.movie.release_date} ${props.movie.vote_average}`}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    setMovie
};

export default connect(null, mapDispatchToProps)(CarouselItem);
