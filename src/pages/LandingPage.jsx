import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TuklasLogo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = {
    facebook: 'https://facebook.com/tuklastravels',
    instagram: 'https://instagram.com/tuklastravels',
    twitter: 'https://twitter.com/tuklastravels',
    linkedin: 'https://linkedin.com/company/tuklas-travel'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TuklasLogo />
            <span className="text-2xl font-bold text-teal-800">Tuklas</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-teal-600">About</a>
            <a href="#experiences" className="text-gray-600 hover:text-teal-600">Experiences</a>
            <a href="#impact" className="text-gray-600 hover:text-teal-600">Impact</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600">Contact</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700"
          >
            Start Exploring
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-6"
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            Explore, Connect, Impact
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover meaningful travel experiences that make a positive impact on local communities. 
            Tuklas means "to discover" in Filipino, and we're here to help you discover the world in a new way.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700">
              Plan Your Journey
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full text-lg hover:bg-teal-50">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="experiences" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Travel with Tuklas?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🌍"
              title="Meaningful Experiences"
              description="Immerse yourself in authentic cultural experiences that go beyond traditional tourism."
            />
            <FeatureCard 
              icon="❤️"
              title="Community Impact"
              description="Every journey contributes directly to local community development and empowerment."
            />
            <FeatureCard 
              icon="🤝"
              title="Cultural Connection"
              description="Build genuine connections with local communities and fellow conscious travelers."
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        id="impact"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To create meaningful travel experiences that make a positive impact and give back to the communities we visit.
              We believe in the power of responsible tourism to transform lives and preserve cultures.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Travelers</h3>
                <p>Experience authentic cultural immersion while making a meaningful difference in local communities.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Communities</h3>
                <p>Benefit from sustainable tourism that preserves culture and contributes to local development.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join us in creating meaningful travel experiences that make a difference.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100"
          >
            Begin Your Adventure
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TuklasLogo />
              <span className="text-xl font-bold">Tuklas</span>
            </div>
            <p className="text-gray-400">Inspiring Travel & Tours</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#experiences" className="hover:text-white">Experiences</a></li>
              <li><a href="#impact" className="hover:text-white">Our Impact</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
              <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a></li>
              <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest adventures and impact stories.</p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 mb-2"
            />
            <button className="bg-teal-600 text-white px-4 py-2 rounded w-full hover:bg-teal-700">
              Subscribe
            </button>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tuklas Inspiring Travel & Tours. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
