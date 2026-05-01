'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Trophy, ScrollText, Award, ChevronDown, GraduationCap } from 'lucide-react';
import { achievements, getAccentColor, formatDate, getTypeIcon, type Achievement } from '@/lib/achievements';

const typeIcons = {
  trophy: Trophy,
  certificate: ScrollText,
  award: Award,
  exam: GraduationCap,
};

const typeLabels = {
  trophy: 'Trophy',
  certificate: 'Certificate',
  award: 'Award',
  exam: 'Exam',
};

function FullAchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const accentColor = getAccentColor(index);
  const Icon = typeIcons[achievement.type];
  const formattedDate = formatDate(achievement.date);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative flex gap-4 md:gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline connector - left side */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        {/* Top connecting line */}
        {index > 0 && (
          <div
            className="w-1 h-8 mb-2 rounded-full"
            style={{ backgroundColor: getAccentColor(index - 1) }}
          />
        )}
        
        {/* Icon circle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{ 
            backgroundColor: `${accentColor}15`, 
            border: `3px solid ${accentColor}`,
            boxShadow: `0 0 20px ${accentColor}30`
          }}
        >
          <Icon className="w-6 h-6" style={{ color: accentColor }} />
        </motion.div>
        
        {/* Bottom connecting line */}
        {index < achievements.length - 1 && (
          <>
            <div
              className="w-1 flex-1 min-h-[40px] mt-3 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            {/* Chevron indicator */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown
                className="w-5 h-5 -mt-1"
                style={{ color: accentColor }}
              />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile timeline */}
      <div className="flex md:hidden flex-col items-center shrink-0">
        {index > 0 && (
          <div
            className="w-0.5 h-4 mb-2"
            style={{ backgroundColor: getAccentColor(index - 1) }}
          />
        )}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ 
            backgroundColor: `${accentColor}15`, 
            border: `2px solid ${accentColor}` 
          }}
        >
          <Icon className="w-4 h-4" style={{ color: accentColor }} />
        </div>
        {index < achievements.length - 1 && (
          <>
            <div
              className="w-0.5 flex-1 min-h-[20px] mt-2"
              style={{ backgroundColor: accentColor }}
            />
            <ChevronDown
              className="w-4 h-4 -mt-1"
              style={{ color: accentColor }}
            />
          </>
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 glass-card glass-card-hover overflow-hidden mb-8 ${
          isEven ? 'md:mr-8' : 'md:ml-8'
        }`}
        style={{ borderLeft: `4px solid ${accentColor}` }}
      >
        {/* Large image */}
        <div className="relative w-full aspect-video">
          <Image
            src={achievement.imageUrl}
            alt={achievement.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={index < 2}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Type badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
            style={{ 
              backgroundColor: `${accentColor}20`, 
              color: accentColor,
              border: `1px solid ${accentColor}40`
            }}
          >
            <span className="mr-1">{getTypeIcon(achievement.type)}</span>
            {typeLabels[achievement.type]}
          </div>
          
          {/* Date badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono bg-black/50 backdrop-blur-sm text-white border border-white/10">
            {formattedDate}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
            {achievement.title}
          </h3>
          
          <p className="text-sm md:text-base font-mono mb-4" style={{ color: accentColor }}>
            {achievement.subtitle}
          </p>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            {achievement.description}
          </p>
          
          {/* Tags */}
          {achievement.tags && achievement.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {achievement.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function AchievementsPage() {
  // Sort by date (newest first)
  const sortedAchievements = [...achievements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] relative overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 grid-overlay" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] radial-blob radial-blob-1" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] radial-blob radial-blob-2" />

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            
            <span className="text-sm font-mono text-neon-orange">/achievements</span>
          </div>
        </header>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              All <span className="text-gradient">Achievements</span>
            </h1>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-32 mx-auto rounded-full"
              style={{
                background: 'linear-gradient(90deg, #ff102a, #eb6a2e, #facc15, #4ade80, #38bdf8)',
              }}
            />
            
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              A chronological journey through my milestones, hackathon victories, certifications, and academic achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central vertical line for desktop */}
            <div 
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{
                background: 'linear-gradient(180deg, #ff102a, #eb6a2e, #facc15, #4ade80, #38bdf8)',
                opacity: 0.3
              }}
            />
            
            {sortedAchievements.map((achievement, index) => (
              <FullAchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              href="/#achievements"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff102a] to-[#eb6a2e] text-white font-semibold transition-all hover:shadow-lg hover:shadow-[#ff102a]/25 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
              Return to Main Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
