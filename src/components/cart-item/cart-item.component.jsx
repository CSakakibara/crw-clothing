import React from "react";

import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer className="name">{name}</NameContainer>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
