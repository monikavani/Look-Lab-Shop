const ProductCard = ({ product, onAddToCart }) => {
  console.log(product);

  return (
    <div className="flex flex-col justify-between rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain rounded-lg mb-4" />
      <div>
        <h3 className="text-md font-bold line-clamp-1">{product.title}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full cursor-pointer mt-4 px-2 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
