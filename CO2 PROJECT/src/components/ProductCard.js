import Card from "./Card";

function ProductCard({ product, addToCart }) {
  return (
    <Card>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </Card>
  );
}

export default ProductCard;