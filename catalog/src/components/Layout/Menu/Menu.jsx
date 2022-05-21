import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from '@apollo/react-components';
import { connect } from 'react-redux';

import CATEGORIES_QUERY from 'api/getCategories';

import { CurrencyPopUp } from '../CurrencyOverlay';
import { CartPopUp } from '../CartOverlay';

import {
  MenuWrapper,
  MenuCategories,
  MenuCategory,
  Logo,
  Actions,
  Arrow,
  Currency,
  CurrencyButton,
  Cart,
  CartBadge,
  CartButton,
} from './styled';
import { arrowDownIcon, arrowUpIcon, cartIcon, logo } from '../../../images';
class Menu extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper>
          <MenuCategories>
            <nav>
              <Query query={CATEGORIES_QUERY}>
                {({ loading, data }) => {
                  if (loading) return 'Loading...';
                  const { categories } = data;
                  return categories.map((category) => (
                    <Link key={category.name} to={`/${category.name}`}>
                      <MenuCategory selected={this.props.pagename === category.name}>
                        {category.name}
                      </MenuCategory>
                    </Link>
                  ));
                }}
              </Query>
            </nav>
          </MenuCategories>
          <Logo src={logo} />
          <Actions>
            <CurrencyButton onClick={() => this.props.toggleCurrency()}>
              <Currency>{this.props.selectedCurrencySymbol}</Currency>
              <Arrow src={this.props.isCurrencyOpened ? arrowUpIcon : arrowDownIcon} />
            </CurrencyButton>
            <CurrencyPopUp
              display={this.props.isCurrencyOpened}
              selectCurrency={this.props.selectCurrency}
            />
            <CartButton onClick={() => this.props.toggleCart()}>
              <Cart src={cartIcon} />
              {this.props.quantityInCart > 0 && <CartBadge>{this.props.quantityInCart}</CartBadge>}
            </CartButton>
            <CartPopUp
              display={this.props.isCartOpened}
              currency={this.props.selectedCurrency}
              currencySymbol={this.props.selectedCurrencySymbol}
            />
          </Actions>
        </MenuWrapper>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    quantityInCart: state.quantityInCart,
  };
};

export default connect(mapStateToProps)(Menu);
