import style from './App.styl';
import { createStore, compose } from 'redux';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../containers/home';
import SearchResults from '../../containers/search';
import MovieScreen from '../../containers/movie';
import NotFound from '../../containers/notFound';
import { Provider } from 'react-redux';
const composeEnhancers = compose;
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counterApp, preloadedState)

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchResults} />
                <Route exact path="/movie" component={MovieScreen} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;
