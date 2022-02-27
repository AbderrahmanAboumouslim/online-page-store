import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const Navbar = () => {
  const navLinks = ['home', 'products', 'faq', 'contact'];
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <ul>
        {navLinks.map(navLink => {
          return (
            <li>
              <Link to={`/${navLink}`}>{navLink}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

export default Navbar;
