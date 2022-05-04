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
