import Home from './sites/Home';
import About from './sites/About';
import Navigate from './sites/Navigate';
import PageNotFound from './sites/PageNotFound';

import config from "./config.json"
import Favicon from 'react-favicon';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Navigate /> {/* here is config.basepath are using too */}
        <Favicon url={`${config.basepath}/react.svg`} /> {/* somewhy here basepath needed */}

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