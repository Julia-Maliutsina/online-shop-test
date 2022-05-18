import React from 'react';
import { useParams } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import { Layout } from 'components/Layout';
import { ProductInfo } from 'components/Product';
import PRODUCT_QUERY from 'api/getProduct';

import { ProductWrapper, ProductGallery, ProductGalleryItem, ProductImage } from './styled';
class Product extends React.Component {
  render() {
    return (
      <Layout
        pagename={this.props.section}
        disableTitle={true}
        selectCurrency={this.props.selectCurrency}
        selectedCurrency={this.props.selectedCurrency}
        selectedCurrencySymbol={this.props.selectedCurrencySymbol}
      >
        <ProductWrapper>
          <Query
            query={PRODUCT_QUERY}
            variables={{
              productId: this.props.params.productId.slice(1),
            }}
          >
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { product } = data;
              return (
                <>
                  <ProductGallery>
                    {product.gallery.map((image, index) => (
                      <ProductGalleryItem
                        key={index}
                        imageUrl={image}
                        onClick={() => this.props.selectImage(index)}
                      />
                    ))}
                  </ProductGallery>
                  <ProductImage imageUrl={product.gallery[this.props.selectedImage]} />
                  <ProductInfo
                    product={product}
                    selectedCurrency={this.props.selectedCurrency}
                    selectedCurrencySymbol={this.props.selectedCurrencySymbol}
                    selectedAttributes={this.props.selectedAttributes}
                    selectAttribute={this.props.selectAttribute}
                    addProductToCart={this.props.addProductToCart}
                  />
                </>
              );
            }}
          </Query>
        </ProductWrapper>
      </Layout>
    );
  }
}

const ProductWithParams = (props) => <Product {...props} params={useParams()} />;

export default ProductWithParams;
