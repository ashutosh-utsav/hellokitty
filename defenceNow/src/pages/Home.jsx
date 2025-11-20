import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Next-Generation Fighter Jets: The Future of Air Dominance',
      category: 'Air World',
      excerpt: 'Exploring the cutting-edge technology and capabilities of sixth-generation fighter aircraft that will shape the future of aerial warfare.',
      image: 'https://placehold.co/1200x800/1a202c/eab308?text=Fighter+Jets&font=roboto',
      date: 'November 18, 2025',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Naval Power Shift: Analysis of Pacific Fleet Movements',
      category: 'Sea World',
      excerpt: 'Recent developments in naval deployments across the Pacific region signal strategic shifts in maritime defense postures.',
      image: 'https://placehold.co/1200x800/1a202c/eab308?text=Naval+Fleet&font=roboto',
      date: 'November 17, 2025',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'Space Defense Initiative: Protecting Satellite Infrastructure',
      category: 'Cosmic Trail',
      excerpt: 'Nations invest heavily in space defense capabilities to safeguard critical satellite systems from emerging threats.',
      image: 'https://placehold.co/1200x800/1a202c/eab308?text=Space+Defense&font=roboto',
      date: 'November 16, 2025',
      readTime: '12 min read'
    },
    {
      id: 9,
      title: 'Advanced Missile Defense Systems: New Capabilities Unveiled',
      category: 'Defence Frontline',
      excerpt: 'Latest generation of interceptor technology demonstrates unprecedented accuracy in recent testing phases.',
      image: 'https://placehold.co/1200x800/1a202c/eab308?text=Missile+Defense&font=roboto',
      date: 'November 15, 2025',
      readTime: '9 min read'
    },
    {
      id: 10,
      title: 'Indo-Pacific Security Framework: Strategic Partnerships Evolve',
      category: 'GeoPolitics Desk',
      excerpt: 'Regional alliances adapt to changing security landscape with enhanced cooperation mechanisms.',
      image: 'https://placehold.co/1200x800/1a202c/eab308?text=Geopolitics&font=roboto',
      date: 'November 14, 2025',
      readTime: '11 min read'
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: 'Global Arms Trade: 2025 Trends and Analysis',
      category: 'Global Game',
      excerpt: 'Comprehensive analysis of international arms sales and strategic partnerships shaping defense markets.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Arms+Trade&font=roboto',
      date: 'November 15, 2025'
    },
    {
      id: 5,
      title: 'Cybersecurity in Modern Warfare',
      category: 'Think Tank',
      excerpt: 'Expert insights on the evolving landscape of cyber threats and defense strategies.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Cybersecurity&font=roboto',
      date: 'November 14, 2025'
    },
    {
      id: 6,
      title: 'Defense Budget Allocations: Congressional Review',
      category: 'Congress',
      excerpt: 'Latest updates on defense spending proposals and legislative priorities.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Budget+Review&font=roboto',
      date: 'November 13, 2025'
    },
    {
      id: 7,
      title: 'Geopolitical Tensions in Eastern Europe',
      category: 'GeoPolitics Desk',
      excerpt: 'Strategic analysis of regional security dynamics and diplomatic developments.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Eastern+Europe&font=roboto',
      date: 'November 12, 2025'
    },
    {
      id: 8,
      title: 'International Defense Summit: Key Takeaways',
      category: 'Talks & Ties',
      excerpt: 'Major announcements and agreements from the latest international defense conference.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Defense+Summit&font=roboto',
      date: 'November 11, 2025'
    }
  ];

  const categories = [
    { name: 'Defence Frontline', abbr: 'DF', color: 'from-blue-600 to-blue-800' },
    { name: 'Cosmic Trail', abbr: 'CT', color: 'from-purple-600 to-purple-800' },
    { name: 'World Window', abbr: 'WW', color: 'from-green-600 to-green-800' },
    { name: 'GeoPolitics Desk', abbr: 'GPD', color: 'from-red-600 to-red-800' },
    { name: 'Talks & Ties', abbr: 'T&T', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Global Game', abbr: 'GG', color: 'from-indigo-600 to-indigo-800' },
    { name: 'Think Tank', abbr: 'TT', color: 'from-teal-600 to-teal-800' },
    { name: 'Congress', abbr: 'CG', color: 'from-gray-600 to-gray-800' },
    { name: 'Truth Line', abbr: 'TL', color: 'from-emerald-600 to-emerald-800' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Featured Article Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main Featured Article */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg">
                <img
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <span className="inline-block bg-gold-600 text-navy-900 px-3 py-1 rounded text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                    FEATURED
                  </span>
                  <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                    {featuredNews[0].title}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-200 mb-2 sm:mb-3 line-clamp-2">
                    {featuredNews[0].excerpt}
                  </p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-300">
                    <span>{featuredNews[0].category}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredNews[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredNews[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Featured Articles */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {featuredNews.slice(1, 3).map((article) => (
                <article key={article.id} className="group cursor-pointer">
                  <div className="flex gap-3 sm:gap-4 bg-white hover:bg-gray-50 transition-colors rounded-lg overflow-hidden border border-gray-200">
                    <div className="relative w-32 sm:w-40 md:w-48 h-28 sm:h-32 flex-shrink-0 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 py-2 sm:py-3 pr-3 sm:pr-4">
                      <span className="inline-block text-xs font-semibold text-gold-600 mb-1 sm:mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-navy-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-gold-600 transition">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span className="hidden sm:inline">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Top Stories</h2>
          <Link to="/category" className="text-gold-600 hover:text-gold-700 font-semibold flex items-center text-sm sm:text-base">
            View All
            <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredNews.slice(0, 6).map((article) => (
            <article key={article.id} className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 group overflow-hidden">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-gold-600 text-navy-900 px-2 py-1 sm:px-3 rounded text-xs sm:text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <span className="truncate">{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="hidden sm:inline">{article.readTime}</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-gold-600 transition">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-gold-600 hover:text-gold-700 font-semibold flex items-center text-sm sm:text-base"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">
            Coverage Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-4 sm:p-5 md:p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gold-200 group-hover:text-gold-100 transition">
                  {category.abbr}
                </div>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 sm:mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {latestNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                  <span className="bg-navy-900 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-gold-600 hover:text-gold-700 font-semibold text-xs sm:text-sm flex items-center"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
