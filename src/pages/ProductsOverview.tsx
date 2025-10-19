import React from 'react';
import { ArrowRight, Package, Box, Layers } from 'lucide-react';

interface ProductsOverviewProps {
  setCurrentPage: (page: string) => void;
}

export default function ProductsOverview({ setCurrentPage }: ProductsOverviewProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive industrial packaging solutions engineered for durability, safety, and efficiency. Each product line is designed to meet the demanding requirements of modern industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Package className="h-10 w-10 text-blue-900 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">FIBC Bags</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Flexible Intermediate Bulk Containers designed for the safe and efficient handling of bulk materials. Our FIBC bags offer exceptional strength and versatility for diverse industrial applications.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900 mb-1">Up to 2000kg</div>
                    <div className="text-sm text-gray-600">Load Capacity</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-900 mb-1">4 Types</div>
                    <div className="text-sm text-gray-600">A, B, C, D Options</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Multiple safety factor ratings for various applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    UN certification available for hazardous materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Food-grade options for agricultural products
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Custom printing and branding available
                  </li>
                </ul>
                <button
                  onClick={() => handleNavigation('fibc')}
                  className="flex items-center px-8 py-4 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 transition-colors"
                >
                  View FIBC Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-lg shadow-xl p-8 h-96 flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_jxk5ahjxk5ahjxk5.png"
                    alt="FIBC Bag - Bagpak"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-lg shadow-xl p-8 h-96 flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_jdyen3jdyen3jdye.png"
                    alt="Baffle Bag - Bagpak"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Box className="h-10 w-10 text-red-600 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Baffle Bags</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Specialized FIBC bags with internal baffle panels that maintain a cubic shape when filled, providing superior stacking stability and maximizing storage efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">95%+</div>
                    <div className="text-sm text-gray-600">Shape Retention</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">30%</div>
                    <div className="text-sm text-gray-600">More Capacity</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Internal baffles prevent bulging and maintain cubic form
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Enhanced stacking efficiency in warehouses and containers
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Ideal for free-flowing and fine powdered materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Reduced transportation and storage costs
                  </li>
                </ul>
                <button
                  onClick={() => handleNavigation('baffle')}
                  className="flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                  View Baffle Bag Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Layers className="h-10 w-10 text-gray-700 mr-3" />
                  <h2 className="text-4xl font-bold text-gray-900">Woven PP Bags</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  High-quality woven polypropylene bags offering exceptional durability and versatility for packaging agricultural products, construction materials, and industrial goods.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-700 mb-1">5-50kg</div>
                    <div className="text-sm text-gray-600">Weight Range</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-700 mb-1">Custom</div>
                    <div className="text-sm text-gray-600">Sizes Available</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    UV-stabilized options for outdoor storage
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Multi-color printing for branding and identification
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Laminated versions for moisture protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    Cost-effective and eco-friendly packaging solution
                  </li>
                </ul>
                <button
                  onClick={() => handleNavigation('woven')}
                  className="flex items-center px-8 py-4 bg-gray-800 text-white font-bold rounded-md hover:bg-gray-700 transition-colors"
                >
                  View Woven PP Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-lg shadow-xl p-8 h-96 flex items-center justify-center">
                  <img
                    src="/Gemini_Generated_Image_ufouihufouihufou.png"
                    alt="Woven PP Bag - Bagpak"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our technical team is ready to assist you in selecting the optimal packaging solution for your specific requirements.
          </p>
          <button
            onClick={() => handleNavigation('contact')}
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
          >
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}
