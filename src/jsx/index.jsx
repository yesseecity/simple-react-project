import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Main} from './components/main/main.jsx';
import {FunctionName} from './component-func-sample.jsx';
import {YourCalss} from './component-class-sample.jsx';

function Index(props) {
    return (
    <Router>
        <Switch>
            <Route path="/class" exact>
                <YourCalss />
            </Route>
            <Route path="/func" exact>
                <FunctionName />
            </Route>
            <Route path="/">
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
