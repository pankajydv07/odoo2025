# 🔁 Skill Swap – Exchange Skills, Empower Growth

## 🧠 Overview

**Skill Swap** is a full-stack web application that connects people through the power of shared skills and knowledge exchange. It's a modern platform where users can offer skills they have and request skills they want to learn, creating a collaborative community of mutual growth and learning.

Whether you're offering help or seeking it, every exchange builds trust and community. Grow, connect, and transform—one skill at a time, in a place made for mutual growth.


DEMO Video:https://drive.google.com/file/d/1ZMJxYjxYjjFzmE9jhrMcXIvn_1tA-n-r/view?usp=sharing

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication**: JWT-based login/signup with email & password
- **User Profiles**: Comprehensive profile management with skills offered/wanted
- **Privacy Controls**: Public/private profile visibility settings
- **Protected Routes**: Secure access control throughout the application
- **Profile Customization**: Update personal information, availability, and location

### 🏠 Home & Landing Page
- **Dynamic Landing Page**: Engaging hero section with gradient designs
- **Feature Showcase**: Clear presentation of platform capabilities
- **Call-to-Actions**: Strategic CTAs for "Browse Skills", "Start Learning", etc.
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Platform Overview**: Clear introduction to skill exchange concept

### 🔍 Browse & Discovery
- **Advanced Search**: Search by skill name, category, or keywords
- **Smart Filters**: Filter by availability, experience level, and user type
- **User Cards**: Clean, informative user profile cards with key details
- **Skill Matching**: Intelligent matching between offered and wanted skills
- **Real-time Updates**: Live availability and status updates
- **Pagination**: Efficient browsing through large user databases

### 👤 User Dashboard & Profiles
- **Personal Dashboard**: Overview of user's skills, requests, and activity
- **Skill Management**: Add, edit, and organize skills offered and wanted
- **Skill Categories**: Organized skill categorization system
- **Availability Settings**: Configure when you're available for skill exchanges
- **Location Services**: Location-based skill matching and suggestions

### 🔄 Skill Swap Requests
- **Request Management**: Send, receive, and manage skill swap requests
- **Request Details**: Comprehensive request forms with messaging
- **Status Tracking**: Track request states (pending, accepted, rejected, completed)
- **Scheduled Sessions**: Date and time scheduling for skill exchanges
- **Request History**: Complete history of all swap requests and their outcomes
- **Feedback System**: Rate and review completed skill exchanges

### 📊 Admin Panel & Management
- **Admin Dashboard**: Comprehensive analytics and platform statistics
- **User Management**: Admin tools for user moderation and management
- **Swap Monitoring**: Track and analyze skill swap activities
- **Data Export**: Export platform data for analysis and reporting
- **Platform Analytics**: Monitor user engagement and platform growth

### 🛡️ Security & Performance
- **Rate Limiting**: API protection against abuse and spam
- **Input Validation**: Comprehensive data validation using Joi
- **Error Handling**: Robust error handling and user feedback
- **CORS Protection**: Secure cross-origin resource sharing
- **Helmet Security**: Enhanced security headers and protection

### 🎨 Modern UI/UX Design
- **Tailwind CSS**: Modern, responsive design system
- **Lucide Icons**: Beautiful, consistent iconography
- **Loading States**: Smooth loading animations and spinners
- **Toast Notifications**: Real-time feedback with React Hot Toast
- **Modal System**: Clean, accessible modal interactions
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices

### 📱 Technical Features
- **Form Management**: React Hook Form for efficient form handling
- **Date Management**: Date-fns for date formatting and manipulation
- **API Integration**: Axios for HTTP requests and API communication
- **Context Management**: React Context for state management
- **Custom Hooks**: Reusable custom hooks for common functionality

## 🧬 Unique Features

