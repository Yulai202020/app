import Home from './sites/Home';
import About from './sites/About';
import PageNotFound from './sites/PageNotFound';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const basename = "/app";

function App() {
  return (
    <Router basename={basename}>
      <nav>
        <Link to="/">Home</Link> | 
         <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;