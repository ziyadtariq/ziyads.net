import React from 'react';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import './styles/styles.css';
import 'normalize.css/normalize.css';
import './firebase/firebase';

function App(props) {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}
export default App;

