import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Meet, OpenRoom, Rlue } from '../pages';
import { MeetText } from '../pages';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/meet/text" component={MeetText} />
                    <Route path="/meet" component={Meet} />
                </Switch>
                <Route path="/OpenRoom" component={OpenRoom} />
                <Route path="/Rlue" component={Rlue} />
            </div>
        );
    }
}

export default App;