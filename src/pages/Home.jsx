import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFeaturedProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
  }, [dispatch]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Selamat Datang di PhoneShop
          </h1>
          <p className="text-xl mb-8">
            Solusi Lengkap Perbaikan dan Sparepart Handphone
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Beli Sekarang
            </Link>
            <Link
              to="/services"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Produk Unggulan</h2>
          <Link to="/products" className="text-primary hover:text-secondary">
            Lihat Semua →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      {/* Service Banner */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Layanan Perbaikan Profesional
              </h2>
              <p className="text-gray-600 mb-6">
                Kami menyediakan berbagai layanan perbaikan handphone dengan
                teknisi berpengalaman dan garansi resmi.
              </p>
              <Link
                to="/services"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Lihat Layanan
              </Link>
            </div>
            <img
              src="/images/service-banner.jpg"
              alt="Service"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
