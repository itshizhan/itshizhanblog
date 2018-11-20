import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Index = () => <h2>Home</h2>;
const About = () => (<h2>
  About<br />
</h2>);
const Topics = ({ match,history,location }) => (
  <div>
    <h2>Topics</h2>
    <nav>
      <ul>
        <li>
          <Link to="rendering">Rendering with React</Link>
        </li>
        <li>
          <Link to="components">Components</Link>
        </li>
        <li>
          <Link to="props-v-state">Props v. State</Link>
        </li>
      </ul>
    </nav>
    
    <Route path={match.url+'/:id'} exact component={ Topic }></Route>
    <Route path={match.url} exact render={()=> <div> Please select a topic. </div>}></Route>
  
  </div>
);

const Topic = ({match})=>{
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
}

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
      <hr />
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/topics/" component={Topics} />
    </div>
  </Router>
);

export default AppRouter;