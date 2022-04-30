import React from 'react';
import { Link } from 'react-router-dom';

import { PAGE } from 'constants/pages';

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
} from './styled';
import { arrowIcon, cartIcon, currencyIcon, logo } from '../../../images';

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <MenuCategories>
          <nav>
            <Link to="/women">
              <MenuCategory selected={this.props.pagename === PAGE.women}>Women</MenuCategory>
            </Link>
            <Link to="/men">
              <MenuCategory selected={this.props.pagename === PAGE.men}>Men</MenuCategory>
            </Link>
            <Link to="/kids">
              <MenuCategory selected={this.props.pagename === PAGE.kids}>Kids</MenuCategory>
            </Link>
          </nav>
        </MenuCategories>
        <Logo src={logo} />
        <Actions>
          <CurrencyButton>
            <Currency src={currencyIcon} />
            <Arrow src={arrowIcon} />
          </CurrencyButton>
          <CartButton>
            <Cart src={cartIcon} />
          </CartButton>
        </Actions>
      </MenuWrapper>
    );
  }
}

export default Menu;
