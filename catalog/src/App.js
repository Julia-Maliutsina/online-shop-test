import { Routes, Route } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import { CatalogPage, ProductPage } from 'pages';
import CATEGORIES_QUERY from 'api/getCategories';

import './App.css';

function App() {
  return (
    <div className="App">
      <Query query={CATEGORIES_QUERY}>
        {({ loading, data }) => {
          if (loading) return 'Loading...';
          const { categories } = data;
          return (
            <Routes>
              {categories.map((category) => (
                <Route path={category.name}>
                  <Route index element={<CatalogPage pagename={category.name} />} />
                  <Route path="item" element={<ProductPage section={category.name} />} />
                </Route>
              ))}
              ;
            </Routes>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
