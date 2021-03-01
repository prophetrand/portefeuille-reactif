import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <div id="content-wrap">
        <Router >
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Footer />
        </Router>
      </div>
    </div>
  );
  // include at least 6 projects for assignment requirement
}

export default App;

// <Router>
//   <div>
//     <Nav />
//     <Switch>
//       <Route exact path="/" component={Books} />
//       <Route exact path="/books" component={Books} />
//       <Route exact path="/books/:id" component={Detail} />
//       <Route component={NoMatch} />
//     </Switch>
//   </div>
// </Router>