import { Routes, Route } from 'react-router-dom';

import './App.css';
import { WomenCatalog, MenCatalog, KidsCatalog } from 'pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WomenCatalog />} />
        <Route path="women" element={<WomenCatalog />} />
        <Route path="men" element={<MenCatalog />} />
        <Route path="kids" element={<KidsCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
