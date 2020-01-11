import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MovieList from "./MovieList/MovieList";
import MovieDetail from "./MovieDetail/MovieDetail";

import './App.sass';


const Error = () => (<div>
    Hata sayfası
</div>)

class App extends Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path={'/'} component={MovieList}/>
                        <Route exact path={'/movie-detail/:id'} component={MovieDetail}/>
                        <Route component={Error}/>
                    </Switch>

                </div>
            </Router>

        );
    }
}

export default App;
