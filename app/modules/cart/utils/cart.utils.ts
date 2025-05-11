import { IProduct } from "@/app/core/shared/types";
import { ICart } from "../types/cart.type";
import { getDiscountedPrice } from "@/app/core/shared/utils";

type AddItemProps = {
  itemToBeAdded: IProduct;
  cartItems: Array<ICart>;
};

export class ShoppingCart {
  /**
   * Adds an item to the cart.
   *
   * @param {ProductType} itemToBeAdded - The product to be added to the cart.
   * @param {Array<ICart>} cartItems - The current items in the cart.
   * @returns {Array<ICart>} - The updated cart items after adding the new item.
   */
  static addItemToCart = ({ itemToBeAdded, cartItems }: AddItemProps) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === itemToBeAdded.id);

    // Update the cart items based on whether the item is already in the cart
    const newCartItems = existingItem
      ? cartItems.map((item) => {
          // If the item exists, update its quantity
          const newQuantity = existingItem.quantity + 1;

          return item.id === existingItem.id
            ? {
                ...item,
                quantity: newQuantity,
              }
            : item;
        })
      : [
          // If the item doesn't exist, add it to the cart with quantity 1
          ...cartItems,
          {
            ...itemToBeAdded,
            quantity: 1,
          },
        ];

    return newCartItems;
  };

  /**
   * Removes an item from the cart.
   *
   * @param {number} itemToBeClearId - The ID of the item to be removed from the cart.
   * @param {Array<ICart>} cartItems - The current items in the cart.
   * @returns {Array<ICart>} - The updated cart items after removing the specified item.
   */
  static removeItemFromCart = (
    itemToBeClearId: number,
    cartItems: Array<ICart>,
  ) => {
    // Filter out the item to be removed from the cart
    const newCartItems = cartItems.filter(
      (item) => item.id !== itemToBeClearId,
    );
    return newCartItems;
  };

  /**
   * Reduces the quantity of a specific item in the cart.
   *
   * @param {number} itemId - The ID of the item whose quantity is to be reduced.
   * @param {Array<ICart>} cartItems - The current items in the cart.
   * @returns {Array<ICart>} - The updated cart items after reducing the quantity.
   */
  static reduceItemQty = (itemId: number, cartItems: ICart[]) => {
    // Find the item in the cart
    const existingItem = cartItems.find((item) => item.id === itemId);
    let newCartItems;

    if (existingItem && existingItem.quantity > 1) {
      // If the item exists and its quantity is more than 1, reduce the quantity
      newCartItems = cartItems.map((item) => {
        const newQuantity = existingItem.quantity - 1;
        return item.id === itemId ? { ...item, quantity: newQuantity } : item;
      });
      return newCartItems;
    } else {
      // If the item doesn't exist or its quantity is 1, return the current cart items
      return cartItems;
    }
  };

  /**
   * Check if item in in cart
   *
   * @param {number} itemId - The ID of the item in the cart.
   * @param {Array<ICart>} cartItems - The current items in the cart.
   * @returns {Boolean}
   */
  static isInCart = (itemId: number, cartItems: ICart[]) => {
    // Find the item in the cart
    const existingItem = cartItems.find((item) => item.id === itemId);
    return !!existingItem;
  };

  /**
   * Increases the quantity of a specific item in the cart.
   *
   * @param {number} itemId - The ID of the item whose quantity is to be increased.
   * @param {Array<ICart>} cartItems - The current items in the cart.
   * @returns {Array<ICart>} - The updated cart items after increasing the quantity.
   */
  static increaseItemQty = (itemId: number, cartItems: ICart[]) => {
    // Find the item in the cart
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (!existingItem) return cartItems;

    // If the item exists, increase its quantity
    const newCartItems = cartItems.map((item) => {
      const newQuantity = existingItem.quantity + 1;
      return item.id === itemId ? { ...item, quantity: newQuantity } : item;
    });
    return newCartItems;
  };

  /**
   * Calculates the subtotal of the items in the shopping cart, taking into account quantity and any discounts applied.
   * @param {ICart[]} items - Array of cart items.
   * @returns {number} - The subtotal of the items in the shopping cart.
   */
  static calculateTotal = (items: ICart[]) => {
    return items?.reduce((accumulator, item) => {
      const sum =
        item.quantity *
        getDiscountedPrice(
          item.price as number,
          item.discountPercentage as number,
        );

      accumulator += sum;
      return accumulator;
    }, 0);
  };
}
