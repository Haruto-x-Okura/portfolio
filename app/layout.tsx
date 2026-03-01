import './globals.css';
import type { Metadata } from 'next';

// Import the Particles component for the animated background
import Particles from './components/Particles';
// Import ClickSpark for interactive click effects (from existing .jsx file)
import ClickSpark from './components/ClickSpark.jsx';

export const metadata: Metadata = {
  title: 'Harsh Wardhan| Full-Stack & AI Engineer',
  description: 'Building scalable systems and intelligent applications with modern technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 
        Main body with background color fallback.
        The Particles component will render the animated background.
      */}
      <body className="bg-bg-primary text-white antialiased">
        {/* 
          ========================================
          ANIMATED PARTICLES BACKGROUND
          ========================================
          Replaces the previous CSS-based background effects 
          (grid overlay, radial blobs, light streaks) with an 
          interactive WebGL particle animation.
          
          Props:
          - particleCount: Number of particles (200 default)
          - speed: Animation speed (0.1 default)
          - particleColors: Array of colors for particles
          - alphaParticles: Enable transparent particles
          ========================================
        */}
        <Particles 
          particleCount={300}
          speed={0.15}
          particleColors={['#57f0ff', '#8b5cf6', '#ffffff']}
          alphaParticles={true}
          particleBaseSize={120}
        />
        
        {/* 
          ========================================
          CLICK SPARK EFFECT
          ========================================
          Wraps content and creates sparkling particle effects 
          on mouse clicks for interactive feedback.
          Props: sparkColor, sparkSize, sparkRadius, sparkCount, 
                 duration, easing, extraScale
          ========================================
        */}
        {/* @ts-expect-error - ClickSpark is a JSX component without TypeScript definitions */}
        <ClickSpark 
          sparkColor="#57f0ff"
          sparkCount={8}
          sparkSize={10}
          sparkRadius={15}
          duration={400}
        >
          {/* Main content rendered with click spark effects */}
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
