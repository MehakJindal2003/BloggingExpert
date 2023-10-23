// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import Account from './pages/account/Account';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Create from './components/create/Create';
import Footer from './components/footer/Footer';
import Favourite from './components/favourite/Favourite';
import Choice from './pages/choice/Choice';
import Contact from './pages/contact/Contact';
import FamousPeoplePage from './pages/following/Following';
import Premium from './pages/premium/Premium';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/account" component={Account}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/favourite" component={Favourite}/>
          <Route exact path="/filter" component={Choice}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/following" component={FamousPeoplePage}/>
          <Route exact path="/premium" component={Premium}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App