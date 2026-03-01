/**
 * ========================================
 * PORTFOLIO MAIN PAGE
 * ========================================
 * This is the main landing page component that renders
 * all portfolio sections. The animated particles background
 * is provided by the Particles component in layout.tsx.
 * ========================================
 */

'use client';

import { useState, useEffect } from 'react';

// Import all portfolio section components
import Navbar from './components/Navbar';           // Navigation bar
import Hero from './components/Hero';               // Hero/intro section
import GitHubStats from './components/GitHubStats'; // GitHub statistics
import RepoList from './components/RepoList';       // Repository list
import ContributionGraph from './components/ContributionGraph'; // GitHub contributions
import Skills from './components/Skills';           // Skills showcase
import Projects from './components/Projects';       // Project portfolio
import Contact from './components/Contact';         // Contact form
import Footer from './components/Footer';           // Page footer
// Components imported above

/**
 * BackToTop Button Component
 * Shows a floating button to scroll back to top when scrolled down
 */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls past 500px
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't render if not visible
  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

/**
 * Main Home Component
 * Renders all portfolio sections with the particles background
 */
export default function Home() {
  return (
    // Main container - positioned relative for proper layering
    // The particles background (in layout.tsx) is fixed behind this content
    <main className="relative">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - Main introduction */}
      <Hero />
      {/* GitHub Statistics Section */}
      <GitHubStats />
      
      {/* Repository List Section */}
      <RepoList />
      
      {/* GitHub Contribution Graph */}
      <ContributionGraph />
      
      {/* Skills & Technologies Section */}
      <Skills />
      
      {/* Featured Projects Section */}
      <Projects />
      
      {/* Contact Form Section */}
      <Contact />
      
      {/* Page Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}

