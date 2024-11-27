import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../../components/blog/BlogCard';
import Pagination from '../../components/blog/Pagination';
import SearchBar from '../../components/blog/SearchBar';
import CategoryFilter from '../../components/blog/CategoryFilter';

// Import blog cover images
import cover1 from '../../assets/blog/cover-1.svg';
import cover2 from '../../assets/blog/cover-2.svg';
import cover3 from '../../assets/blog/cover-3.svg';

// Import avatar images
import avatar1 from '../../assets/blog/avatar-1.svg';
import avatar2 from '../../assets/blog/avatar-2.svg';
import avatar3 from '../../assets/blog/avatar-3.svg';

const BlogPage = () => {
  // Sample blog posts data with actual image paths
  const allPosts = [
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
    },
    {
      id: 4,
      title: "Traditional Cuisine: A Taste of Local Life",
      excerpt: "Exploring the rich culinary heritage of rural communities and how food tourism supports local economies.",
      category: "Food & Culture",
      date: "March 28, 2024",
      image: cover2,
      author: {
        name: "Miguel Cruz",
        role: "Food Expert",
        avatar: avatar2
      }
    },
    {
      id: 5,
      title: "Eco-Tourism: Preserving Natural Wonders",
      excerpt: "How responsible travel practices help protect endangered ecosystems while supporting local communities.",
      category: "Sustainability",
      date: "April 1, 2024",
      image: cover3,
      author: {
        name: "Sarah Johnson",
        role: "Environmental Specialist",
        avatar: avatar1
      }
    },
    {
      id: 6,
      title: "Youth Education Through Tourism",
      excerpt: "Exploring programs that connect travelers with local schools to support education initiatives.",
      category: "Community Impact",
      date: "April 5, 2024",
      image: cover1,
      author: {
        name: "David Lee",
        role: "Education Coordinator",
        avatar: avatar3
      }
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 4;

  // Get all unique categories
  const categories = ['All', ...new Set(allPosts.map(post => post.category))];

  // Filter posts based on category and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tuklas Travel Stories</h1>
          <p className="text-xl text-gray-600">Discover inspiring stories of impact and cultural connection</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Featured Post */}
        {currentPage === 1 && filteredPosts.length > 0 && (
          <div className="mb-12">
            <BlogCard post={filteredPosts[0]} template="featured" />
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard 
                post={post} 
                template={index % 2 === 0 ? "default" : "minimal"} 
              />
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No stories found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <Pagination 
            postsPerPage={postsPerPage}
            totalPosts={filteredPosts.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;