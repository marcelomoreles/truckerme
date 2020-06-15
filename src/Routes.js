import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout, PrivateRoute } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';



import {
  Dashboard as DashboardView,
  SignOut as SignOutView,
  Users as UsersView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/users"
      />
      <PrivateRoute
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/:ID"
      />
      <PrivateRoute
        component={UsersView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={SignOutView}
        exact
        layout={MinimalLayout}                        
        path="/sign-out"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
