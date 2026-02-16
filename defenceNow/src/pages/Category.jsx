import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { api, getImageUrl } from '../api';

const Category = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Styling Config
  const categoryConfig = {
    'defence-frontline': { abbr: 'DF', color: 'from-blue-600 to-blue-800', name: 'Defence Frontline' },
    'sea-world': { abbr: 'SW', color: 'from-blue-600 to-blue-800', name: 'Sea World' },
    'air-world': { abbr: 'AW', color: 'from-blue-600 to-blue-800', name: 'Air World' },
    'democracy': { abbr: 'DM', color: 'from-amber-600 to-amber-800', name: 'Democracy' },
    // Add others if needed
  };

  const activeSlug = subcategorySlug || categorySlug;
  const currentConfig = categoryConfig[activeSlug] || { 
    abbr: 'DW', 
    color: 'from-navy-900 to-navy-800', 
    name: activeSlug?.replace(/-/g, ' ') 
  };

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      setLoading(true);
      try {
        // ✅ FIXED: Using lowercase 'category' based on your CURL output
        const res = await api.get(`/api/articles?filters[category][slug][$eq]=${activeSlug}&populate=*`);
        setArticles(res.data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (activeSlug) {
      fetchCategoryArticles();
    }
  }, [activeSlug]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className={`bg-gradient-to-r ${currentConfig.color} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="text-6xl font-bold mr-4 opacity-50">{currentConfig.abbr}</div>
            <div>
              <h1 className="text-5xl font-bold capitalize">{currentConfig.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <p className="text-center">Loading articles...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.length > 0 ? articles.map((article) => (
              <Link to={`/article/${article.documentId}`} key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  {/* ✅ FIXED: Using 'cover' instead of 'CoverImage' */}
                  <img
                    src={getImageUrl(article.cover)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{new Date(article.publishedAt).toLocaleDateString()}</div>
                  {/* ✅ FIXED: Using 'title' (lowercase) */}
                  <h3 className="text-lg font-bold text-navy-900 mb-2 line-clamp-2 group-hover:text-primary-600">
                    {article.title}
                  </h3>
                  {/* ✅ FIXED: Using 'description' instead of 'Excerpt' */}
                  <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                </div>
              </Link>
            )) : (
              <div className="col-span-4 text-center py-10 text-gray-500">
                No articles found in {currentConfig.name}.
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Category;