- 🔄 **Skill Exchange System** – Direct skill-for-skill swapping without monetary transactions
- 📊 **Comprehensive Admin Panel** – Full platform management and analytics dashboard
- 🎨 **Modern Design System** – Beautiful, responsive UI with gradient themes and animations
- 🔒 **Enterprise-Grade Security** – JWT authentication, rate limiting, and input validation
- 📱 **Mobile-First Approach** – Fully responsive design optimized for all devices
- ⚡ **High Performance** – Vite-powered frontend with optimized build and development experience
- 🔍 **Advanced Filtering** – Smart search and filter capabilities for finding the perfect skill match
- 📅 **Scheduling Integration** – Built-in scheduling for skill exchange sessions
- 💬 **Integrated Communication** – Seamless messaging and request management system
- 🏷️ **Skill Categorization** – Organized skill taxonomy for easy discovery
- 🎯 **Real-Time Updates** – Live status updates and notifications throughout the platform

## 🧰 Tech Stack

### Frontend
- **React 18.2.0**: Modern React with hooks and functional components
- **Vite**: Lightning-fast build tool with hot module replacement
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router DOM**: Client-side routing and navigation
- **React Hook Form**: Performant forms with easy validation
- **Lucide React**: Beautiful and consistent icon library
- **React Hot Toast**: Elegant toast notifications
- **Axios**: Promise-based HTTP client for API requests
- **Date-fns**: Modern JavaScript date utility library

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Fast, minimalist web framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: Elegant MongoDB object modeling
- **JSON Web Token (JWT)**: Secure authentication and authorization
- **bcryptjs**: Password hashing and security
- **Joi**: Data validation library

### Security & Performance
- **Helmet**: Security middleware for Express
- **CORS**: Cross-origin resource sharing configuration
- **Express Rate Limit**: Rate limiting middleware
- **Input Validation**: Comprehensive request validation

### Development Tools
- **Nodemon**: Auto-restart development server
- **Concurrently**: Run multiple commands simultaneously
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pankajydv07/skill-swap-platform.git
   cd skill-swap-platform
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` file in the root directory:
   
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/skillswap
   
   # JWT Secret
   JWT_SECRET=your_super_secret_jwt_key_here
   
   # Client URL
   CLIENT_URL=http://localhost:3000
   
   # External APIs (optional)
   MAPBOX_TOKEN=your_mapbox_token_here
   ```

4. **Seed the database with sample data**
   ```bash
   cd server
   npm run seed
   ```

5. **Start the development servers**
   ```bash
   # From root directory
   npm run dev
   ```

   This will start both the backend (port 5000) and frontend (port 3000) concurrently.

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Login: john@example.com / password123

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run server:dev` - Start only the backend server
- `npm run client:dev` - Start only the frontend client
- `npm run seed` - Seed the database with sample data

## 📁 Project Structure

```
skill-swap-platform/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── common/     # Common components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── profile/    # Profile components
│   │   │   ├── swaps/      # Swap request components
│   │   │   └── admin/      # Admin components
│   │   ├── pages/          # Main application pages
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services and utilities
│   │   └── utils/          # Helper functions
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── utils/              # Server utilities
│   ├── config/             # Configuration files
│   ├── server.js
│   └── package.json
├── .env.example
├── README.md
└── package.json
```

## 🔧 Admin Features

### Default Admin Account
- **Email**: john@example.com
- **Password**: password123

### Admin Capabilities
- **Dashboard Analytics**: View platform statistics and user metrics
- **User Management**: Activate/deactivate users and manage accounts
- **Swap Monitoring**: Track all skill exchange activities
- **Data Export**: Export user and swap data for analysis

## 🎯 Key Features Implemented

### ✅ Core Functionality
- User registration and authentication
- Profile management with skills
- Skill browsing and filtering
- Swap request system
- Admin dashboard
- Responsive design
- Real-time notifications

### ✅ Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting protection
- CORS configuration

### ✅ User Experience
- Modern, clean interface
- Mobile-responsive design
- Loading states and error handling
- Toast notifications
- Intuitive navigation

## 🔗 Mockup Link

🔗 https://app.excalidraw.com/l/65VNwvy7c4X/8bM86GXnnUN

## 👨‍💻 Team – *Comet*

- 👩‍💻 **Rashi Agrawal** - Frontend Developer
- 👨‍💻 **Ujjawal Panday** - Backend Developer  
- 👩‍💻 **Humairah Shaik** - UI/UX Designer
- 👨‍💻 **Pankaj Yadav** - Full Stack Developer

> *We believe in building collaborative tools that create real impact.*

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
