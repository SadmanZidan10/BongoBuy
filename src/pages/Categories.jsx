import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Sports",  icon: "🏅", count: 24, bg: "bg-indigo-50" },
  { id: 2, name: "Shoes",   icon: "👟", count: 18, bg: "bg-orange-50" },
  { id: 3, name: "Watch",   icon: "⌚", count: 12, bg: "bg-green-50"  },
  { id: 4, name: "Gadgets", icon: "📱", count: 31, bg: "bg-rose-50"   },
  
];

const BrowseCategory = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Browse by Category
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Pick a category and explore the best products
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => navigate(`/categories?cat=${cat.name}`)} // ✅ category name pathacchi
            className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-[#006A4E] hover:shadow-md transition-all duration-200 group"
          >
            <div className={`w-14 h-14 rounded-full ${cat.bg} flex items-center justify-center text-3xl`}>
              {cat.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#006A4E] transition">
              {cat.name}
            </span>
            <span className="text-xs text-gray-400">
              {cat.count} products
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategory;