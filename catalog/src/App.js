import { Routes, Route } from 'react-router-dom';

import { TechCatalog, ClothingCatalog, AllCatalog, Product } from 'pages';
import { PAGE } from 'constants/pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllCatalog />} />
        <Route path="tech">
          <Route index element={<TechCatalog />} />
          <Route path="item" element={<Product section={PAGE.tech} />} />
        </Route>
        <Route path="clothing" element={<ClothingCatalog />} />
        <Route path="all" element={<AllCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
