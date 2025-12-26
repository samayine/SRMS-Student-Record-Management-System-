# React + Vite
# Student Record Management System (SRMS)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A full-stack web application for managing student records, grades, academic schedules, and administrative tasks in an educational institution. The system provides role-based access control for administrators, teachers, students, and parents.

Currently, two official plugins are available:
## Project Overview

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
SRMS is a full-stack web application that streamlines school operations by centralizing student information management, grade tracking, payment monitoring, and exam scheduling. Built with React frontend and Laravel backend, the application addresses the need for a unified platform where different stakeholders can access and manage academic data according to their roles and permissions. The system features a RESTful API architecture, secure authentication, and database-driven data persistence.

## Key Features

### Authentication & Authorization
- Role-based login system supporting four user types: Admin, Teacher, Student, and Parent
- Signup functionality for parents
- Protected routes based on user roles

### Admin Dashboard
- **Student Management**: Add, edit, and delete student records
- **Teacher Management**: Manage teacher accounts and information
- **Payment Status**: View and monitor student payment records
- **Exam Schedule**: Create and manage examination schedules
- **Period Management**: Configure academic periods
- **Dashboard Overview**: View key metrics (total students, payments, upcoming exams)

### Teacher Dashboard
- **Grade Input**: Enter and manage student grades (test scores, assignments, final exams)
- **Exam Schedule**: View and manage examination schedules
- **Performance Tracking**: Monitor student performance metrics
- **Schedule Management**: View teaching schedule

### Student Dashboard
- **Grade Results**: View academic grades and results by semester
- **Exam Schedule**: Access upcoming examination schedules
- **Performance Analysis**: Track academic performance over time
- **Academic Period**: View current academic period information

### Parent Dashboard
- **Student Grades**: View child's academic performance and grades
- **Payment Status**: Check tuition and fee payment status
- **Exam Schedule**: Monitor child's examination schedule
- **Performance Tracking**: View detailed performance analytics

## Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **React Router DOM** 6.26.2 - Client-side routing
- **Vite** 5.4.8 - Build tool and development server
- **Tailwind CSS** 3.4.11 - Utility-first CSS framework
- **Framer Motion** 11.9.0 - Animation library
- **React Icons** 5.3.0 - Icon library

### Backend
- **Laravel** - PHP framework for RESTful API and server-side logic
- **Database** - MySQL/PostgreSQL for data persistence
- **Authentication** - Laravel's built-in authentication system

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **Netlify** - Frontend hosting and deployment platform
- **Backend Hosting** - Laravel backend deployment (VPS/Cloud platform)

## Project Structure

```
SRMS/
├── src/
│   ├── features/
│   │   ├── admin/          # Admin dashboard and components
│   │   │   ├── Components/ # Reusable admin components
│   │   │   ├── Pages/      # Admin page components
│   │   │   └── Styles/     # Admin-specific styles
│   │   ├── teacher/        # Teacher dashboard and components
│   │   ├── student/        # Student dashboard and components
│   │   ├── parent/         # Parent dashboard and components
│   │   └── Login/          # Authentication components
│   ├── assets/             # Images and static assets
│   ├── App.jsx             # Main application component with routing
│   └── index.jsx           # Application entry point
├── public/                 # Public assets
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── netlify.toml            # Netlify deployment configuration
```

The project follows a feature-based architecture, organizing code by user roles and functionalities.

## Setup & Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn package manager
- PHP 8.0 or higher
- Composer (PHP dependency manager)
- MySQL/PostgreSQL database
- Laravel backend API running (see backend repository for setup)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SRMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - The application will automatically open in your default browser
   - Default URL: `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Usage

### Running the Application

1. Start the development server using `npm run dev`
2. Navigate to `http://localhost:3000` in your browser
3. Select your role (Admin, Teacher, Student, or Parent) from the login page
4. Enter your credentials to access the respective dashboard

### Accessing Different Dashboards

- **Admin Dashboard**: `/admin/*`
- **Teacher Dashboard**: `/teacher/dashboard/*`
- **Student Dashboard**: `/student/*`
- **Parent Dashboard**: `/parent/*`
- **Login Page**: `/`
- **Signup Page**: `/signup` (Parent only)

## What This Project Demonstrates

### Engineering Skills

- **Full-Stack Development**: React frontend integrated with Laravel backend API
- **Modern React Development**: Functional components, hooks, and React Router for SPA navigation
- **Backend API Integration**: RESTful API consumption and data management
- **Database Design**: Data modeling and persistence with relational database
- **Authentication & Authorization**: Secure user authentication and role-based access control
- **Component Architecture**: Reusable, modular component design with feature-based organization
- **State Management**: Frontend state management with React hooks and API data synchronization
- **Responsive Design**: Mobile-first approach with Tailwind CSS utility classes
- **User Experience**: Role-based UI/UX design with appropriate interfaces for each user type
- **Build Tooling**: Vite for fast development and optimized production builds
- **Code Quality**: ESLint configuration for maintaining code standards
- **Deployment**: Frontend and backend deployment configuration

### Technical Practices

- RESTful API architecture and integration
- Protected route implementation with authentication
- API-based data fetching and state management
- Form handling and validation (frontend and backend)
- Database-driven application architecture
- Dynamic data rendering from API responses
- CSS-in-JS approach with Tailwind CSS
- Performance optimization through code splitting (route-based)
- Separation of concerns (frontend/backend architecture)

## Project Status

**Status**: Production-ready full-stack application

The application is a fully functional student record management system with integrated Laravel backend. It features:

- Complete backend API with Laravel framework
- Database-driven data persistence
- Secure authentication and authorization system
- Role-based access control for all user types
- RESTful API architecture

Future enhancements may include:

- Real-time data synchronization
- Enhanced error handling and validation
- Comprehensive testing suite implementation
- Advanced analytics and reporting features

---

## License

This project is available for educational and portfolio purposes.