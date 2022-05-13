import React from 'react';
import { connect } from 'react-redux';

import { countTax } from 'utils/countTax';
import { countFinalPrice } from 'utils/countFinalPrice';

import { CartItem } from './CartItem';
import { OrderInfo, OrderInfoBlock, OrderButton, OrderInfoTitle, OrderInfoNumber } from './styled';

class CartList extends React.Component {
  render() {
    return (
      <div>
        {this.props.productsInCart.map((product) => (
          <CartItem
            key={product.id}
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
              {countTax(this.props.productsInCart, this.props.currency, 21)}
            </OrderInfoNumber>
          </OrderInfoBlock>
          <OrderInfoBlock>
            <OrderInfoTitle>Quantity:</OrderInfoTitle>
            <OrderInfoNumber>
              {this.props.productsInCart.reduce(
                (quantity, product) => quantity + product.quantity,
                0,
              )}
            </OrderInfoNumber>
          </OrderInfoBlock>
          <OrderInfoBlock>
            <OrderInfoTitle>Total:</OrderInfoTitle>
            <OrderInfoNumber>
              {this.props.currencySymbol}
              {countFinalPrice(this.props.productsInCart, this.props.currency, 21)}
            </OrderInfoNumber>
          </OrderInfoBlock>
          <OrderButton>Order</OrderButton>
        </OrderInfo>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productsInCart: state.productsInCart,
  };
};

export default connect(mapStateToProps)(CartList);
