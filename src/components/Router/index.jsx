import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from '../Home'
import Login from '../Login'
import Profile from '../Profile'
import PlacesMap from '../Map'
import { useAuthDataContext } from "../helpers/AuthProvider";
import MainLayout from '../Layout'


const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => 
    loggedIn ? (
        <Route
                {...rest}
                render={props => { 
                    //console.log(props)
                    return (
                    
                            <MainLayout>
                            <Component {...props} />
                            </MainLayout>
                    )
                }}
            />
    ) : (<Redirect to="/" />)

const Router = () => {
    const { loggedIn } = useAuthDataContext();
    return (
    <Switch>
        <Route path="/" exact loggedIn={loggedIn} component={Login} />
        <PrivateRoute exact path="/home" loggedIn={loggedIn} component={Home} />
        <PrivateRoute exact path="/profile" loggedIn={loggedIn} component={Profile} />
        <PrivateRoute exact path="/map" loggedIn={loggedIn} component={PlacesMap} />
    </Switch>
    )
};

export default Router;