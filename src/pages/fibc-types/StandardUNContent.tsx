import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Award } from 'lucide-react';

export default function StandardUNContent() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard / UN FIBC Bags</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Standard FIBC Bags are constructed from coated or uncoated polypropylene sheets, with options for dust-proofing according to customer and material needs. These bags are highly versatile and are available with a range of filling, unloading, and lifting mechanisms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              UN FIBC Bags are specifically engineered for safe storage and transport of hazardous or dangerous goods. They conform to stringent United Nations safety guidelines, guaranteeing superior durability and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Versatile Construction</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  Coated or uncoated fabric options
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  Optional dust-proofing to prevent leakage
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-2">•</span>
                  Wide range of filling and discharge systems
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-orange-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-10 w-10 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">UN Certification</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  Adherence to UN safety guidelines
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  6:1 safety factor for maximum protection
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  International regulatory compliance
                </li>
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
                <Shield className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safe Transport</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified solution for hazardous material transport with UN compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Superior protection against tears and contamination.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Resistance</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellent tensile strength and chemical resistance.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduces liability through regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
