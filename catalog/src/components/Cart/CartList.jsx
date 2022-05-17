import React from 'react';
import { connect } from 'react-redux';

import { countTax } from 'utils/countTax';
import { countFinalPrice } from 'utils/countFinalPrice';
import { TAX } from 'constants/tax';
import { EMPTY_CART } from 'constants/messages';

import { CartItem } from './CartItem';
import {
  OrderInfo,
  OrderInfoBlock,
  OrderButton,
  OrderInfoTitle,
  OrderInfoNumber,
  EmptyCart,
} from './styled';

class CartList extends React.Component {
  render() {
    return (
      <div>
        {this.props.productsInCart.length > 0 ? (
          <>
            {this.props.productsInCart.map((product, id) => (
              <CartItem
                key={product.id + id}
                productId={product.id}
                currency={this.props.currency}
                currencySymbol={this.props.currencySymbol}
                selectedAttributes={product.selectedAttributes}
                initialQuantity={product.quantity}
                prices={product.prices}
              />
            ))}
            <OrderInfo>
              <OrderInfoBlock>
                <OrderInfoTitle>Tax 21%:</OrderInfoTitle>
                <OrderInfoNumber>
                  {this.props.currencySymbol}
                  {countTax(this.props.productsInCart, this.props.currency, TAX)}
                </OrderInfoNumber>
              </OrderInfoBlock>
              <OrderInfoBlock>
                <OrderInfoTitle>Quantity:</OrderInfoTitle>
                <OrderInfoNumber>{this.props.quantityInCart}</OrderInfoNumber>
              </OrderInfoBlock>
              <OrderInfoBlock>
                <OrderInfoTitle>Total:</OrderInfoTitle>
                <OrderInfoNumber>
                  {this.props.currencySymbol}
                  {countFinalPrice(this.props.productsInCart, this.props.currency, TAX)}
                </OrderInfoNumber>
              </OrderInfoBlock>
              <OrderButton>Order</OrderButton>
            </OrderInfo>
          </>
        ) : (
          <EmptyCart>{EMPTY_CART}</EmptyCart>
        )}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productsInCart: state.productsInCart,
    quantityInCart: state.quantityInCart,
  };
};

export default connect(mapStateToProps)(CartList);
