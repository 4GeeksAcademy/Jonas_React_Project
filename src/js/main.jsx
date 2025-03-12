import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Bottom from './components/Bottom';

const App = () => {
return (
  <div>
    <Navbar/>
    <Home/>
    <Cards/>
    <Bottom/>
  </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

export default App