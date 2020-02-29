import styled, { css } from "styled-components";

const columnItemStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameContainer = styled.span`
  ${columnItemStyles}
`;

export const QuantityContainer = styled.span`
  display: flex;
  ${columnItemStyles}
`;

export const PriceContainer = styled.span`
  ${columnItemStyles}
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const QuantityValueContainer = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
