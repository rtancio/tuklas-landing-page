import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ post, template = "default" }) => {
  const templates = {
    default: (
      <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ y: -5 }}
      >
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm ml-4">{post.date}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    featured: (
      <motion.div 
        className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg overflow-hidden shadow-xl text-white"
        whileHover={{ y: -5 }}
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center mb-4">
              <span className="bg-white text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-teal-100 text-sm ml-4">{post.date}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
            <p className="text-teal-50 mb-6">{post.excerpt}</p>
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-teal-100">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    minimal: (
      <motion.div 
        className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
        whileHover={{ x: 5 }}
      >
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-teal-600">{post.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-gray-700">{post.author.name}</span>
        </div>
      </motion.div>
    )
  };

  return templates[template] || templates.default;
};

export default BlogCard;