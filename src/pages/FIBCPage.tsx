import React, { useState } from 'react';
import { Package } from 'lucide-react';
import BaffleContent from './fibc-types/BaffleContent';
import StandardUNContent from './fibc-types/StandardUNContent';
import VentilatedContent from './fibc-types/VentilatedContent';

export default function FIBCPage() {
  const [selectedType, setSelectedType] = useState<'overview' | 'baffle' | 'standard' | 'ventilated'>('overview');

  const renderContent = () => {
    switch (selectedType) {
      case 'baffle':
        return <BaffleContent />;
      case 'standard':
        return <StandardUNContent />;
      case 'ventilated':
        return <VentilatedContent />;
      default:
        return (
          <>
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are FIBC Bags?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    FIBC (Flexible Intermediate Bulk Container) bags, commonly known as bulk bags, big bags, or super sacks, are large, flexible containers designed for the efficient storage and transportation of bulk materials. Typically made from woven polypropylene fabric, these bags can hold between 500 kg to 2000 kg of material.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    FIBC bags are widely used across various industries including agriculture, chemicals, construction, food processing, mining, and pharmaceuticals.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our FIBC Product Range</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <button
                    onClick={() => setSelectedType('baffle')}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="h-80 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src="/Gemini_Generated_Image_9ht1kr9ht1kr9ht1.png"
                        alt="Baffle Bag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Baffle Bags</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Internal baffles maintain cubic shape for maximum storage efficiency and superior stacking stability.
                      </p>
                      <div className="text-red-600 font-bold">View Details →</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType('standard')}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="h-80 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src="/Gemini_Generated_Image_jxk5ahjxk5ahjxk5.png"
                        alt="Standard FIBC Bag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Standard / UN Bags</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Versatile bags with optional UN certification for safe transport of hazardous and dangerous goods.
                      </p>
                      <div className="text-blue-600 font-bold">View Details →</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType('ventilated')}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="h-80 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src="/Gemini_Generated_Image_cb57l7cb57l7cb57.png"
                        alt="Ventilated Bag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Ventilated Bags</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Breathable design with ventilation panels for fresh produce and goods requiring airflow.
                      </p>
                      <div className="text-green-600 font-bold">View Details →</div>
                    </div>
                  </button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Package className="h-16 w-16 mr-4" />
                <h1 className="text-5xl font-bold">FIBC Bags</h1>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                Flexible Intermediate Bulk Containers engineered for reliable bulk material handling across industries
              </p>

              {selectedType !== 'overview' && (
                <button
                  onClick={() => setSelectedType('overview')}
                  className="px-6 py-3 bg-white text-blue-900 font-bold rounded-md hover:bg-blue-50 transition-colors"
                >
                  ← Back to Overview
                </button>
              )}
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/Gemini_Generated_Image_cb57l7cb57l7cb57.png"
                  alt="FIBC Bag - Bagpak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {renderContent()}
    </div>
  );
}
