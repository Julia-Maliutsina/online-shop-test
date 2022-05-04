import React from 'react';
import { Link } from 'react-router-dom';

import { PAGE } from 'constants/pages';
import { CURRENCY } from 'constants/currencies';

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
    selectedCurrency: 0,
  };

  openCurrency = () => {
    this.setState({ isCurrencyOpened: !this.state.isCurrencyOpened });
  };

  selectCurrency = (currencyToSelect) => {
    this.setState({ selectedCurrency: currencyToSelect });
  };

  render() {
    return (
      <MenuWrapper>
        <MenuCategories>
          <nav>
            <Link to="/tech">
              <MenuCategory selected={this.props.pagename === PAGE.tech}>Tech</MenuCategory>
            </Link>
            <Link to="/clothing">
              <MenuCategory selected={this.props.pagename === PAGE.clothing}>Clothing</MenuCategory>
            </Link>
            <Link to="/all">
              <MenuCategory selected={this.props.pagename === PAGE.all}>All</MenuCategory>
            </Link>
          </nav>
        </MenuCategories>
        <Logo src={logo} />
        <Actions>
          <CurrencyButton onClick={() => this.openCurrency()}>
            <Currency src={currencyIcon} />
            <Arrow src={this.state.isCurrencyOpened ? arrowUpIcon : arrowDownIcon} />
          </CurrencyButton>
          <CurrencySelector display={this.state.isCurrencyOpened}>
            {CURRENCY.map((currency, index) => (
              <CurrencyOption
                selected={this.state.selectedCurrency === index}
                onClick={() => this.selectCurrency(index)}
              >
                {currency}
              </CurrencyOption>
            ))}
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
