import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <img
              src="/bagpaks-logo.png"
              alt="Bagpaks Logo"
              className="h-14 w-14 object-contain"
            />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">Bagpaks Oman</h1>
              <p className="text-xs text-gray-600 tracking-wide">Industrial Packaging Solutions</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigation('home')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  ['products', 'fibc', 'baffle', 'woven'].includes(currentPage)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {productsDropdownOpen && (
                <div
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg border border-gray-200"
                >
                  <div className="py-2">
                    <button
                      onClick={() => handleNavigation('products')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      All Products
                    </button>
                    <button
                      onClick={() => handleNavigation('fibc')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      FIBC Bags
                    </button>
                    <button
                      onClick={() => handleNavigation('baffle')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Baffle Bags
                    </button>
                    <button
                      onClick={() => handleNavigation('woven')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Woven PP Bags
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('about')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigation('contact')}
              className={`ml-2 px-6 py-2 rounded-md text-sm font-bold transition-colors ${
                currentPage === 'contact'
                  ? 'bg-red-700 text-white'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={() => handleNavigation('home')}
              className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === 'home' ? 'bg-blue-900 text-white' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('products')}
              className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === 'products' ? 'bg-blue-900 text-white' : 'text-gray-700'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleNavigation('fibc')}
              className={`block w-full text-left px-4 py-3 text-sm ${
                currentPage === 'fibc' ? 'bg-gray-100' : ''
              }`}
            >
              FIBC Bags
            </button>
            <button
              onClick={() => handleNavigation('baffle')}
              className={`block w-full text-left px-4 py-3 text-sm ${
                currentPage === 'baffle' ? 'bg-gray-100' : ''
              }`}
            >
              Baffle Bags
            </button>
            <button
              onClick={() => handleNavigation('woven')}
              className={`block w-full text-left px-4 py-3 text-sm ${
                currentPage === 'woven' ? 'bg-gray-100' : ''
              }`}
            >
              Woven PP Bags
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === 'about' ? 'bg-blue-900 text-white' : 'text-gray-700'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-4 py-2 rounded-md text-sm font-bold bg-red-600 text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
