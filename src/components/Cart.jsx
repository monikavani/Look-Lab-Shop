const Cart = ({ cart, onUpdateQuantity, onRemoveItem }) => {
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); 

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Add items to cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex justify-between">
                <img className="size-12" src={item.image} alt="photo"/>
                <div className="pl-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="ml-4 size-8 cursor-pointer"
                >
                  <img src="/delete.svg"/>
                </button>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Total:</h3>
            <p className="font-medium">${calculateTotal()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
