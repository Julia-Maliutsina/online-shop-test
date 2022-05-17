import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { countFinalPrice } from 'utils/countFinalPrice';
import { TAX } from 'constants/tax';
import { EMPTY_CART } from 'constants/messages';

import { CartPopUpItem } from './CartPopUpItem';
import {
  CartPopUpList,
  CartPopUpTitle,
  CartPopUpQuantity,
  CartPopUpItems,
  TotalPrice,
  TotalPriceTitle,
  TotalPriceNumber,
  ViewBagButton,
  CheckOutButton,
} from './styled';

class CartPopUp extends React.Component {
  render() {
    return (
      <CartPopUpList display={this.props.display.toString()}>
        {this.props.quantityInCart > 0 ? (
          <div>
            <CartPopUpTitle>My Bag, {this.props.quantityInCart} </CartPopUpTitle>
            <CartPopUpQuantity>
              {this.props.quantityInCart > 1 ? 'items' : 'item'}
            </CartPopUpQuantity>
            <CartPopUpItems>
              {this.props.productsInCart.map((product, id) => (
                <CartPopUpItem
                  key={product.id + id}
                  productId={product.id}
                  currency={this.props.currency}
                  currencySymbol={this.props.currencySymbol}
                  selectedAttributes={product.selectedAttributes}
                  initialQuantity={product.quantity}
                  prices={product.prices}
                />
              ))}
            </CartPopUpItems>
            <TotalPrice>
              <TotalPriceTitle>Total</TotalPriceTitle>
              <TotalPriceNumber>
                {this.props.currencySymbol}
                {countFinalPrice(this.props.productsInCart, this.props.currency, TAX)}
              </TotalPriceNumber>
            </TotalPrice>
            <Link to="/cart">
              <ViewBagButton>View Bag</ViewBagButton>
            </Link>
            <CheckOutButton>Check Out</CheckOutButton>
          </div>
        ) : (
          <CartPopUpTitle>{EMPTY_CART}</CartPopUpTitle>
        )}
      </CartPopUpList>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    productsInCart: state.productsInCart,
    quantityInCart: state.quantityInCart,
  };
};

export default connect(mapStateToProps)(CartPopUp);
