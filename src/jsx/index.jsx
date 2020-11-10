import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Main} from './components/main/main.jsx';

function Index(props) {
    return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <div className="wrapper main">
                    <Main/>
                </div>
            </Route>
        </Switch>
    </Router>
    )
}

ReactDOM.render(
    <Index/>,
    document.getElementById('react-root')
);
