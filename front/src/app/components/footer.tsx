import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-4">
          <h2 className="text-2xl lg:text-3xl font-hebbo font-semibold text-white">
            Stay tuned
          </h2>
          <p className="text-lg text-custume-orange leading-relaxed max-w-md">
            Follow us on IG, X and Spotify to discover new arrivals, sales, and
            the latest music news.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/"
              className="w-14 h-14 border border-custume-orange/40 bg-transparent rounded-xl flex items-center justify-center hover:bg-custume-orange/20 hover:text-white transition-colors"
            >
              <span className="text-custume-orange text-xl font-semibold">
                IG
              </span>
            </Link>
            <Link
              href="https://x.com/?lang=es"
              className="w-14 h-14 border border-custume-orange/40 bg-transparent rounded-xl flex items-center justify-center hover:bg-custume-orange/20 hover:text-white transition-colors"
            >
              <span className="text-custume-orange text-xl font-semibold">
                X
              </span>
            </Link>
            <Link
              href="https://open.spotify.com/"
              className="w-14 h-14 border border-custume-orange/40 bg-transparent rounded-xl flex items-center justify-center hover:bg-custume-orange/20 hover:text-white transition-colors"
            >
              <span className="text-custume-orange text-xl font-semibold">
                SP
              </span>
            </Link>
          </div>
          <p className="text-custume-orange text-lg font-medium tracking-wide">
            @S.pinify
          </p>
        </div>
      </div>

      <div className="relative w-1/2 mx-auto mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full"></div>
      </div>

      <section className="mt-10 text-center">
        <p className="text-gray-500 text-sm font-light">
          © 2024 Spinify. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
