export const PriceFormatter = (currency: string, price: number) => {
  const newPrice = (price / 100).toFixed(2).toString().replace('.', ',');

  return `${currency}${newPrice}`;
};
