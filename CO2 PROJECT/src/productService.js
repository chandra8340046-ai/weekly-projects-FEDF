export function getProducts() {
  return Promise.resolve([
    {
      id: 1,
      title: "Phone",
      price: 20000,
      category: "Electronics",
    },
    {
      id: 2,
      title: "Laptop",
      price: 60000,
      category: "Electronics",
    },
    {
      id: 3,
      title: "Charger",
      price: 1000,
      category: "Accessories",
    },
  ]);
}