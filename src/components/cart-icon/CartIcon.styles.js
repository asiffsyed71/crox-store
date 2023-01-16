import styled from "styled-components";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingCartIcon = styled(ShoppingBagIcon)`
  width: 32px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 10px;
`;
