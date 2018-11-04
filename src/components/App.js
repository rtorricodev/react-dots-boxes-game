import React, { Component}  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Menu';
import Game from './Game';
import Error from './Error';


class App extends Component {
    render() {
        return (

            
            <Router>
                <Switch>
                    <Route path="/" component={Menu} exact/>
                    <Route path="/game" component={Game}/>
                    <Route component={Error}/> 
                </Switch>
            </Router>
        );
    }
}
  
export default App;
  