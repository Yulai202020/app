import Home from './sites/Home';
import About from './sites/About';
import Navigate from './sites/Navigate';
import PageNotFound from './sites/PageNotFound';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const basename = "/app";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;