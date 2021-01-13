import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import Header from '../../components/header';
import Categories from '../../components/categories';
import Carousel from '../../components/carousel';
import CarouselItem from '../../components/carouselItem';
// IF
import RcIf from 'rc-if';
//Bootstrap
import { Row, Col } from 'react-bootstrap';
// Style
import style from './movie.styl';
// Hooks
import { getMovieDetails, getMovieImages, getMovieVideos, getMovieSimilars } from '../../hooks/tmdb.api';

const MovieScreen = props => {
    const movie = getMovieDetails(props.movie);
    const images = getMovieImages(props.movie);
    const similars = getMovieSimilars(props.movie);
    const videos = getMovieVideos(props.movie);
    return (
        <>
            <Header />
            <div className={`container-fuild ${style.movieInfo}`}>
                <h2>{movie.title}</h2>
                <Row className="d-flex justify-content-left">
                    <Col md={'auto'}>
                    <img class={style.moviePoster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    </Col>
                    <Col>
                    <p className={style.overview}>
                        {movie.overview}
                    </p>
                    </Col>
                </Row>
            </div>
            <RcIf if={videos.length > 0} >
                <Categories title="Videos" >
                    <Carousel axis="y">
                        {videos.map(item => <iframe className={style.movieVideo} src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
                    </Carousel>
                </Categories>
            </RcIf>
            <RcIf if={images.length > 0} >
                <Categories title="Fotos" >
                    <Carousel axis="x">
                        {images.map(item => <img class={style.movieImages} src={`https://image.tmdb.org/t/p/w185${item.file_path}`} />)}
                    </Carousel>
                </Categories>
            </RcIf>
            <RcIf if={similars.length > 0} >
                <Categories title="Similares" >
                    <Carousel axis="x">
                        {similars.map(item =>
                            <CarouselItem movie={item} zoom />
                        )}
                    </Carousel>
                </Categories>
            </RcIf>
        </>
    );
};

const mapStateToProps = state => {
    return {
        movie: state.movie
    };
};

export default connect(mapStateToProps)(MovieScreen);