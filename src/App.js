import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contact from './pages/contact';
import Design from './pages/design';
import HomePage from './pages/home';
import Lifestyle from './pages/lifestyle';
import NetflixShow from './pages/netflix-show';
import Shop from './pages/shop';
import TheStudio from './pages/the-studio';
import Videos from './pages/videos';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/lifestyle" element={<Lifestyle />}></Route>
        <Route path="/netflix-show" element={<NetflixShow />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/the-studio" element={<TheStudio />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
