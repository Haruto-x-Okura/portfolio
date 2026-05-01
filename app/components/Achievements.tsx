'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Trophy, ScrollText, Award, GraduationCap } from 'lucide-react';
import { achievements, getAccentColor, formatDate, getTypeIcon, type Achievement } from '@/lib/achievements';

const typeIcons = {
  trophy: Trophy,
  certificate: ScrollText,
  award: Award,
  exam: GraduationCap,
};

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const accentColor = getAccentColor(index);
  const Icon = typeIcons[achievement.type];
  const formattedDate = formatDate(achievement.date);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex gap-4 md:gap-6"
    >
      {/* Timeline connector line */}
      <div className="flex flex-col items-center">
        {/* Top connecting line */}
        {index > 0 && (
          <div
            className="w-0.5 h-4 mb-2"
            style={{ backgroundColor: getAccentColor(index - 1) }}
          />
        )}
        
        {/* Icon circle */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${accentColor}20`, border: `2px solid ${accentColor}` }}
        >
          <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>
        
        {/* Bottom connecting line */}
        {index < 2 && (
          <>
            <div
              className="w-0.5 flex-1 min-h-[20px] mt-2"
              style={{ backgroundColor: accentColor }}
            />
            {/* Chevron down indicator */}
            <ChevronRight
              className="w-4 h-4 rotate-90 -mt-1"
              style={{ color: accentColor }}
            />
          </>
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 glass-card glass-card-hover p-4 md:p-5 mb-6"
        style={{ borderLeft: `3px solid ${accentColor}` }}
      >
        <div className="flex gap-4">
          {/* Thumbnail image */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden">
            <Image
              src={achievement.imageUrl}
              alt={achievement.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{getTypeIcon(achievement.type)}</span>
              <span className="text-xs font-mono text-gray-400">{formattedDate}</span>
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold text-white leading-tight mb-1">
              {achievement.title}
            </h3>
            
            <p className="text-sm text-neon-orange font-mono mb-2">
              {achievement.subtitle}
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const previewAchievements = achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A timeline of milestones, hackathon victories, and certifications that shaped my journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {previewAchievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>

        {/* See all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card glass-card-hover text-white font-medium transition-all hover:gap-3"
          >
            See All Achievements
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
