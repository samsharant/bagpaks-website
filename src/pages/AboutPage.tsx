import React from 'react';
import { Award, Target, Shield, Globe, Users, TrendingUp, Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Bagpaks Oman</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A trusted name in industrial packaging solutions, delivering quality and reliability across the Middle East and beyond
          </p>
          <a
            href="/Eng Arabic Brochure _ Mobile (1).pdf"
            download="Bagpaks_Company_Brochure.pdf"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Company Brochure
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bagpaks Oman has been at the forefront of industrial packaging innovation for over two decades. Established in the Sultanate of Oman, we have grown from a regional supplier to a recognized name in bulk packaging solutions across international markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our journey began with a simple mission: to provide high-quality, reliable packaging solutions that meet the demanding requirements of modern industry. Through continuous investment in technology, quality control, and customer service, we have built a reputation for excellence that spans continents.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Bagpaks Oman operates from our state-of-the-art facility in the Fala Al-Ouhi Industrial Area in Sohar, where we manufacture a comprehensive range of FIBC bags, Baffle bags, and Woven PP bags that serve diverse industries worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">20+</div>
                <div className="text-gray-700">Years of Excellence</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-700">Satisfied Clients</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                <div className="text-gray-700">Quality Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission and Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation in industrial packaging while maintaining unwavering commitment to quality and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="h-12 w-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class industrial packaging solutions that exceed customer expectations through continuous innovation, rigorous quality control, and exceptional service. We are committed to providing safe, reliable, and cost-effective packaging that enables our clients to succeed in their respective industries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-12 w-12 text-blue-900 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading provider of industrial packaging solutions in the Middle East and a respected global partner, recognized for our unwavering commitment to quality, innovation, and sustainability. We envision a future where Bagpaks Oman sets the standard for excellence in bulk packaging across all markets we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quality First</h3>
              <p className="text-blue-100 leading-relaxed text-center">
                We never compromise on quality. Every product undergoes rigorous testing to ensure it meets or exceeds international standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Customer Focus</h3>
              <p className="text-blue-100 leading-relaxed text-center">
                Our customers are at the heart of everything we do. We listen, understand, and deliver solutions tailored to their unique needs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex justify-center mb-4">
                <Globe className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Integrity</h3>
              <p className="text-blue-100 leading-relaxed text-center">
                We conduct business with honesty, transparency, and ethical responsibility in all our relationships and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border-2 border-blue-900">
              <div className="flex items-center mb-4">
                <Award className="h-12 w-12 text-blue-900 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">ISO 9001:2015</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Certified Quality Management System ensuring consistent quality in all our manufacturing processes and products. This certification demonstrates our systematic approach to meeting customer requirements and enhancing customer satisfaction.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-2 border-red-600">
              <div className="flex items-center mb-4">
                <Award className="h-12 w-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">ISO 21898</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Compliance with international standards for FIBC bags, ensuring our products meet stringent requirements for safety, strength, and performance. Our bags are tested and certified for various safety factors and applications.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">UN Certification</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Selected product lines are UN certified for the safe transportation of hazardous materials, meeting the strict requirements of international dangerous goods regulations. This certification enables our clients to safely transport sensitive and hazardous materials with complete confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility in Sohar is equipped with advanced machinery and technology, enabling us to produce high-quality packaging solutions at scale while maintaining rigorous quality control standards.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Advanced extrusion and weaving equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Automated quality testing laboratory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Skilled workforce with extensive training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Environmentally responsible production processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Comprehensive safety protocols and certifications</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Facility</h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Located in the Fala Al-Ouhi Industrial Area in Sohar, our facility represents the latest in industrial packaging manufacturing technology and operational excellence.
                </p>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <p className="text-sm font-bold text-white mb-2">Production Capacity</p>
                  <p className="text-2xl font-bold text-red-500">High-Volume Manufacturing</p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-sm font-bold text-white mb-2">Quality Control</p>
                  <p className="text-2xl font-bold text-red-500">100% Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the hundreds of companies that trust Bagpaks Oman for their industrial packaging needs. Contact us today to discuss how we can support your operations.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
            className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
