import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const slides = [
  {
    id: 1,
    tag: "⭐ Top Pick",
    title: "Premium NBA Basketball",
    price: "৳ 4,500",
    productId: 19, 
    image:"https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&q=80"
  },

  {
    id: 2,
    tag: "🆕 New Arrival",
    title: "Running Sneakers Pro",
    price: "৳ 3,800",
    productId: 2,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=80",
  },
  {
    id: 3,
    tag: "🔥 Bestseller",
    title: "SG Complete Cricket Kit",
    price: "৳ 18,000",
    productId: 20,
    image:"https://plus.unsplash.com/premium_photo-1722351690086-b42310f14c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldCUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D"
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const goTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-80 md:h-[420px]">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                {slide.tag}
              </span>
              <h2 className="text-2xl font-bold mt-2">{slide.title}</h2>
              <p className="text-lg opacity-90">{slide.price}</p>
              <button
                onClick={() => navigate(`/product/${slide.productId}`)} // ✅ product detail e niye jay
                className="mt-3 bg-white text-gray-900 text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Shop Now →
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => goTo(current - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm border border-white/30 rounded-full w-9 h-9 flex items-center justify-center transition">
        <ChevronLeft size={18} />
      </button>
      <button onClick={() => goTo(current + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm border border-white/30 rounded-full w-9 h-9 flex items-center justify-center transition">
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 right-5 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;