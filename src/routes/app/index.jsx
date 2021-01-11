import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../containers/home';

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} /> */}
            </Switch>
    </BrowserRouter>
);

export default App;
