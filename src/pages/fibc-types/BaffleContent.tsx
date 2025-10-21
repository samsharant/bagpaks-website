import React from 'react';
import { Box, Maximize, TrendingUp, Layers, CheckCircle } from 'lucide-react';

export default function BaffleContent() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Baffle Bags?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baffle bags are a specialized variant of FIBC (Flexible Intermediate Bulk Container) bags that incorporate internal fabric panels, known as baffles, sewn into the four corners of the bag. These baffles serve a critical function: they prevent the bag from bulging outward when filled, maintaining a stable, cubic shape throughout the filling, storage, and transportation process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike standard FIBC bags that tend to balloon outward when filled, creating an irregular cylindrical or rounded shape, baffle bags retain their rectangular form. This shape retention is achieved through the strategic placement of internal fabric panels that restrict lateral expansion while allowing the bag to be filled to its full capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Gemini_Generated_Image_65faao65faao65fa.png"
                alt="Baffle Bag Example 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Gemini_Generated_Image_ml2cv2ml2cv2ml2c.png"
                alt="Baffle Bag Example 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Gemini_Generated_Image_3iew7k3iew7k3iew.png"
                alt="Baffle Bag Example 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shape Retention Technology</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Standard FIBC Bag</h3>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-blue-400 rounded-full opacity-70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Bulging Shape</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Irregular cylindrical shape
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Wasted storage space
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Unstable stacking
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-4 border-red-600">
                <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">Baffle Bag</h3>
                <div className="bg-gradient-to-br from-red-50 to-red-100 h-64 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-red-500 opacity-70 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Cubic Shape</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    Perfect cubic form
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    Maximum space utilization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    Superior stacking stability
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">How Baffles Work</h4>
              <p className="text-gray-700 leading-relaxed">
                Internal baffle panels are strategically positioned at each corner of the bag, running vertically from the bottom to the top. These panels are sewn in a way that allows the bag to expand vertically while restricting horizontal bulging. When the bag is filled, the material pushes against the baffles, which distribute the pressure evenly and maintain the bag's rectangular cross-section.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Product Gallery</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/Gemini_Generated_Image_6eyrxm6eyrxm6eyr.png"
                alt="Baffle Bag Product 1"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/Gemini_Generated_Image_bfxl9ibfxl9ibfxl.png"
                alt="Baffle Bag Product 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/Gemini_Generated_Image_z7o8ojz7o8ojz7o8.png"
                alt="Baffle Bag Product 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="/Gemini_Generated_Image_jdyen3jdyen3jdye.png"
                alt="Baffle Bag Product 4"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Fine Powders</h3>
              <ul className="space-y-2 text-red-100">
                <li>• Pharmaceutical powders</li>
                <li>• Food-grade flour and starches</li>
                <li>• Chemical powders</li>
                <li>• Pigments and additives</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Free-Flowing Materials</h3>
              <ul className="space-y-2 text-red-100">
                <li>• Plastic pellets and resins</li>
                <li>• Granular fertilizers</li>
                <li>• Seeds and grains</li>
                <li>• Sugar and salt</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">High-Value Products</h3>
              <ul className="space-y-2 text-red-100">
                <li>• Specialty chemicals</li>
                <li>• Coffee and cocoa beans</li>
                <li>• Rare earth minerals</li>
                <li>• Electronic components</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Maximize className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Space Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Cubic shape allows for 20-30% more bags per pallet and container, significantly reducing shipping costs.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Layers className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Stability</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior stacking capability reduces the risk of toppling and allows for higher, safer stacks in warehouses.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Appearance</h3>
              <p className="text-gray-600 leading-relaxed">
                Clean, uniform cubic shape presents a more professional image and facilitates easier labeling.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better Discharge</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent shape ensures complete and efficient emptying of contents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
