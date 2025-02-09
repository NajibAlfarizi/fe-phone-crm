import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-contain"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-600">Rp {item.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select
          value={item.quantity}
          onChange={handleQuantityChange}
          className="border rounded px-2 py-1"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
