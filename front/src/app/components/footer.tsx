const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <p className="text-white text-xl lg:text-2xl font-normal leading-relaxed">
            Follow us on IG, X and Spotify to know about new arrivals, sales,
            music news and more.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-orange-500 text-2xl font-bold">i</span>
            </div>
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-orange-500 text-2xl font-bold">X</span>
            </div>
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <span className="text-orange-500 text-2xl font-bold">S</span>
            </div>
          </div>
          <p className="text-orange-400 text-xl font-medium">@S.pinify</p>
        </div>
      </div>

      <section className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Spinify. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
