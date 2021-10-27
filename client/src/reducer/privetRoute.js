import React from 'react'
import {
    Route,
    Redirect
  } from "react-router-dom";
function PrivetRoute({ component: Component, ...rest }) {
    const auth = localStorage.getItem('auth');
    return (
        <Route {...rest} render={props => {
            if (!auth && auth !== true) {
                const notAuthorized = <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
                // not logged in so redirect to login page with the return url
                return notAuthorized
            }
            
            // authorized so return component
            return <Component {...props} />
        }} />
    );
}

export default PrivetRoute
