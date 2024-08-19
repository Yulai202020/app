import Home from './sites/Home';
import About from './sites/About';
import Navigate from './sites/Navigate';
import PageNotFound from './sites/PageNotFound';

// import config from "./config.json";
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const basepath = config.basepath;

  return (
    <HashRouter>
      <div>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;