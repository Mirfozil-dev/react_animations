import React from 'react';
import Page1 from './pages/Page1/Page1.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Page2 from './pages/Page2/Page2.jsx';
import Nav from './pages/Nav/Nav.jsx';
import Page3 from './pages/Page3/Page3.jsx';
import Page4 from './pages/Page4/Page4.jsx';
import Page5 from './pages/Page5/Page5.jsx';
import Page6 from './pages/Page6/Page6.jsx';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Nav} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
      </BrowserRouter>
    );
  }
}

export default App;
