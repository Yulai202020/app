import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './sites/Home';
import About from './sites/About';
import PageNotFound from './sites/PageNotFound';
import './index.css';

const basename = "/app";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;