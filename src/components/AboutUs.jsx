const team = [
  {
    name: "Sadman Faiaz Zidan",
    role: "CEO & Co-Founder",
    initial: "Zidan",
    color: "bg-[#006A4E]",
    quote:
      "BongoBuy is built to redefine how people shop — Simple, Smart and User-First.",
  },
];

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "5K+", label: "Products" },
  { number: "64", label: "Districts" },
  { number: "4.8★", label: "Rating" },
];

const AboutUs = () => {
  return (
    <section className="py-14 max-w-6xl mx-auto px-4">

      <div className="bg-gradient-to-r from-[#598206] to-[#b91c1c] rounded-3xl px-8 py-16 text-center mb-10 shadow-lg">
        <h1 className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          BongoBuy isn’t just an eCommerce platform, it’s a step towards smarter and simpler shopping for everyone.
        </h1>
      </div>

      <div className="mb-14 text-center">
        <h1 className="text-xs font-semibold text-[#006A4E] tracking-widest mb-6 uppercase">
          Founder
        </h1>

        <div className="flex justify-center">
          {team.map((member, i) => (
            <div
              key={i}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full ${member.color} text-white text-lg font-bold flex items-center justify-center mx-auto mb-4 shadow`}
                >
                  {member.initial}
                </div>

                <p className="text-base font-semibold text-gray-800">
                  {member.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {member.role}
                </p>
              </div>

              <div className="h-[1px] bg-gray-100"></div>

              <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-gray-100">
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  “{member.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#006A4E] p-8 rounded-3xl text-white shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-4">🎯</div>
          <p className="text-xs opacity-60 tracking-widest mb-2">MISSION</p>
          <h3 className="text-xl font-bold mb-3">আমাদের লক্ষ্য</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            বাংলাদেশের প্রতিটি ঘরে সেরা পণ্য সাশ্রয়ী মূল্যে পৌঁছে দেওয়া।
            আমরা বিশ্বাস করি প্রযুক্তি দিয়ে দেশের মানুষের জীবন সহজ করা সম্ভব।
          </p>
        </div>

        <div className="bg-[#F42A41] p-8 rounded-3xl text-white shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-4">🌟</div>
          <p className="text-xs opacity-60 tracking-widest mb-2">VISION</p>
          <h3 className="text-xl font-bold mb-3">আমাদের স্বপ্ন</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            বাংলাদেশের এক নম্বর ই-কমার্স প্ল্যাটফর্ম হওয়া এবং দেশীয় উদ্যোক্তাদের জন্য একটি বিশ্বমানের মার্কেটপ্লেস তৈরি করা।
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl py-6 text-center shadow-sm hover:shadow-md transition"
          >
            <p className="text-2xl font-bold text-[#006A4E]">
              {stat.number}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutUs;