import { useParams } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Category = () => {
  const { categorySlug, subcategorySlug } = useParams();

  const categories = {
    'defence-frontline': {
      name: 'Defence Frontline',
      description: 'Comprehensive coverage of military operations across all domains',
      abbr: 'DF',
      color: 'from-blue-600 to-blue-800',
      subcategories: [
        {
          slug: 'sea-world',
          name: 'Sea World',
          description: 'Naval operations, maritime security, and ocean defense strategies'
        },
        {
          slug: 'air-world',
          name: 'Air World',
          description: 'Air force developments, aerial warfare, and aviation technology'
        },
        {
          slug: 'aero-world',
          name: 'Aero World',
          description: 'Aerospace innovation, defense aviation, and aircraft development'
        }
      ]
    },
    'cosmic-trail': {
      name: 'Cosmic Trail',
      description: 'Space defense, satellite warfare, and orbital security',
      abbr: 'CT',
      color: 'from-purple-600 to-purple-800'
    },
    'world-window': {
      name: 'World Window',
      description: 'Global defence news and international military developments',
      abbr: 'WW',
      color: 'from-green-600 to-green-800'
    },
    'geopolitics-desk': {
      name: 'GeoPolitics Desk',
      description: 'Strategic analysis of global power dynamics and regional conflicts',
      abbr: 'GPD',
      color: 'from-red-600 to-red-800'
    },
    'talks-&-ties': {
      name: 'Talks & Ties',
      description: 'Diplomatic relations, international summits, and defense cooperation',
      abbr: 'T&T',
      color: 'from-cyan-600 to-cyan-800'
    },
    'global-game': {
      name: 'Global Game',
      description: 'Arms trade, defense economics, and international security markets',
      abbr: 'GG',
      color: 'from-indigo-600 to-indigo-800'
    },
    'think-tank': {
      name: 'Think Tank',
      description: 'Expert analysis, policy recommendations, and strategic insights',
      abbr: 'TT',
      color: 'from-teal-600 to-teal-800'
    },
    'congress': {
      name: 'Congress',
      description: 'Legislative updates, defense budgets, and policy decisions',
      abbr: 'CG',
      color: 'from-gray-600 to-gray-800'
    },
    'truth-line': {
      name: 'Truth Line',
      description: 'Fact-checking, verification, and countering misinformation',
      abbr: 'TL',
      color: 'from-emerald-600 to-emerald-800'
    }
  };

  // Sample articles for each category
  const sampleArticles = [
    {
      id: 1,
      title: 'Advanced Naval Destroyer Program Reaches Milestone',
      excerpt: 'The next-generation destroyer class completes sea trials with impressive results, showcasing enhanced capabilities in multi-domain operations.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Naval+Destroyer&font=roboto',
      date: 'November 19, 2025',
      readTime: '7 min read'
    },
    {
      id: 2,
      title: 'Strategic Analysis: Regional Security Architecture',
      excerpt: 'Examining the evolving security dynamics and alliance structures shaping the contemporary strategic landscape.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Security+Analysis&font=roboto',
      date: 'November 18, 2025',
      readTime: '10 min read'
    },
    {
      id: 3,
      title: 'Technology Integration in Modern Warfare',
      excerpt: 'How artificial intelligence and autonomous systems are transforming military operations and strategic planning.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Tech+Warfare&font=roboto',
      date: 'November 17, 2025',
      readTime: '9 min read'
    },
    {
      id: 4,
      title: 'Joint Military Exercise Demonstrates Interoperability',
      excerpt: 'Multinational forces conduct comprehensive training operations, highlighting enhanced coordination capabilities.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Military+Exercise&font=roboto',
      date: 'November 16, 2025',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Cybersecurity Threats to Defence Infrastructure',
      excerpt: 'New vulnerabilities discovered in military networks prompt enhanced security protocols and defensive measures.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Cyber+Defense&font=roboto',
      date: 'November 15, 2025',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Budget Allocation Priorities for Next Fiscal Year',
      excerpt: 'Defense spending proposals reveal strategic priorities and emerging capability requirements.',
      image: 'https://placehold.co/800x600/2d3748/eab308?text=Defense+Budget&font=roboto',
      date: 'November 14, 2025',
      readTime: '5 min read'
    }
  ];

  // Determine current category and subcategory
  const currentCategory = categorySlug ? categories[categorySlug] : null;
  const currentSubcategory = currentCategory?.subcategories?.find(
    sub => sub.slug === subcategorySlug
  );

  // If no specific category, show all categories
  if (!categorySlug) {
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">All Categories</h1>
              <p className="text-xl text-gray-300">
                Explore comprehensive defence coverage across all domains
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(categories).map(([slug, category]) => (
              <a
                key={slug}
                href={`/category/${slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                  <div className="text-4xl font-bold mb-4 text-white/90">{category.abbr}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  {category.subcategories && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-navy-900 mb-2">Subcategories:</p>
                      {category.subcategories.map((sub) => (
                        <div key={sub.slug} className="text-sm text-gray-600">
                          → {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                    View Articles
                    <ChevronRightIcon className="ml-1 h-5 w-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // Show specific category or subcategory
  const displayName = currentSubcategory ? currentSubcategory.name : currentCategory?.name;
  const displayDescription = currentSubcategory ? currentSubcategory.description : currentCategory?.description;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${currentCategory?.color || 'from-navy-900 to-navy-800'} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm mb-6 text-gray-300">
              <a href="/" className="hover:text-white">Home</a>
              <ChevronRightIcon className="h-4 w-4 mx-2" />
              <a href="/category" className="hover:text-white">Categories</a>
              {categorySlug && (
                <>
                  <ChevronRightIcon className="h-4 w-4 mx-2" />
                  <a href={`/category/${categorySlug}`} className="hover:text-white">{currentCategory?.name}</a>
                </>
              )}
              {subcategorySlug && (
                <>
                  <ChevronRightIcon className="h-4 w-4 mx-2" />
                  <span>{currentSubcategory?.name}</span>
                </>
              )}
            </div>

            <div className="flex items-center mb-6">
              <div className="text-5xl md:text-6xl font-bold mr-4 text-white/90">{currentCategory?.abbr}</div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{displayName}</h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-300">{displayDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories (if viewing main Defence Frontline) */}
      {categorySlug === 'defence-frontline' && !subcategorySlug && currentCategory?.subcategories && (
        <section className="container mx-auto px-4 py-12 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Explore Subcategories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentCategory.subcategories.map((sub) => (
              <a
                key={sub.slug}
                href={`/category/defence-frontline/${sub.slug}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-600">
                  {sub.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{sub.description}</p>
                <div className="flex items-center text-primary-600 font-semibold">
                  View Articles
                  <ChevronRightIcon className="ml-1 h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-navy-900">Latest Articles</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Commented</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {sampleArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    {displayName}
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
                <a
                  href={`/article/${article.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center text-xs sm:text-sm"
                >
                  Read More
                  <ChevronRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Next
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on {displayName}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest updates from this category directly to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-navy-900 font-semibold rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Category;
