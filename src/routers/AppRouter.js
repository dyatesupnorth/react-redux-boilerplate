import React from "react";
import ReactDOM from "react-dom";
import { Router , Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage'

import Help from '../components/Help';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute'
import PublicRoute from "./PublicRoute";
export const history = createHistory();

const AppRouter = () => (
    <Router history={history} basename={process.env.PUBLIC_URL}>
    <div className="h-100">
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute className="container" path="/dashboard" component={Dashboard}/>
            <Route path="/help" component={Help} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </Router>
)
export default AppRouter;