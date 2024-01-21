const formatPrice = (price: number): string => {
  return `R${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export default formatPrice;
