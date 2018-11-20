import React from "react";
import * as reactRouter  from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

const Index = () => <h2>Home</h2>;
const About = () => (<h2>

    About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     About<br/>
    About<br/>    
    
    About<br/>    
    About<br/>   
     About<br/>
     <Link to="/users/info">Users Info</Link>
</h2>);
const Users = ({match}) => (
  <div>
  <h2>Users</h2>
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
     <ScrollToTop>
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
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/users/info">Users Info</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
    </ScrollToTop>
  </Router>
);

export default AppRouter;