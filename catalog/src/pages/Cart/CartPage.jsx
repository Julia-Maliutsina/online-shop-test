import React from 'react';

import { Layout } from 'components/Layout';
import CartList from 'components/Cart';

class Cart extends React.Component {
  render() {
    return (
      <Layout
        pagename={this.props.pagename}
        selectCurrency={this.props.selectCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
        selectedCurrency={this.props.selectedCurrency}
      >
        <CartList
          currency={this.props.selectedCurrency}
          currencySymbol={this.props.selectedCurrencySymbol}
        />
      </Layout>
    );
  }
}

export default Cart;
