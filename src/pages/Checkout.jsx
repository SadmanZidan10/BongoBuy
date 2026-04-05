import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalItems, totalPrice } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cash",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim())    newErrors.name    = "Name is required";
    if (!form.email.trim())   newErrors.email   = "Email is required";
    if (!form.phone.trim())   newErrors.phone   = "Phone is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  
  if (submitted) {
    return (
      <div>
        <Navbar />
        <div className="max-w-lg mx-auto px-4 py-24 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
          <p className="text-sm text-gray-500 mb-1">Thank you, <span className="font-semibold text-[#006A4E]">{form.name}</span>!</p>
          <p className="text-sm text-gray-500 mb-6">Your order of <span className="font-semibold">৳ {totalPrice.toLocaleString()}</span> has been confirmed.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#006A4E] hover:bg-[#004d38] text-white font-medium px-8 py-3 rounded-full transition"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  
  if (cartItems.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-24 text-gray-400">
          <p className="text-5xl mb-4">🛒</p>
          <p className="text-lg font-semibold text-gray-500">Your cart is empty!</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-[#006A4E] text-white px-6 py-2 rounded-full text-sm"
          >
            Go Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">

        <h1 className="text-2xl font-bold text-gray-800 mb-1">Checkout</h1>
        <p className="text-sm text-gray-500 mb-8">Fill in your details to place the order</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

         
          <div className="flex flex-col gap-5">

            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Sadman"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${
                  errors.name
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#006A4E]"
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

          
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="sadman@email.com"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${
                  errors.email
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#006A4E]"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

          
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="01812345678"
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#006A4E]"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="House 12, Road 5, Dhanmondi, Dhaka"
                rows={3}
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition resize-none ${
                  errors.address
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#006A4E]"
                }`}
              />
              {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
            </div>

           
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Payment Method
              </label>
              <div className="flex flex-col gap-3">

                <label className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition ${
                  form.payment === "cash" ? "border-[#006A4E] bg-green-50" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={form.payment === "cash"}
                    onChange={handleChange}
                    className="accent-[#006A4E]"
                  />
                  <span className="text-lg">💵</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Cash on Delivery</p>
                    <p className="text-xs text-gray-400">Pay when you receive your order</p>
                  </div>
                </label>

                <label className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition ${
                  form.payment === "bkash" ? "border-[#006A4E] bg-green-50" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="bkash"
                    checked={form.payment === "bkash"}
                    onChange={handleChange}
                    className="accent-[#006A4E]"
                  />
                  <span className="text-lg">📱</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">bKash</p>
                    <p className="text-xs text-gray-400">Pay via bKash mobile banking</p>
                  </div>
                </label>

                <label className={`flex items-center gap-3 border rounded-xl px-4 py-3 cursor-pointer transition ${
                  form.payment === "nagad" ? "border-[#006A4E] bg-green-50" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="nagad"
                    checked={form.payment === "nagad"}
                    onChange={handleChange}
                    className="accent-[#006A4E]"
                  />
                  <span className="text-lg">💳</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Nagad</p>
                    <p className="text-xs text-gray-400">Pay via Nagad mobile banking</p>
                  </div>
                </label>

              </div>
            </div>

          </div>

         
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-base font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-800 truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs font-semibold text-[#006A4E]">
                      ৳ {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Items ({totalItems})</span>
                  <span>৳ {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-800 mt-2">
                  <span>Total</span>
                  <span className="text-[#006A4E]">৳ {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-[#006A4E] hover:bg-[#004d38] text-white font-medium py-3 rounded-full transition"
              >
                Place Order →
              </button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;