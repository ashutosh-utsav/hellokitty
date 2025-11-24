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
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-navy-900">Defence</span>
              <span className="text-gold-600">Now</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6">
            {/* Defence Frontline with Dropdown */}
            <div className="relative group">
              <button className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition flex items-center tracking-wide uppercase">
                Defence Frontline
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                <div className="py-1">
                  <Link
                    to="/category/sea-world"
                    className="block px-4 py-2 text-xs text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition"
                  >
                    Sea World
                  </Link>
                  <Link
                    to="/category/air-world"
                    className="block px-4 py-2 text-xs text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition"
                  >
                    Air World
                  </Link>
                  <Link
                    to="/category/aero-world"
                    className="block px-4 py-2 text-xs text-navy-700 hover:bg-gold-50 hover:text-gold-600 transition"
                  >
                    Aero World
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Categories */}
            <Link to="/category/cosmic-trail" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Cosmic Trail
            </Link>
            <Link to="/category/world-window" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              World Window
            </Link>
            <Link to="/category/geopolitics-desk" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              GeoPolitics Desk
            </Link>
            <Link to="/category/talks-ties" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Talks & Ties
            </Link>
            <Link to="/category/global-game" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Global Game
            </Link>
            <Link to="/category/think-tank" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Think Tank
            </Link>
            <Link to="/category/congress" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Congress
            </Link>
            <Link to="/category/truth-line" className="text-navy-800 hover:text-gold-600 text-xs 2xl:text-sm font-medium transition tracking-wide uppercase">
              Truth Line
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-navy-900 hover:text-gold-600 transition"
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
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-3 max-h-[70vh] overflow-y-auto">
            <div className="space-y-1">
              {/* Defence Frontline with Subcategories */}
              <div className="border-b border-gray-100 pb-2 mb-2">
                <div className="py-2 text-navy-900 font-semibold text-sm uppercase tracking-wide">Defence Frontline</div>
                <div className="pl-3 space-y-1">
                  <Link
                    to="/category/sea-world"
                    className="block py-2 text-xs text-navy-600 hover:text-gold-600 hover:bg-gold-50 px-2 rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sea World
                  </Link>
                  <Link
                    to="/category/air-world"
                    className="block py-2 text-xs text-navy-600 hover:text-gold-600 hover:bg-gold-50 px-2 rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Air World
                  </Link>
                  <Link
                    to="/category/aero-world"
                    className="block py-2 text-xs text-navy-600 hover:text-gold-600 hover:bg-gold-50 px-2 rounded transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Aero World
                  </Link>
                </div>
              </div>

              {/* Other Categories */}
              <Link
                to="/category/cosmic-trail"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cosmic Trail
              </Link>
              <Link
                to="/category/world-window"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                World Window
              </Link>
              <Link
                to="/category/geopolitics-desk"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                GeoPolitics Desk
              </Link>
              <Link
                to="/category/talks-ties"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Talks & Ties
              </Link>
              <Link
                to="/category/global-game"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Global Game
              </Link>
              <Link
                to="/category/think-tank"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Think Tank
              </Link>
              <Link
                to="/category/congress"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Congress
              </Link>
              <Link
                to="/category/truth-line"
                className="block py-2.5 text-navy-800 hover:text-gold-600 hover:bg-gold-50 font-medium text-sm uppercase tracking-wide px-2 rounded transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Truth Line
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
