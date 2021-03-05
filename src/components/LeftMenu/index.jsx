import React from 'react';

import { push as Menu } from 'react-burger-menu';
import { styles, FaHomeIcon, FaUserIcon } from '../../styles/BurgerMenu';
import { MenuLink } from './styled';

export default function LeftMenu() {
  return (
    <Menu styles={styles}>
      <MenuLink id="home" href="/">
        <FaHomeIcon />
        Home
      </MenuLink>
      <MenuLink id="about" href="/about">
        <FaUserIcon />
        Perfil
      </MenuLink>
    </Menu>
  );
}
