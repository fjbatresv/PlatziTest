import style from './App.styl';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../containers/home';
import SearchResults from '../../containers/search';
import Genre from '../../containers/genre';
import MovieScreen from '../../containers/movie';
import NotFound from '../../containers/notFound';

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchResults} />
                <Route exact path="/genre" component={Genre} />
                <Route exact path="/movie" component={MovieScreen} />
                <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
);

export default App;
