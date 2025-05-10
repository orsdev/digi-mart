export function getDiscountedPrice(
  price: number,
  discountPercentage: number,
): number {
  const validDiscount =
    discountPercentage >= 0 && discountPercentage <= 100
      ? discountPercentage
      : 0;

  const discount = price * (validDiscount / 100);
  const discountedPrice = price - discount;

  return discountedPrice;
}
