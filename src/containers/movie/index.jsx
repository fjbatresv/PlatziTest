
import React, { Component, useEffect, useState } from 'react';
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

class MovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            movie: {
                title: '',
                poster: '',
                overview: ''
            },
            images: [],
            videos: [],
            similars: [],
            load: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Derived', );
        return {
            ...state,
            id: props.movie,
            load: props.movie !== state.id
        };
    }

    async getData() {
        if (this.state.load) {
            const response = {
                id: this.state.id,
                movie: null,
                images: [],
                videos: [],
                similars: [],
                load: false
            };
            response.movie = await getMovieDetails(this.state.id);
            response.images = await getMovieImages(this.state.id);
            response.videos = await getMovieVideos(this.state.id);
            response.similars = await getMovieSimilars(this.state.id);
            window.scrollTo(0, 0);
            this.setState(response);
        }
    }

    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate() {
        this.getData();
    }

    render() {
        return (
            <>
                <Header />
                <RcIf if={this.state.movie !== null} >
                    <div className={`container-fuild ${style.movieInfo}`}>
                        <h2>{this.state.movie.title}</h2>
                        <Row className="d-flex justify-content-left">
                            <Col md={'auto'}>
                                <img className={style.moviePoster} src={`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />
                            </Col>
                            <Col>
                                <p className={style.overview}>
                                    {this.state.movie.overview}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </RcIf>
                <RcIf if={this.state.videos.length > 0} >
                    <Categories title="Videos" >
                        <Carousel axis="y">
                            {this.state.videos.map(item => <iframe className={style.movieVideo} src={`https://www.youtube.com/embed/${item.key}`} frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                        </Carousel>
                    </Categories>
                </RcIf>
                <RcIf if={this.state.images.length > 0} >
                    <Categories title="Fotos" >
                        <Carousel axis="x">
                            {this.state.images.map(item => <img class={style.movieImages} src={`https://image.tmdb.org/t/p/w185${item.file_path}`} />)}
                        </Carousel>
                    </Categories>
                </RcIf>
                <RcIf if={this.state.similars.length > 0} >
                    <Categories title="Similares" >
                        <Carousel axis="x">
                            {this.state.similars.map(item =>
                                <CarouselItem movie={item} zoom />
                            )}
                        </Carousel>
                    </Categories>
                </RcIf>
            </>
        );
    }
}


const mapStateToProps = state => {
    return {
        movie: state.movie
    };
};

export default connect(mapStateToProps)(MovieScreen);