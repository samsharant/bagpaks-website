import React from 'react';
import { Shield, Zap, Recycle, CheckCircle, Package } from 'lucide-react';

export default function FIBCPage() {
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
              <p className="text-xl text-blue-100 leading-relaxed">
                Flexible Intermediate Bulk Containers engineered for reliable bulk material handling across industries
              </p>
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are FIBC Bags?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FIBC (Flexible Intermediate Bulk Container) bags, commonly known as bulk bags, big bags, or super sacks, are large, flexible containers designed for the efficient storage and transportation of bulk materials. Typically made from woven polypropylene fabric, these bags can hold between 500 kg to 2000 kg of material, depending on their design and safety factor rating.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              FIBC bags are widely used across various industries including agriculture, chemicals, construction, food processing, mining, and pharmaceuticals. Their versatility, cost-effectiveness, and ease of handling make them an indispensable solution for bulk material management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conventional Manufacturing Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Raw Material Selection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    High-quality polypropylene granules are selected based on the bag's intended use, considering factors such as strength requirements, UV resistance, and food-grade compliance if necessary.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Extrusion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Polypropylene granules are heated and extruded through a circular die to form continuous tubular tapes or flat tapes. These tapes are then stretched to align the polymer molecules, increasing their tensile strength.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Weaving</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The polypropylene tapes are woven on circular or flat looms to create fabric panels. The weave density and pattern are carefully controlled to achieve the desired strength and fabric characteristics.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Coating and Lamination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Depending on the application, the woven fabric may be coated or laminated to provide additional properties such as moisture resistance, anti-static characteristics, or conductive properties for handling flammable materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cutting and Sewing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The fabric is cut into panels according to the bag's specifications. These panels are then sewn together using industrial sewing machines with high-strength polyester or polypropylene thread to form the bag body.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Attachment of Accessories</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lifting loops, fill spouts, discharge spouts, and liners are attached to the bag. The lifting loops are critical for safe handling and must meet stringent safety factor requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Inspection and Testing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Each bag undergoes rigorous quality control testing including tensile strength tests, load tests, cyclic top lift tests, and visual inspections to ensure compliance with international standards such as ISO 21898.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  8
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Packaging and Labeling</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Finished FIBC bags are folded, baled, and packaged for shipment. Each bag or batch is labeled with relevant information including specifications, safety warnings, and traceability codes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types and Technical Features</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Type A FIBC</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Non-conductive bags</strong> made from standard polypropylene fabric without any static protection. Suitable for non-flammable materials in non-hazardous environments.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-bold text-gray-900 mb-2">Applications:</p>
                <p className="text-sm text-gray-700">Agricultural products, minerals, construction materials</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Type B FIBC</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Low breakdown voltage bags</strong> that prevent propagating brush discharges but do not dissipate static electricity. Suitable for combustible dust environments where flammable solvents are absent.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-bold text-gray-900 mb-2">Applications:</p>
                <p className="text-sm text-gray-700">Dry combustible powders, pharmaceutical ingredients</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Type C FIBC</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Conductive bags</strong> with interwoven conductive threads that must be grounded during filling and emptying. Provide safe dissipation of static electricity in flammable environments.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-bold text-gray-900 mb-2">Applications:</p>
                <p className="text-sm text-gray-700">Flammable powders, chemical industries, petroleum products</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Type D FIBC</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Anti-static bags</strong> made from static dissipative fabric that safely dissipates static charges without requiring grounding. The safest option for flammable environments.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-bold text-gray-900 mb-2">Applications:</p>
                <p className="text-sm text-gray-700">Flammable materials, pharmaceutical production, electronics</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Factor Ratings</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">5:1</div>
                <p className="text-sm text-gray-700">Single-use bags</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">6:1</div>
                <p className="text-sm text-gray-700">Multi-trip bags</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">8:1</div>
                <p className="text-sm text-gray-700">UN certified for hazardous materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Applications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Agriculture</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Grains and cereals</li>
                <li>• Seeds and fertilizers</li>
                <li>• Animal feed</li>
                <li>• Sugar and salt</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Chemical Industry</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Plastic resins and pellets</li>
                <li>• Powdered chemicals</li>
                <li>• Catalysts and additives</li>
                <li>• Pigments and dyes</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Construction</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Cement and concrete mix</li>
                <li>• Sand and aggregates</li>
                <li>• Gypsum and plaster</li>
                <li>• Construction waste</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mining and Minerals</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Ores and concentrates</li>
                <li>• Minerals and clays</li>
                <li>• Silica and kaolin</li>
                <li>• Metal powders</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Food Processing</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Flour and starches</li>
                <li>• Coffee and cocoa beans</li>
                <li>• Dried fruits and nuts</li>
                <li>• Food additives</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Pharmaceuticals</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Active ingredients</li>
                <li>• Excipients and fillers</li>
                <li>• Pharmaceutical powders</li>
                <li>• Packaging materials</li>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety and Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple safety factors and rigorous testing ensure secure handling of valuable and hazardous materials.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick filling and emptying processes reduce handling time and labor costs significantly.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Recycle className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Reusable design and recyclable materials minimize environmental impact and reduce packaging waste.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">
                Lower transportation costs per unit and reduced storage space requirements deliver significant savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Importance in Modern Industry</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FIBC bags have revolutionized bulk material handling by providing a standardized, efficient, and safe packaging solution that bridges the gap between small-scale packaging and bulk transport. Their adoption has led to significant improvements in logistics efficiency, reduced handling costs, and enhanced workplace safety across multiple industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The versatility of FIBC bags allows manufacturers to customize designs for specific applications, from food-grade bags for agricultural products to UN-certified bags for hazardous chemicals. This adaptability, combined with their cost-effectiveness and environmental benefits, makes FIBC bags an indispensable component of modern supply chain operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As global trade continues to expand and industries seek more efficient and sustainable packaging solutions, FIBC bags are expected to play an increasingly important role in facilitating the movement of bulk materials worldwide. Their continued evolution through innovative materials and designs ensures they remain at the forefront of industrial packaging technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
