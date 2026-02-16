import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { api, getImageUrl } from '../api'; // Use our helper

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. DATA FETCHING STRATEGY
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch 50 newest articles. This is efficient.
        const response = await api.get('/api/articles?populate=*&sort=publishedAt:desc&pagination[limit]=50');
        const data = Array.isArray(response.data.data) ? response.data.data : [];
        setArticles(data);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. LOGIC: Slice the main array for specific sections
  // Top Stories: Uses the absolute newest 4 articles
  const featuredNews = articles.slice(0, 4); 
  
  // Latest News: Uses the NEXT 4 articles (so they don't duplicate)
  const latestNews = articles.slice(4, 8);

  // 3. LOGIC: Filter for specific category strips
  // Note: These slugs must match your Strapi Admin panel EXACTLY
  const airWorldNews = articles.filter(a => a.category?.slug === 'air-world').slice(0, 4);
  const seaWorldNews = articles.filter(a => a.category?.slug === 'sea-world').slice(0, 4);
  const aeroWorldNews = articles.filter(a => a.category?.slug === 'Aero-world').slice(0, 4); // Check capitalization in Strapi!

  // 4. STATIC CONFIG: Keep this static as it's just for UI Colors/Links
  const categories = [
    { name: 'Defence Frontline', abbr: 'DF', slug: 'Defence-Frontline', color: 'from-blue-600 to-blue-800' },
    { name: 'Cosmic Trail', abbr: 'CT', slug: 'Cosmic-Trail', color: 'from-purple-600 to-purple-800' },
    { name: 'World Window', abbr: 'WW', slug: 'world-window', color: 'from-green-600 to-green-800' },
    { name: 'GeoPolitics Desk', abbr: 'GPD', slug: 'GeoPolitics-Desk', color: 'from-red-600 to-red-800' },
    { name: 'Talks & Ties', abbr: 'T&T', slug: 'Talks-Ties', color: 'from-cyan-600 to-cyan-800' },
    { name: 'Global Game', abbr: 'GG', slug: 'Global-Game', color: 'from-indigo-600 to-indigo-800' },
    { name: 'Think Tank', abbr: 'TT', slug: 'think-tank', color: 'from-teal-600 to-teal-800' },
    { name: 'Congress', abbr: 'CG', slug: 'Congress', color: 'from-gray-600 to-gray-800' },
    { name: 'Truth Line', abbr: 'TL', slug: 'truth-line', color: 'from-emerald-600 to-emerald-800' },
    { name: 'Democracy', abbr: 'DM', slug: 'democracy', color: 'from-amber-600 to-amber-800' }
  ];

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-900"></div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      
      {/* === FEATURED ARTICLE SECTION (Top Stories) === */}
      {featuredNews.length > 0 && (
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Main Featured Article - Left Side (Index 0) */}
              {featuredNews[0] && (
                <Link to={`/article/${featuredNews[0].documentId}`} className="relative group cursor-pointer">
                  <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden rounded-lg">
                    <img
                      src={getImageUrl(featuredNews[0].cover)}
                      alt={featuredNews[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                      <span className="inline-block bg-primary-500 text-white px-3 py-1 rounded text-xs sm:text-sm font-bold mb-2 sm:mb-3">
                        {featuredNews[0].category?.name}
                      </span>
                      <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                        {featuredNews[0].title}
                      </h1>
                      <p className="text-sm sm:text-base text-gray-200 mb-2 sm:mb-3 line-clamp-2">
                        {featuredNews[0].description}
                      </p>
                      <div className="flex items-center text-xs sm:text-sm text-gray-300">
                        <span>{new Date(featuredNews[0].publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Right Side - Top 2 Articles (Index 1-2) + Bottom 1 Article (Index 3) */}
              <div className="flex flex-col gap-4 lg:gap-6">
                
                {/* Top 2 Small Articles Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredNews.slice(1, 3).map((article) => (
                    <Link to={`/article/${article.documentId}`} key={article.id} className="group cursor-pointer">
                      <div className="bg-navy-900 hover:bg-navy-800 transition-colors rounded-lg overflow-hidden h-full">
                        <div className="relative h-32 sm:h-36 overflow-hidden">
                          <img
                            src={getImageUrl(article.cover)}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2 left-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-bold">
                            {article.category?.name}
                          </span>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h3 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition">
                            {article.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-400">
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Bottom 1 Medium Article (Index 3) */}
                {featuredNews[3] && (
                  <Link to={`/article/${featuredNews[3].documentId}`} className="group cursor-pointer flex-1">
                    <div className="flex gap-4 bg-white hover:bg-gray-50 transition-colors rounded-lg overflow-hidden border border-gray-200 h-full">
                      <div className="relative w-40 sm:w-48 lg:w-56 flex-shrink-0 overflow-hidden">
                        <img
                          src={getImageUrl(featuredNews[3].cover)}
                          alt={featuredNews[3].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 py-4 pr-4 flex flex-col justify-center">
                        <span className="inline-block text-xs font-semibold text-primary-600 mb-2">
                          {featuredNews[3].category?.name}
                        </span>
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition">
                          {featuredNews[3].title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2 hidden sm:block">
                          {featuredNews[3].description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{new Date(featuredNews[3].publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}

              </div>
            </div>
          </div>
        </section>
      )}

      {/* === LATEST UPDATES (Top Stories Section in your design) === */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Top Stories</h2>
          <Link to="/category" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {latestNews.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* === AIR WORLD SECTION === */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Air World</h2>
          <Link to="/category/air-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {airWorldNews.length > 0 ? airWorldNews.map((article) => (
            <ArticleCard key={article.id} article={article} />
          )) : <p>No articles found.</p>}
        </div>
      </section>

      {/* === SEA WORLD SECTION (Gray Background) === */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Sea World</h2>
            <Link to="/category/sea-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
              View All <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {seaWorldNews.length > 0 ? seaWorldNews.map((article) => (
              <ArticleCard key={article.id} article={article} />
            )) : <p>No articles found.</p>}
          </div>
        </div>
      </section>

      {/* === AERO WORLD SECTION === */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">Aero World</h2>
          <Link to="/category/Aero-world" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-sm sm:text-base">
            View All <ChevronRightIcon className="ml-1 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {aeroWorldNews.length > 0 ? aeroWorldNews.map((article) => (
            <ArticleCard key={article.id} article={article} />
          )) : <p>No articles found.</p>}
        </div>
      </section>

      {/* === CATEGORIES GRID (Coverage Areas) === */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">
            Coverage Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((category, idx) => (
              <Link
                key={idx}
                to={`/category/${category.slug}`} // Uses the precise slug from config
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

// --- REUSABLE COMPONENT FOR STANDARD CARDS ---
const ArticleCard = ({ article }) => (
  <Link to={`/article/${article.documentId}`} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden block">
    <div className="relative h-44 sm:h-48 overflow-hidden">
      <img
        src={getImageUrl(article.cover)}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
        <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
          {article.category?.name}
        </span>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center text-xs text-gray-500 mb-2">
        <span className="truncate">{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
      <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition leading-tight">
        {article.title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{article.description}</p>
      <div className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm">
        Read More
        <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
      </div>
    </div>
  </Link>
);

export default Home;