import React from 'react';
import { Box, Maximize, TrendingUp, Layers, CheckCircle } from 'lucide-react';

export default function BaffleContent() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Baffle Bags?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baffle bags are a specialized variant of FIBC (Flexible Intermediate Bulk Container) bags that incorporate internal fabric panels, known as baffles, sewn into the four corners of the bag. These baffles serve a critical function: they prevent the bag from bulging outward when filled, maintaining a stable, cubic shape throughout the filling, storage, and transportation process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike standard FIBC bags that tend to balloon outward when filled, creating an irregular cylindrical or rounded shape, baffle bags retain their rectangular form. This shape retention is achieved through the strategic placement of internal fabric panels that restrict lateral expansion while allowing the bag to be filled to its full capacity.
            </p>
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
