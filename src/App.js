import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";


import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import MovieContainer from "./containers/MovieContainer";
import LoginContainer from "./containers/LoginContainer"
import NotFound from "./components/Pages/NotFound/NotFound";
import FavoriteContainer  from "./containers/FavoriteContainer"
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderContainer />
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/movie/:movieId" component={MovieContainer} />
                    <Route path="/login" exact component={LoginContainer}/>
                    <Route path="/favorite"  exact component={FavoriteContainer}/>
                    <Route component={NotFound} />
                </Switch>                
            </React.Fragment>
        );
    }
}

export default App;
