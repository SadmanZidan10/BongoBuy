import { useParams, useNavigate } from "react-router-dom";
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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-32 text-gray-400">
          <p className="text-5xl mb-4">😕</p>
          <p className="text-lg font-semibold text-gray-600">Product not found!</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="rounded-2xl overflow-hidden border border-gray-200 h-80 md:h-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${badgeColors[product.category]}`}>
              {product.category}
            </span>

            <h1 className="text-2xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-sm text-gray-400">
              ⭐ {product.rating} ({product.reviews} reviews)
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <p className="text-3xl font-bold text-[#006A4E]">
              ৳ {product.price.toLocaleString()}
            </p>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-[#006A4E] hover:bg-[#004d38] text-white font-medium py-3 rounded-full transition"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
                className="flex-1 border-2 border-[#006A4E] text-[#006A4E] hover:bg-[#006A4E] hover:text-white font-medium py-3 rounded-full transition"
              >
                Buy Now
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;