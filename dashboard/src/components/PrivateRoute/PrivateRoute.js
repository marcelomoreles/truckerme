import React from 'react';
import { Redirect } from 'react-router-dom';
import { RouteWithLayout } from '../../components';

const isLogin = () => {
    const log = localStorage.getItem('isLogged');
     return log == 'true' ? true : false;
}

const PrivateRoute = (props) => {
    const {component, layout, path } = props

    return (
        isLogin() ? <RouteWithLayout
                        component={component}
                        exact
                        layout={layout}
                        path={path}
                    />
          
                : <Redirect to="/sign-out" />
    )
    
};

export default PrivateRoute;