export const setData = (cartArray) => {
  if (process.client) {
    let string = JSON.stringify(cartArray);
    localStorage.setItem("Cart products", string);
  }
};

export const getData = () => {
  if (process.client) {
    let products = localStorage.getItem("Cart products");
    let allProducts = JSON.parse(products);
    return allProducts;
    // console.log(allProducts);
  }
};
