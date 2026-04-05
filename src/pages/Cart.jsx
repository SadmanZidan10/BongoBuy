import { useNavigate } from "react-router-dom";  
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate(); 
  const { cartItems, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">🛒 Your Cart</h1>
        <p className="text-sm text-gray-500 mb-8">{totalItems} items in your cart</p>
        {cartItems.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">🛒</p>
            <p className="text-lg font-semibold text-gray-500">Your cart is empty!</p>
            <p className="text-sm mt-1">Go add some products 😊</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{item.category}</p>
                    <p className="text-sm font-bold text-[#006A4E] mt-1">
                      ৳ {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 border border-red-200 px-3 py-1 rounded-full transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total ({totalItems} items)</p>
                <p className="text-2xl font-bold text-[#006A4E]">
                  ৳ {totalPrice.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => navigate("/checkout")}  // ✅ add kora hoyeche
                className="bg-[#006A4E] hover:bg-[#004d38] text-white font-medium px-8 py-3 rounded-full transition"
              >
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;