import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10">

        <div>
          <h2 className="text-xl font-bold mb-3 text-red-600">
            🛒 Bongo<span className="text-green-500">Buy</span>
          </h2>
          <p className="text-xs text-white/45 leading-relaxed mb-5">
            বাংলাদেশের মানুষের জন্য, বাংলাদেশের মাটি থেকে গড়ে ওঠা
            বিশ্বস্ত শপিং প্ল্যাটফর্ম।
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#F42A41] hover:text-white transition-all"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs text-white/40 tracking-widest font-medium mb-5">
            QUICK LINKS
          </p>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs text-white/40 tracking-widest font-medium mb-5">
            CONTACT
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <span className="text-sm mt-0.5">📧</span>
              <span className="text-xs text-white/55 leading-relaxed">
                support@bongobuy.com.bd
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sm mt-0.5">📞</span>
              <span className="text-xs text-white/55 leading-relaxed">
                +880 1700-000000
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sm mt-0.5">📍</span>
              <span className="text-xs text-white/55 leading-relaxed">
                Gulshan-1, Dhaka-1212,
                <br />
                Bangladesh
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-white/40 tracking-widest font-medium mb-5">
            NEWSLETTER
          </p>
          <p className="text-xs text-white/45 leading-relaxed mb-4">
            নতুন পণ্য ও অফার সবার আগে পেতে সাবস্ক্রাইব করুন।
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="আপনার ইমেইল..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder:text-white/30 outline-none focus:border-white/30 transition"
            />
            <button className="bg-[#F42A41] hover:bg-[#d42438] text-white text-xs font-medium px-4 py-2 rounded-full transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/30">
          © 2026{" "}
          <span className="text-[#F42A41]">
            Bongo<span className="text-green-500">Buy</span>
          </span>
          . All rights reserved.
        </p>
        <p className="text-xs text-white/25">🇧🇩 Made with ❤️ in Bangladesh</p>
      </div>
    </footer>
  );
};

export default Footer;