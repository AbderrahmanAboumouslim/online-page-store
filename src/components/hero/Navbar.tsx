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

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  position: static;
  height: 156px;
  left: 0px;
  top: 0px;

  width: 90vw;
  margin: 0 auto;
  max-width: 1070px;

  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: gray;
      font-size: 1rem;
      letter-spacing: 0.25rem;
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid pink;
      }
    }
  }
`;

export default Navbar;
