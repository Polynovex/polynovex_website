import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const paintSamples = [
    {
      id: 1,
      name: 'Stalo Premium White',
      category: 'Interior',
      color: '#FFFFFF',
      description: 'Pure white premium paint perfect for modern interiors',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      name: 'Ocean Blue',
      category: 'Exterior',
      color: '#1E40AF',
      description: 'Durable blue paint ideal for exterior walls',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Forest Green',
      category: 'Industrial',
      color: '#059669',
      description: 'Heavy-duty green paint for industrial applications',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Sunset Orange',
      category: 'Interior',
      color: '#F97316',
      description: 'Vibrant orange paint for accent walls',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      name: 'Charcoal Gray',
      category: 'Exterior',
      color: '#374151',
      description: 'Modern gray paint for contemporary designs',
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      name: 'Royal Purple',
      category: 'Interior',
      color: '#7C3AED',
      description: 'Elegant purple paint for luxury interiors',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      name: 'Cream Beige',
      category: 'Interior',
      color: '#FEF3C7',
      description: 'Warm beige paint for cozy living spaces',
      image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      name: 'Steel Blue',
      category: 'Industrial',
      color: '#475569',
      description: 'Robust steel blue for commercial buildings',
      image: 'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      name: 'Crimson Red',
      category: 'Exterior',
      color: '#DC2626',
      description: 'Bold red paint for striking exteriors',
      image: 'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Interior', 'Exterior', 'Industrial'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSamples = activeCategory === 'All' 
    ? paintSamples 
    : paintSamples.filter(sample => sample.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1200)'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Paint <span className="text-yellow-300">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our extensive collection of Stalo Paint colors and finishes. 
              From interior elegance to industrial durability.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stalo Paint Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Browse our premium paint samples by category. Each color is carefully formulated 
              for specific applications and durability requirements.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSamples.map((sample) => (
              <div
                key={sample.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative group cursor-pointer" onClick={() => setSelectedImage(sample)}>
                  <img
                    src={sample.image}
                    alt={sample.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      sample.category === 'Interior' ? 'bg-blue-100 text-blue-800' :
                      sample.category === 'Exterior' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {sample.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: sample.color }}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-900">{sample.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{sample.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Color: {sample.color}
                    </span>
                    <button
                      onClick={() => setSelectedImage(sample)}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-96 object-cover rounded-t-xl"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: selectedImage.color }}
                ></div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedImage.name}</h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                    selectedImage.category === 'Interior' ? 'bg-blue-100 text-blue-800' :
                    selectedImage.category === 'Exterior' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedImage.category}
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{selectedImage.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Color Details</h3>
                  <p className="text-gray-600">Hex Code: {selectedImage.color}</p>
                  <p className="text-gray-600">Category: {selectedImage.category}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Need This Color?</h3>
                  <a
                    href={`https://wa.me/2348123456789?text=Hello%20Polynovex,%20I'm%20interested%20in%20${selectedImage.name}%20paint`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for custom color matching, bulk orders, or professional consultation 
            for your next painting project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348123456789?text=Hello%20Polynovex,%20I%20need%20paint%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Color Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;