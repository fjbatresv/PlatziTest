import React from 'react';
import { connect } from 'react-redux';
// Components
import Categories from '../../components/categories';
import Carousel from '../../components/carousel';
import CarouselItem from '../../components/carouselItem';
import Header from '../../components/header';
import Footer from '../../components/footer';
import GenreBox from '../../components/genreBox';
// Actions
import {popularsReceived, genresReceived} from '../../actions/';
// Style
import './home.scss';

const Home = props => {
    if (props.populars.length == 0) {
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=768f63de8053f4e2c3324955e06f6738&language=es`)
    .then(response => response.json())
    .then(data => props.popularsReceived(data.results));
    }
    if (props.genres.length == 0) {
        fetch(`http://api.themoviedb.org/3/genre/movie/list?api_key=768f63de8053f4e2c3324955e06f6738&language=es`)
    .then(response => response.json())
    .then(data => props.genresReceived(data.genres));
    }
    return (
        <>
            <Header />
            <Categories title="Lo mas popular" >
                <Carousel axis="x">
                    {props.populars.map(item =>
                        <CarouselItem movie={item} />
                    )}
                </Carousel>
            </Categories>
            <Categories title="¿Qué vamos a ver?" >
                <Carousel>
                    {props.genres.map(item => <GenreBox genre={item} />)}
                </Carousel>
            </Categories>
            <Footer />
        </>
    );
};

const mapStateProps = state => {
    return {
        populars: state.populars,
        genres: state.genres
    };
};

const mapDispatchToProps = {
    popularsReceived,
    genresReceived
};

export default connect(mapStateProps, mapDispatchToProps)(Home);
