import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Popular} from './Popular';
import {Nav} from './Nav';
import {Home} from './Home';
import {Battle} from './Battle';

export class App extends React.Component<any, undefined> {

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/battle' component={Battle}/>
            <Route path='/popular' component={Popular}/>
            <Route render={
              () => {
                return <p>Not Found</p>
              }
            }/>
          </Switch>
        </div>
      </Router>
    );
  }
}
