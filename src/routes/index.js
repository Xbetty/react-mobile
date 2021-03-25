import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '@/pages/login';
import PageNotFount from '@/pages/404';
import Home from '@/pages/home';
import Details from '@/pages/details';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/404',
    component: PageNotFount,
    exact: true,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/details',
    component: Details,
    exact: true,
  },
];

export default function RoutesList() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => {
          return route && route.Redirect ? (
            <Redirect key={index} to={route.Redirect} />
          ) : (
            <Route key={route.path} {...route} />
          );
        })}
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}
