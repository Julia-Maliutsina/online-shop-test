import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from '@apollo/react-components';

import CATEGORIES_QUERY from 'api/getCategories';
import CURRENCIES_QUERY from 'api/getCurrencies';

import {
  MenuWrapper,
  MenuCategories,
  MenuCategory,
  Logo,
  Actions,
  Currency,
  Cart,
  Arrow,
  CurrencyButton,
  CartButton,
  CurrencySelector,
  CurrencyOption,
  CoverLayer,
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
                    <Link to={`/${category.name}`}>
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
            <CurrencyButton onClick={() => this.props.openCurrency()}>
              <Currency>{this.props.selectedCurrencySymbol}</Currency>
              <Arrow src={this.props.isCurrencyOpened ? arrowUpIcon : arrowDownIcon} />
            </CurrencyButton>
            <CurrencySelector display={this.props.isCurrencyOpened}>
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
            <Link to="/cart">
              <CartButton>
                <Cart src={cartIcon} />
              </CartButton>
            </Link>
          </Actions>
        </MenuWrapper>
        <CoverLayer
          display={this.props.isCurrencyOpened}
          onClick={() => this.props.openCurrency()}
        />
      </div>
    );
  }
}

export default Menu;
