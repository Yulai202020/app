import Home from './sites/Home';
import About from './sites/About';
import Navigate from './sites/Navigate';
import PageNotFound from './sites/PageNotFound';

import config from "./config.json";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={config.basepath}>
      <div>
        <Navigate />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;