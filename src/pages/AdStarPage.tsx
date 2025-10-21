import React from 'react';
import { Star, CheckCircle2, Factory, Package, Shield, Recycle } from 'lucide-react';

export default function AdStarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Star className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Ad Star Bags</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Premium multi-layered woven polypropylene bags with patented hot air welded seams for leak-proof, dust-free performance.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Ad Star Bags?</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p>Multi-layered woven polypropylene bags with a block-bottom and valve design.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p>Patented hot air welded seams with no stitching or glue for leak-proof and dust-free performance.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p>Brick-shaped construction ensures bags remain upright when filled and stacked, improving space utilization.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/Gemini_Generated_Image_vv38qevv38qevv38.png"
                alt="Ad Star Bag"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Factory className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Conventional Manufacturing Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extrusion</h3>
              <p className="text-gray-600">PP resin is extruded into high-strength tapes and yarns.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weaving & Lamination</h3>
              <p className="text-gray-600">Tapes are woven into tough fabric, then laminated and printed for branding.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting</h3>
              <p className="text-gray-600">Cut to shape for body, valve, and block bottom.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Block Bottom Formation</h3>
              <p className="text-gray-600">Block bottom formed using hot air welding—no glue required.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Valve Addition</h3>
              <p className="text-gray-600">Filling valve added for automatic, dustless filling or open mouth for manual filling.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600">Strict quality control—checked for tensile strength, waterproofing, and leak-resistance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Applications in Industries</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Cement & Construction Materials</h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Chemicals & Fertilizers</h3>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Agriculture (Flour, Grains, Sugar, Seeds)</h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Industrial Powders & Polymers</h3>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Animal Feed</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Advantages</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Strength</h3>
              <p className="text-gray-600">Enhanced durability compared to paper or standard woven bags.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leak & Dust Proof</h3>
              <p className="text-gray-600">Perfect for fine powders with zero spillage during handling.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Moisture Resistant</h3>
              <p className="text-gray-600">Water resistance with optional lamination for enhanced protection.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Space Efficient</h3>
              <p className="text-gray-600">Block-bottom shape for upright stacking and optimal space utilization.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Automated Filling</h3>
              <p className="text-gray-600">Reduces transit loss and speeds up packaging operations.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly & Cost-Effective</h3>
              <p className="text-gray-600">Reusable, recyclable, and economical for long-term use.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fully Customizable</h3>
              <p className="text-gray-600">Available in various sizes, prints, coatings, and valve/open mouth formats.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Importance of Ad Star Bags</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Industry Standard</h3>
              <p className="text-blue-100">Sets the benchmark for reliable bulk packaging across multiple industries worldwide.</p>
            </div>

            <div className="bg-blue-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Product Protection</h3>
              <p className="text-blue-100">Minimizes product loss and damage during transport and storage, ensuring quality integrity.</p>
            </div>

            <div className="bg-blue-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Efficient Logistics</h3>
              <p className="text-blue-100">Supports efficient warehouse management and streamlined logistics operations.</p>
            </div>

            <div className="bg-blue-700/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Brand & Sustainability</h3>
              <p className="text-blue-100">Enhances branding opportunities, compliance standards, and sustainability goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn more about Ad Star Bags and how they can optimize your packaging operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
