import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

// Import blog cover images
import cover1 from '../../assets/blog/cover-1.svg';
import cover2 from '../../assets/blog/cover-2.svg';
import cover3 from '../../assets/blog/cover-3.svg';

// Import avatar images
import avatar1 from '../../assets/blog/avatar-1.svg';
import avatar2 from '../../assets/blog/avatar-2.svg';
import avatar3 from '../../assets/blog/avatar-3.svg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Empowering Local Artisans in Rural Philippines",
      excerpt: "Discover how sustainable tourism is helping preserve traditional crafts and providing economic opportunities in remote villages.",
      category: "Community Impact",
      date: "March 15, 2024",
      image: cover1,
      author: {
        name: "Maria Santos",
        role: "Community Relations",
        avatar: avatar1
      }
    },
    {
      id: 2,
      title: "Cultural Immersion: Living with Indigenous Tribes",
      excerpt: "Experience authentic cultural exchange through our unique homestay program with indigenous communities.",
      category: "Cultural Exchange",
      date: "March 20, 2024",
      image: cover2,
      author: {
        name: "John Rivera",
        role: "Travel Guide",
        avatar: avatar2
      }
    },
    {
      id: 3,
      title: "Sustainable Tourism: Making a Difference",
      excerpt: "Learn about our initiatives to promote responsible travel and support local environmental conservation efforts.",
      category: "Sustainability",
      date: "March 25, 2024",
      image: cover3,
      author: {
        name: "Lisa Chen",
        role: "Sustainability Director",
        avatar: avatar3
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stories from the Journey</h2>
          <p className="text-xl text-gray-600">Discover inspiring stories of impact and connection from our travels.</p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-12">
          <BlogCard post={blogPosts[0]} template="featured" />
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard post={post} template={index % 2 === 0 ? "default" : "minimal"} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700 transition-colors"
            >
              View All Stories
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;