import { useState } from "react";
import { Search, Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery.trim()}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        <Link to="/" className="text-xl font-bold whitespace-nowrap tracking-tight">
          🛒 <span className="text-[#F42A41]">Bongo</span><span className="text-[#006A4E]">Buy</span>
        </Link>

    
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center border-2 border-gray-200 rounded-full px-3 py-1.5 gap-2 bg-gray-50 w-44 focus-within:border-[#006A4E] transition-all"
        >
          <Search
            size={13}
            className="text-gray-400 flex-shrink-0 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-xs text-gray-700"
          />
        </form>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-gray-600 hover:text-[#006A4E] transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-[#006A4E] transition">About</Link>
          <Link to="/categories" className="text-gray-600 hover:text-[#006A4E] transition">Categories</Link>

          <Link to="/cart" className="relative text-gray-600 hover:text-[#006A4E] transition">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F42A41] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/categories" className="bg-[#006A4E] hover:bg-[#004d38] text-white text-xs font-semibold px-5 py-2 rounded-full transition">
            Shop Now
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative text-gray-600">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F42A41] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t border-gray-100">
          <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 gap-2 bg-gray-50 mt-2">
            <Search size={13} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none text-xs text-gray-700"
            />
          </form>
          <Link to="/" className="text-gray-700 hover:text-[#006A4E] text-sm font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#006A4E] text-sm font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/categories" className="text-gray-700 hover:text-[#006A4E] text-sm font-medium" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/categories" className="text-center bg-[#006A4E] text-white text-sm font-medium py-2 rounded-full" onClick={() => setMenuOpen(false)}>Shop Now</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;