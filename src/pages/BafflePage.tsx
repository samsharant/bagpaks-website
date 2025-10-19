import React from 'react';
import { Box, Maximize, TrendingUp, Layers, CheckCircle } from 'lucide-react';

export default function BafflePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Box className="h-16 w-16 mr-4" />
                <h1 className="text-5xl font-bold">Baffle Bags</h1>
              </div>
              <p className="text-xl text-red-100 leading-relaxed">
                Specialized FIBC bags with superior shape retention for maximum storage efficiency and stacking stability
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/Gemini_Generated_Image_65faao65faao65fa.png"
                  alt="Baffle Bag - Bagpak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Baffle Bags?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baffle bags are a specialized variant of FIBC (Flexible Intermediate Bulk Container) bags that incorporate internal fabric panels, known as baffles, sewn into the four corners of the bag. These baffles serve a critical function: they prevent the bag from bulging outward when filled, maintaining a stable, cubic shape throughout the filling, storage, and transportation process.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike standard FIBC bags that tend to balloon outward when filled, creating an irregular cylindrical or rounded shape, baffle bags retain their rectangular form. This shape retention is achieved through the strategic placement of internal fabric panels that restrict lateral expansion while allowing the bag to be filled to its full capacity. The result is a more space-efficient, stable, and professional-looking bulk container.
            </p>
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
                Internal baffle panels are strategically positioned at each corner of the bag, running vertically from the bottom to the top. These panels are sewn in a way that allows the bag to expand vertically while restricting horizontal bulging. When the bag is filled, the material pushes against the baffles, which distribute the pressure evenly and maintain the bag's rectangular cross-section. This engineering solution ensures that the filled bag resembles a cube or rectangular prism rather than a cylinder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conventional Manufacturing Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fabric Production</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Similar to standard FIBC bags, the process begins with the production of woven polypropylene fabric. High-quality PP granules are extruded, stretched into tapes, and woven to create fabric panels with the required tensile strength and specifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Panel Cutting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The woven fabric is precisely cut into panels for the bag body, bottom, and crucially, the internal baffle panels. Accurate cutting is essential to ensure proper alignment and functionality of the baffles.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Baffle Panel Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Internal baffle panels are sewn into the four corners of the bag body. This is a critical step that distinguishes baffle bags from standard FIBC bags. The baffles must be positioned and sewn precisely to ensure they function correctly when the bag is filled.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Assembly and Sewing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The bag body panels are sewn together with the integrated baffles, and the bottom panel is attached. Industrial sewing machines use heavy-duty thread to create strong, durable seams that can withstand the stresses of handling and transportation.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lifting Loop Attachment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lifting loops are securely attached to the top of the bag. For baffle bags, the attachment points must be carefully positioned to maintain balance and ensure safe lifting of the cubic-shaped filled bag.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Spouts and Closures</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fill spouts, discharge spouts, and closure mechanisms are added according to customer specifications. For baffle bags handling fine powders, specialized dust-proof spouts may be integrated.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rigorous quality control tests are performed, including load testing to verify the bag's capacity and shape retention, seam strength testing, and visual inspection to ensure all baffles are correctly positioned and functional.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  8
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Final Packaging</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Completed baffle bags are carefully folded to preserve the integrity of the internal baffles, baled, and prepared for shipment. Proper folding ensures the baffles remain in optimal condition for use.
                  </p>
                </div>
              </div>
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
                Clean, uniform cubic shape presents a more professional image and facilitates easier labeling and identification.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Better Discharge</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent shape ensures complete and efficient emptying of contents, particularly important for expensive materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Importance in Supply Chain Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Baffle bags represent a significant advancement in bulk packaging technology, addressing one of the key limitations of standard FIBC bags: space inefficiency. In industries where warehouse space and transportation costs are major operational expenses, the ability to fit more product into the same space translates directly into cost savings.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The cubic shape of baffle bags means that more bags can be loaded onto a pallet, into a shipping container, or stored in a warehouse compared to standard cylindrical FIBC bags. This space optimization can result in savings of 20-30% in shipping and storage costs, making baffle bags particularly attractive for high-volume operations and international trade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond cost efficiency, baffle bags enhance safety in warehouse operations. The stable, cubic shape reduces the risk of bags toppling during stacking and handling, minimizing workplace accidents and product damage. For companies handling expensive or sensitive materials, this added stability is invaluable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As global supply chains continue to face pressure to reduce costs while maintaining or improving service levels, baffle bags offer a practical solution that delivers tangible benefits in efficiency, safety, and professionalism. Their growing adoption across industries reflects the ongoing evolution of packaging technology toward more intelligent, space-efficient solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
