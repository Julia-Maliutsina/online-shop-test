import React from 'react';
import { Query } from '@apollo/react-components';

import CURRENCIES_QUERY from 'api/getCurrencies';

import { CurrencySelector, CurrencyOption } from './styled';

class CurrencyPopUp extends React.Component {
  render() {
    return (
      <CurrencySelector display={this.props.display}>
        <Query query={CURRENCIES_QUERY}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            const { currencies } = data;
            return currencies.map((currency) => (
              <CurrencyOption
                selected={this.props.selectedCurrency === currency.label}
                onClick={() => this.props.selectCurrency(currency.label, currency.symbol)}
              >
                {currency.symbol} {currency.label}
              </CurrencyOption>
            ));
          }}
        </Query>
      </CurrencySelector>
    );
  }
}

export default CurrencyPopUp;
