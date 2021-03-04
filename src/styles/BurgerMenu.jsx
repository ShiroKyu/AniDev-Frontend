import { FaHome, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#7a7966',
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
  },
  bmItem: {
    padding: '1rem',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',

    fontSize: '1.5rem',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export const FaHomeIcon = styled(FaHome)`
  color: 'rgba(20, 19, 19, 0.712)';
  margin-right: 1rem;
  margin-left: -1rem;
`;

export const FaUserIcon = styled(FaUser)`
  color: 'rgba(20, 19, 19, 0.712)';
  margin-right: 1rem;
  margin-left: -1rem;
`;
