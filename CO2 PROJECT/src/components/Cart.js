function Cart({
  cart,
  removeFromCart,
  total,
  discountedTotal,
}) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.product.id}>
          {item.product.title} x {item.quantity}
          {" = ₹"}
          {item.product.price * item.quantity}

          <button
            onClick={() =>
              removeFromCart(item.product.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <h3>
        After 10% Discount: ₹{discountedTotal}
      </h3>
    </div>
  );
}

export default Cart;