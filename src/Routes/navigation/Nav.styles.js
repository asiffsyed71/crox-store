import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const NavLinks = styled(Link)`
  padding: 0 5px;
  cursor: pointer;
  font-weight: bold;
  color: black;
`;
