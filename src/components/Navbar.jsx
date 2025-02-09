import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            PhoneShop
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/products" className="hover:text-secondary">
              Products
            </Link>
            <Link to="/services" className="hover:text-secondary">
              Services
            </Link>
            <Link to="/cart" className="relative hover:text-secondary">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-accent text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
