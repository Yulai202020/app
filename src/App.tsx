import Home from './sites/Home';
import About from './sites/About';
import Navigate from './sites/Navigate';
import PageNotFound from './sites/PageNotFound';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Favicon from 'react-favicon';

function App() {
  return (
    <HashRouter>
      <div>
        <Navigate />
        <Favicon url="/app/react.svg" />
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