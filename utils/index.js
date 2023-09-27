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

export const formatDate = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [yyyy, mm, dd] = inputDate.split("-");
  const month = months[parseInt(mm, 10) - 1];

  return `${month} ${dd}, ${yyyy}`;
};
