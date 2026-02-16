import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { api, getImageUrl } from '../api';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        console.log("Fetching ID:", id);
        
        // 🚨 EMERGENCY FIX: Simple population. 
        // If your field is named "Content" or "Body", change 'blocks' below to that name.
        const response = await api.get(`/api/articles/${id}?populate=*`);
        
        console.log("Response:", response.data);
        setArticle(response.data.data);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (error) return <div className="p-20 text-center text-red-600">Error: {error}</div>;
  if (!article) return <div className="p-20 text-center">Article not found</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Title */}
      <div className="container mx-auto px-4 pt-12 pb-6">
        <h1 className="text-4xl font-bold mb-4 text-navy-900">{article.title}</h1>
        {article.category && (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
            {article.category.name}
          </span>
        )}
      </div>

      {/* Image (Safe Check) */}
      {article.cover && (
        <img 
          src={getImageUrl(article.cover)} 
          className="w-full max-h-[500px] object-cover mb-8" 
          alt={article.title} 
        />
      )}

      {/* Content - Debugging View */}
      <div className="container mx-auto px-4 max-w-3xl prose lg:prose-xl">
        {/* If 'blocks' exists, map it */}
        {article.blocks && article.blocks.map((block, index) => (
           <div key={index} className="mb-6">
             {/* If it's rich text, render markdown */}
             {block.__component === 'shared.rich-text' && (
               <ReactMarkdown>{block.body}</ReactMarkdown>
             )}
             {/* If it's a quote, render quote */}
             {block.__component === 'shared.quote' && (
               <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                 {block.body}
               </blockquote>
             )}
           </div>
        ))}

        {/* Fallback: Check if content is in a different field name */}
        {!article.blocks && (
          <div className="p-4 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded">
            <strong>Debug Info:</strong> No field named "blocks" found. <br/>
            Open your Console (F12) and look at "Response" to see the real field name.
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;