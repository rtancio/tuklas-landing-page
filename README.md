# Tuklas Inspiring Travel & Tours - Landing Page

## About Tuklas
Tuklas ("Discover" in Filipino) is a travel and tourism company focused on creating meaningful travel experiences while making a positive impact on local communities. We believe in connecting travelers with local cultures through social immersion tourism.

## Project Overview
This repository contains the landing page and blog section for Tuklas Inspiring Travel & Tours. The website showcases our mission of combining exploration with social causes and community empowerment.

## Features

### Landing Page
- Modern, responsive design with smooth animations
- Hero section with clear value proposition
- Feature highlights of our unique travel experiences
- Mission statement and impact showcase
- Blog section with featured stories
- Newsletter subscription
- Social media integration
- Contact information

### Blog Section
1. Blog Preview on Landing Page
   - Featured post with hero layout
   - Recent stories in grid layout
   - Three distinct blog card templates
   - Quick navigation to full blog

2. Full Blog Page (`/blog`)
   - Comprehensive blog listing
   - Advanced filtering capabilities:
     - Category-based filtering
     - Search functionality
     - Tag-based organization
   - Pagination system
   - Responsive grid layout
   - Three template styles:
     - Featured (large hero layout)
     - Default (standard blog card)
     - Minimal (compact view)
   - Author information display
   - Custom SVG illustrations for:
     - Blog post covers
     - Author avatars
     - Category icons

## Technologies Used
- React
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Custom SVG illustrations
- Responsive design principles

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd tuklas/landing-page
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

## Project Structure
```
tuklas/landing-page/
├── public/                 # Public assets
│   ├── favicon.svg        # Site favicon
│   ├── logo192.svg        # Logo for smaller devices
│   ├── logo512.svg        # Logo for larger devices
│   └── manifest.json      # Web app manifest
├── src/                   # Source files
│   ├── assets/           # Static assets
│   │   └── blog/         # Blog-related images
│   ├── components/       # React components
│   │   ├── blog/        # Blog-specific components
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Page components
│   │   └── blog/        # Blog-related pages
│   └── styles/          # CSS/SCSS files
├── .gitignore           # Git ignore file
└── README.md            # Project documentation
```

## Component Structure

### Blog Components
1. BlogSection.jsx
   - Landing page blog preview
   - Featured post display
   - Recent posts grid

2. BlogPage.jsx
   - Full blog listing page
   - Search and filtering
   - Pagination

3. BlogCard.jsx
   - Reusable blog post card
   - Three template variations
   - Animated interactions

4. Supporting Components
   - SearchBar.jsx: Blog search functionality
   - CategoryFilter.jsx: Category filtering
   - Pagination.jsx: Page navigation

## Styling
- Custom color scheme using Tailwind CSS
- Responsive design for all screen sizes
- Smooth animations and transitions
- Consistent branding throughout

## Contributing
Please read our contributing guidelines before submitting pull requests.

## License
This project is proprietary and confidential.

## Contact
For any inquiries, please contact [contact information]