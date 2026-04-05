import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const badgeColors = {
  Shoes:   "bg-orange-50 text-orange-700",
  Watch:   "bg-green-50 text-green-700",
  Gadgets: "bg-rose-50 text-rose-700",
  Sports:  "bg-indigo-50 text-indigo-700",
  Perfume: "bg-purple-50 text-purple-700",
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Search Results
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {results.length > 0
            ? `${results.length} results found for "${query}"`
            : `No results found for "${query}"`}
        </p>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#006A4E] transition-all duration-200 cursor-pointer group"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColors[product.category]}`}>
                    {product.category}
                  </span>
                  <p className="text-xs text-gray-400 mt-2">
                    ⭐ {product.rating} ({product.reviews} reviews)
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800 mt-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#006A4E] font-bold text-base">
                      ৳ {product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-[#006A4E] hover:bg-[#004d38] text-white text-xs font-medium px-4 py-2 rounded-full transition"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-semibold text-gray-500">No products found!</p>
            <p className="text-sm mt-1">Try searching with a different keyword</p>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;