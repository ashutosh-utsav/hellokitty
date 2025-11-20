import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      name: 'Defence Frontline',
      subcategories: ['Sea World', 'Air World', 'Aero World']
    },
    { name: 'Cosmic Trail' },
    { name: 'World Window' },
    { name: 'GeoPolitics Desk' },
    { name: 'Talks & Ties' },
    { name: 'Global Game' },
    { name: 'Think Tank' },
    { name: 'Congress' },
    { name: 'Truth Line' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="hidden md:inline">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="md:hidden">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#" className="hover:text-gold-400 transition">Subscribe</a>
            <a href="#" className="hover:text-gold-400 transition hidden sm:inline">Newsletter</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold">
              <span className="text-navy-900">Defence</span>
              <span className="text-gold-600">Now</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-navy-800 hover:text-gold-600 font-medium transition">
              Home
            </Link>
            <div className="relative group">
              <Link to="/category" className="text-navy-800 hover:text-gold-600 font-medium transition">
                Categories
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {categories.map((category, idx) => (
                    <div key={idx}>
                      <Link
                        to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-navy-700 hover:bg-navy-50 hover:text-gold-600 transition"
                      >
                        {category.name}
                      </Link>
                      {category.subcategories && (
                        <div className="pl-4 bg-gray-50">
                          {category.subcategories.map((sub, subIdx) => (
                            <Link
                              key={subIdx}
                              to={`/category/defence-frontline/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block px-4 py-1.5 text-sm text-navy-600 hover:text-gold-600 transition"
                            >
                              → {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="text-navy-800 hover:text-gold-600 font-medium transition">
              About Us
            </Link>
            <Link to="/contact" className="text-navy-800 hover:text-gold-600 font-medium transition">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-navy-900"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-navy-800 hover:text-gold-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <Link
                to="/category"
                className="block py-2 text-navy-800 hover:text-gold-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <div className="pl-4 space-y-1 mt-2">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <Link
                      to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1.5 text-sm text-navy-700 hover:text-gold-600 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                    {category.subcategories && (
                      <div className="pl-4 space-y-1">
                        {category.subcategories.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={`/category/defence-frontline/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-1 text-xs text-navy-600 hover:text-gold-600 transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            → {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/about"
              className="block py-2 text-navy-800 hover:text-gold-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-navy-800 hover:text-gold-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
