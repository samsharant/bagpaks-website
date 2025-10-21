import React from 'react';
import { Wind, Sprout, Sun, CheckCircle } from 'lucide-react';

export default function VentilatedContent() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventilated FIBC Bags</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ventilated FIBC Bags are specially designed for bulk packaging of goods that require airflow for safe transport and storage, such as fresh vegetables or produce. These innovative bags feature integrated ventilation panels that ensure optimal air circulation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The breathable design helps prevent moisture buildup, reduce spoilage, and extend the shelf life of perishable goods.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ideal for Agricultural Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <Sprout className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Root Vegetables</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Potatoes</li>
                <li>• Onions</li>
                <li>• Garlic</li>
                <li>• Carrots</li>
                <li>• Beets</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <Sprout className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Fresh Produce</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Cabbage</li>
                <li>• Ginger</li>
                <li>• Fresh vegetables</li>
                <li>• Seasonal crops</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md border-2 border-green-200">
              <div className="flex justify-center mb-4">
                <Sprout className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Nuts & Dried Goods</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Nuts and seeds</li>
                <li>• Dried fruits</li>
                <li>• Legumes</li>
                <li>• Coffee beans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Wind className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maintains Freshness</h3>
              <p className="text-green-100 leading-relaxed">
                Continuous airflow keeps produce fresh and prevents mold.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
              <p className="text-green-100 leading-relaxed">
                Reusable bulk packaging reduces handling costs.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sprout className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Extended Shelf-Life</h3>
              <p className="text-green-100 leading-relaxed">
                Proper ventilation extends product shelf-life significantly.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sun className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Waste</h3>
              <p className="text-green-100 leading-relaxed">
                Minimizes environmental waste and eases inventory management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
