import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return <div className="text-center py-16">Produk tidak ditemukan</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`min-w-[100px] h-24 border-2 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-2xl font-bold text-primary">
            Rp {product.price.toLocaleString()}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span>Jumlah:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-20 px-3 py-2 border rounded"
              />
            </div>

            <button
              onClick={() => dispatch(addToCart({ ...product, quantity }))}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors w-full"
            >
              Tambah ke Keranjang
            </button>
          </div>

          {/* Product Specs */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Spesifikasi Produk</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-600">{key}</div>
                  <div className="text-gray-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Deskripsi Produk</h2>
        <div className="prose max-w-none">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
