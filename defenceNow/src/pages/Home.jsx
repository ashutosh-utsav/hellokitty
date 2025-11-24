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

  const airWorldNews = [
    {
      id: 11,
      title: 'Fifth-Generation Fighter Jets: Combat Readiness Assessment',
      category: 'Air World',
      excerpt: 'Comprehensive evaluation of latest fighter aircraft performance in modern combat scenarios.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Fighter+Jets&font=roboto',
      date: 'November 20, 2025',
      readTime: '9 min read'
    },
    {
      id: 12,
      title: 'Advanced Aerial Refueling Technology Enhances Range',
      category: 'Air World',
      excerpt: 'New refueling systems extend operational capabilities of modern air forces.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Aerial+Refueling&font=roboto',
      date: 'November 19, 2025',
      readTime: '7 min read'
    },
    {
      id: 13,
      title: 'Stealth Bomber Program Reaches New Milestone',
      category: 'Air World',
      excerpt: 'Next-generation stealth aircraft demonstrates unprecedented penetration capabilities.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Stealth+Bomber&font=roboto',
      date: 'November 18, 2025',
      readTime: '8 min read'
    },
    {
      id: 14,
      title: 'Air Defense Systems Integration: Multi-Layer Protection',
      category: 'Air World',
      excerpt: 'Integrated air defense networks provide comprehensive coverage against aerial threats.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Air+Defense&font=roboto',
      date: 'November 17, 2025',
      readTime: '6 min read'
    }
  ];

  const seaWorldNews = [
    {
      id: 15,
      title: 'Advanced Submarine Technology Revolutionizes Naval Warfare',
      category: 'Sea World',
      excerpt: 'New stealth submarine capabilities enable unprecedented underwater operations.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Submarine&font=roboto',
      date: 'November 20, 2025',
      readTime: '7 min read'
    },
    {
      id: 16,
      title: 'Aircraft Carrier Strike Group Deployment Strategy',
      category: 'Sea World',
      excerpt: 'Naval forces demonstrate power projection capabilities in strategic waters.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Aircraft+Carrier&font=roboto',
      date: 'November 19, 2025',
      readTime: '9 min read'
    },
    {
      id: 17,
      title: 'Naval Drone Technology: Autonomous Surface Vessels',
      category: 'Sea World',
      excerpt: 'Unmanned surface vehicles enhance maritime surveillance and combat capabilities.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Naval+Drones&font=roboto',
      date: 'November 18, 2025',
      readTime: '8 min read'
    },
    {
      id: 18,
      title: 'Maritime Security Operations in Critical Shipping Lanes',
      category: 'Sea World',
      excerpt: 'Naval patrols ensure safe passage through vital international waterways.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Maritime+Security&font=roboto',
      date: 'November 17, 2025',
      readTime: '6 min read'
    }
  ];

  const aeroWorldNews = [
    {
      id: 19,
      title: 'Hypersonic Missile Development: Strategic Implications',
      category: 'Aero World',
      excerpt: 'Analysis of emerging hypersonic weapons technology and its impact on global defense.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Hypersonic&font=roboto',
      date: 'November 20, 2025',
      readTime: '8 min read'
    },
    {
      id: 20,
      title: 'Space-Based Reconnaissance Satellites Enhance Intelligence',
      category: 'Aero World',
      excerpt: 'Advanced satellite systems provide real-time intelligence and surveillance capabilities.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Satellites&font=roboto',
      date: 'November 19, 2025',
      readTime: '7 min read'
    },
    {
      id: 21,
      title: 'Drone Swarm Technology: Coordinated Aerial Operations',
      category: 'Aero World',
      excerpt: 'Autonomous drone formations demonstrate advanced tactical coordination.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Drone+Swarm&font=roboto',
      date: 'November 18, 2025',
      readTime: '9 min read'
    },
    {
      id: 22,
      title: 'Advanced Rocket Propulsion Systems Development',
      category: 'Aero World',
      excerpt: 'New propulsion technologies enable faster and more efficient aerospace systems.',
      image: 'https://placehold.co/800x600/1a202c/eab308?text=Rocket+Tech&font=roboto',
      date: 'November 17, 2025',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { name: 'Defence Frontline', abbr: 'DF', color: 'from-blue-600 to-blue-800' },
    { name: 'Cosmic Trail', abbr: 'CT', color: 'from-purple-600 to-purple-800' },
    { name: 'World Window', abbr: 'WW', color: 'from-green-600 to-green-800' },
    { name: 'GeoPolitics Desk', abbr: 'GPD', color: 'from-red-600 to-red-800' },
    { name: 'Talks & Ties', abbr: 'T&T', color: 'from-cyan-600 to-cyan-800' },
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
            {/* Main Featured Article - Left Side */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden rounded-lg">
                <img
                  src={featuredNews[0].image}
                  alt={featuredNews[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                  <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded text-xs sm:text-sm font-bold mb-2 sm:mb-3">
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

            {/* Right Side - Top 2 Articles + Bottom 1 Article */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Top 2 Small Articles Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredNews.slice(1, 3).map((article) => (
                  <article key={article.id} className="group cursor-pointer">
                    <div className="bg-navy-900 hover:bg-navy-800 transition-colors rounded-lg overflow-hidden h-full">
                      <div className="relative h-32 sm:h-36 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-bold">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-400">
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Bottom 1 Medium Article */}
              <article className="group cursor-pointer flex-1">
                <div className="flex gap-4 bg-white hover:bg-gray-50 transition-colors rounded-lg overflow-hidden border border-gray-200 h-full">
                  <div className="relative w-40 sm:w-48 lg:w-56 flex-shrink-0 overflow-hidden">
                    <img
                      src={featuredNews[3].image}
                      alt={featuredNews[3].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 py-4 pr-4 flex flex-col justify-center">
                    <span className="inline-block text-xs font-semibold text-primary-600 mb-2">
                      {featuredNews[3].category}
                    </span>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition">
                      {featuredNews[3].title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 hidden sm:block">
                      {featuredNews[3].excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{featuredNews[3].date}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredNews[3].readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Top Stories</h2>
          <Link to="/category" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All
            <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {featuredNews.slice(0, 8).map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="truncate">{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 sm:mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {latestNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Air World Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Air World</h2>
          <Link to="/category/air-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All
            <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {airWorldNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="truncate">{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sea World Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Sea World</h2>
            <Link to="/category/sea-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
              View All
              <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {seaWorldNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="truncate">{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                  <Link
                    to={`/article/${article.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                  >
                    Read More
                    <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aero World Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Aero World</h2>
          <Link to="/category/aero-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All
            <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {aeroWorldNews.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="truncate">{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
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
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white/90 group-hover:text-white transition">
                  {category.abbr}
                </div>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
