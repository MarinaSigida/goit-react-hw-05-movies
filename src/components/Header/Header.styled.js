import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderCSS = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: #4f0087;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const ListNav = styled.ul`
  display: flex;
  gap: 20px;
`;

const ItemNav = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bold;
}
`;

export { HeaderCSS, ListNav, ItemNav };