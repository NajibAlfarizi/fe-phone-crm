import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">
        <Link to={`/products/${product.id}`} className="hover:text-secondary">
          {product.name}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
