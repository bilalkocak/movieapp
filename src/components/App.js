import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MovieList from "./MovieList/MovieList";
import MovieDetail from "./MovieDetail/MovieDetail";
import Error from "./404/Error";

import './App.sass';

class App extends Component {

    render() {

        return (
            <div className="App">
                <Switch>
                    <Route exact path={'/'} component={MovieList}/>
                    <Route exact path={'/movie-detail/:id'} component={MovieDetail}/>
                    <Route component={Error}/>
                </Switch>
            </div>

        );
    }
}


export default App;
