import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-32 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        <Link to={`/services/${service.id}`} className="hover:text-secondary">
          {service.name}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary">
          Rp {service.price.toLocaleString()}
        </span>
        <button
          onClick={() => dispatch(addToCart(service))}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          Book Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
