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
import { arrowDownIcon, arrowUpIcon, cartIcon, currencyIcon, logo } from '../../../images';
class Menu extends React.Component {
  state = {
    isCurrencyOpened: false,
    selectedCurrency: 'USD',
  };

  openCurrency = () => {
    this.setState({ isCurrencyOpened: !this.state.isCurrencyOpened });
  };

  selectCurrency = (currencyToSelect) => {
    this.setState({ selectedCurrency: currencyToSelect, isCurrencyOpened: false });
  };

  render() {
    return (
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
          <CurrencyButton onClick={() => this.openCurrency()}>
            <Currency src={currencyIcon} />
            <Arrow src={this.state.isCurrencyOpened ? arrowUpIcon : arrowDownIcon} />
          </CurrencyButton>
          <CurrencySelector display={this.state.isCurrencyOpened}>
            <Query query={CURRENCIES_QUERY}>
              {({ loading, data }) => {
                if (loading) return 'Loading...';
                const { currencies } = data;
                return currencies.map((currency) => (
                  <CurrencyOption
                    selected={this.state.selectedCurrency === currency.label}
                    onClick={() => this.selectCurrency(currency.label)}
                  >
                    {currency.symbol} {currency.label}
                  </CurrencyOption>
                ));
              }}
            </Query>
          </CurrencySelector>
          <CartButton>
            <Cart src={cartIcon} />
          </CartButton>
        </Actions>
        <CoverLayer display={this.state.isCurrencyOpened} onClick={() => this.openCurrency()} />
      </MenuWrapper>
    );
  }
}

export default Menu;
