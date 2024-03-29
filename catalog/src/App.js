import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import { CatalogPage, ProductPage, CartPage } from 'pages';
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
                <Route path="/" element={<Navigate replace to={categories[0].name} />} />
                {categories.map((category) => (
                  <Route path={category.name} key={category.name}>
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
                <Route
                  path={`/cart`}
                  element={
                    <CartPage
                      pagename="cart"
                      selectedCurrency={this.state.selectedCurrency}
                      selectedCurrencySymbol={this.state.selectedCurrencySymbol}
                      selectCurrency={this.selectCurrency}
                    />
                  }
                />
              </Routes>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
