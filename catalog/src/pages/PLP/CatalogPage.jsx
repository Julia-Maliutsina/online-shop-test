import React from 'react';

import { Layout } from 'components/Layout';
import { Catalog } from 'components/Catalog';

class TechCatalog extends React.Component {
  render() {
    return (
      <Layout
        pagename={this.props.pagename}
        selectCurrency={this.props.selectCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
        selectedCurrency={this.props.selectedCurrency}
      >
        <Catalog
          category={this.props.pagename}
          currency={this.props.selectedCurrency}
          currencySymbol={this.props.selectedCurrencySymbol}
        />
      </Layout>
    );
  }
}

export default TechCatalog;
