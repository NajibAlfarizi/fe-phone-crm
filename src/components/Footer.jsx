const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PhoneShop</h3>
            <p className="text-gray-400">
              Solusi terbaik untuk perbaikan dan kebutuhan handphone Anda
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Service Handphone
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Beli Sparepart
                </a>
              </li>
              <li>
                <a
                  href="/checkout"
                  className="hover:text-primary transition-colors"
                >
                  Checkout
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <p className="text-gray-400">Jl. Teknologi No. 123</p>
            <p className="text-gray-400">contact@phoneshop.com</p>
            <p className="text-gray-400">+62 812 3456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PhoneShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
