import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Index = () => <h2>Home</h2>;
const About = () => (<h2>About</h2>);
const Topics = ({match}) => (
  <div>
  <h2>Topics</h2>
  {
  <Route path={match.url+'/info'} component={UserInfo}></Route>
  }
  </div>
);

const UserInfo = ()=><h3>
  
  User Info
  User Info<br/>
  User Info<br/>
  User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/> User Info
  User Info<br/>
  User Info<br/>
  
  </h3>

console.log(reactRouter);

const AppRouter = () => (
  <Router>
  
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/topics/">Topics</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/topics/" component={Topics} />
    </div>
  </Router>
);

export default AppRouter;