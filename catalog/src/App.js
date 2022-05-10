import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import { CatalogPage, ProductPage } from 'pages';
import CATEGORIES_QUERY from 'api/getCategories';

import './App.css';

class App extends React.Component {
  state = {
    selectedCurrency: 'USD',
    selectedCurrencySymbol: '$',
  };

  selectCurrency = (currencyToSelect, currencySymbolToSelect) => {
    this.setState({
      selectedCurrency: currencyToSelect,
      selectedCurrencySymbol: currencySymbolToSelect,
    });
  };

  render() {
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
                    <Route
                      index
                      element={
                        <CatalogPage
                          pagename={category.name}
                          selectedCurrency={this.state.selectedCurrency}
                          selectedCurrencySymbol={this.state.selectedCurrencySymbol}
                          selectCurrency={this.selectCurrency}
                        />
                      }
                    />
                    <Route
                      path={`/${category.name}/:productId`}
                      element={
                        <ProductPage
                          section={category.name}
                          selectedCurrency={this.state.selectedCurrency}
                          selectedCurrencySymbol={this.state.selectedCurrencySymbol}
                          selectCurrency={this.selectCurrency}
                        />
                      }
                    />
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
}

export default App;
