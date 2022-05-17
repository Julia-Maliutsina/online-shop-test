import React from 'react';
import { Query } from '@apollo/react-components';

import PRODUCT_QUERY from 'api/getProduct';
import { findPriceInSelectedCurrency } from 'utils/findPrice';
import { arrowForwardIcon, arrowBackIcon, plusIcon, minusIcon } from 'images';
import { ATTRIBUTE_TYPE } from 'constants/attributes';

import {
  CartItemWrapper,
  ProductName,
  ProductBrand,
  ProductOptions,
  ProductOptionsTitle,
  ProductTextOption,
  ProductSwatchOption,
  ProductPrice,
  ProductInfo,
  ProductImage,
  Arrow,
  Quantity,
  ChangeQuantity,
  QuantityNumber,
} from './styled';

class CartItem extends React.Component {
  render() {
    return (
      <Query
        query={PRODUCT_QUERY}
        variables={{
          productId: this.props.productId,
        }}
      >
        {({ loading, data }) => {
          if (loading) return 'Loading...';
          const { product } = data;
          return (
            <CartItemWrapper>
              <ProductInfo>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductOptions>
                  <ProductPrice>
                    {this.props.currencySymbol}
                    {findPriceInSelectedCurrency(this.props.currency, product.prices)}
                  </ProductPrice>
                </ProductOptions>
                {product.attributes.map((attribute) => (
                  <ProductOptions key={attribute.id}>
                    <ProductOptionsTitle>{attribute.name}</ProductOptionsTitle>
                    {attribute.type === ATTRIBUTE_TYPE.text
                      ? attribute.items.map((item) => (
                          <ProductTextOption
                            key={item.id}
                            selected={this.props.selectedAttributes[attribute.name] === item.value}
                          >
                            {item.value}
                          </ProductTextOption>
                        ))
                      : attribute.items.map((item) => (
                          <ProductSwatchOption
                            color={item.value}
                            selected={this.props.selectedAttributes[attribute.name] === item.value}
                          />
                        ))}
                  </ProductOptions>
                ))}
              </ProductInfo>
              <Quantity>
                <ChangeQuantity onClick={() => this.props.increaseQuantity()}>
                  <img alt="more" src={plusIcon} />
                </ChangeQuantity>
                <QuantityNumber>{this.props.quantity}</QuantityNumber>
                <ChangeQuantity onClick={() => this.props.decreaseQuantity()}>
                  <img alt="less" src={minusIcon} />
                </ChangeQuantity>
              </Quantity>
              <ProductImage imageUrl={product.gallery[this.props.activeImage]}>
                {product.gallery.length > 1 && (
                  <>
                    <Arrow
                      src={arrowBackIcon}
                      onClick={() => this.props.changeActiveImage(-1, product.gallery.length - 1)}
                    />
                    <Arrow
                      src={arrowForwardIcon}
                      onClick={() => this.props.changeActiveImage(1, product.gallery.length - 1)}
                    />
                  </>
                )}
              </ProductImage>
            </CartItemWrapper>
          );
        }}
      </Query>
    );
  }
}

export default CartItem;
