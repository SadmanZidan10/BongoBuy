import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const badgeColors = {
  Shoes:   "bg-orange-50 text-orange-700",
  Watch:   "bg-green-50 text-green-700",
  Gadgets: "bg-rose-50 text-rose-700",
  Sports:  "bg-indigo-50 text-indigo-700",
  Perfume: "bg-purple-50 text-purple-700",
};

const TrendingProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredProducts = products.filter((_, index) => {
    return (
      (index >= 0 && index < 3) || 
      (index >= 5 && index < 9) || 
      (index >= 11 && index < 15)
    );
  });

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        🔥 Trending Products
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Most loved picks across all categories
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-emerald-400 transition-all duration-200 cursor-pointer group"
          >
            <div className="overflow-hidden h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColors[product.category] || "bg-gray-100"}`}>
                {product.category}
              </span>
              <p className="text-xs text-gray-400 mt-2">
                ⭐ {product.rating} ({product.reviews} reviews)
              </p>
              <h3 className="text-sm font-semibold text-gray-800 mt-1 truncate">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-3">
                <span className="text-emerald-600 font-bold text-base">
                  ৳ {product.price.toLocaleString()}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium px-4 py-2 rounded-full transition"
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;