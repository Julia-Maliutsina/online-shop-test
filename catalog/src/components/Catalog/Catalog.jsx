import React from 'react';
import { Query } from '@apollo/react-components';

import CATEGORY_QUERY from 'api/getCategory';

import { CatalogItem } from './CatalogItem';
import { CatalogItemsGrid } from './styled';

class Catalog extends React.Component {
  render() {
    return (
      <CatalogItemsGrid>
        <Query
          query={CATEGORY_QUERY}
          variables={{
            category: this.props.category,
          }}
        >
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            const { products } = data.category;
            return products.map((product) => (
              <CatalogItem
                key={product.id}
                product={product}
                category={this.props.category}
                currency={this.props.currency}
                currencySymbol={this.props.currencySymbol}
              />
            ));
          }}
        </Query>
      </CatalogItemsGrid>
    );
  }
}

export default Catalog;
