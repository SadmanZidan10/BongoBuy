import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { FaFootballBall, FaMobileAlt} from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { MdWatch } from "react-icons/md";


const categoriesList = [
  { id: "Sports",  icon: FaFootballBall },
  { id: "Shoes",   icon: GiRunningShoe  },
  { id: "Watch",   icon: MdWatch        },
  { id: "Gadgets", icon: FaMobileAlt    },
  
];

const badgeColors = {
  Shoes:   "bg-orange-50 text-orange-700",
  Watch:   "bg-green-50 text-green-700",
  Gadgets: "bg-rose-50 text-rose-700",
  Sports:  "bg-indigo-50 text-indigo-700",
}

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  
  const categoryFromUrl = searchParams.get("category") || "Sports";
  const [selected, setSelected] = useState(categoryFromUrl);

  
  useEffect(() => {
    const currentCat = searchParams.get("category");
    if (currentCat) {
      setSelected(currentCat);
    }
  }, [searchParams]);

  const handleCategoryClick = (id) => {
    setSelected(id);
    setSearchParams({ category: id }); 
  };

  const filteredProducts = products.filter((p) => p.category === selected);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Categories</h1>
      <p className="text-sm text-gray-500 mb-8">Select Products from Your Favourite Category</p>

      
      <div className="flex gap-3 flex-wrap mb-10">
        {categoriesList.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                selected === cat.id
                  ? "bg-[#006A4E] text-white border-[#006A4E]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#006A4E] hover:text-[#006A4E]"
              }`}
            >
              <Icon size={18} />
              <span>{cat.id}</span>
            </button>
          );
        })}
      </div>

      
      <div className="mb-6">
        {(() => {
          const selectedCat = categoriesList.find((c) => c.id === selected);
          const Icon = selectedCat?.icon || FaFootballBall; 
          return (
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Icon size={20} />
              {selected}
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({filteredProducts.length} products)
              </span>
            </h2>
          );
        })()}
      </div>

     
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#006A4E] transition-all duration-200 cursor-pointer group"
            >
              <div className="overflow-hidden h-48">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColors[product.category] || "bg-gray-100"}`}>
                  {product.category}
                </span>
                <p className="text-xs text-gray-400 mt-2">⭐ {product.rating} ({product.reviews} reviews)</p>
                <h3 className="text-sm font-semibold text-gray-800 mt-1 truncate">{product.name}</h3>
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
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-sm">No products found in this category</p>
        </div>
      )}
    </div>
  );
};

export default Categories;