export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  type: 'trophy' | 'certificate' | 'award' | 'exam';
  imageUrl: string;
  description: string;
  tags?: string[];
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Participant – SRM Builds 7.0 Hackathon',
    subtitle: 'SRM University, Haryana',
    date: '2026-03-15',
    type: 'certificate',
    imageUrl: '/images/srmbuild_harsh.png',
    description: 'Built MemoryOS - an AI-powered second brain application with full authentication and database integration. Competed against 50+ teams and emerged as winners in a 36-hour intense coding sprint.',
    tags: ['Hackathon', 'Web Dev', 'AI', 'Full Stack'],
  },
  {
    id: '2',
    title: 'Smart India Hackathon 2024',
    subtitle: 'College Level Qualifier',
    date: '2025-09-20',
    type: 'certificate',
    imageUrl: '/images/sih_harsh.jpg',
    description: 'Cleared the internal college-level round of SIH 2024 - selected to represent the institution among competitive teams. Developed an innovative solution for a government-identified problem statement.',
    tags: ['SIH', 'Problem Solving', 'Innovation'],
  },
  {
    id: '3',
    title: 'NDA Written + SSB Selection Board',
    subtitle: '1 AFSB Dehradun - July 2025',
    date: '2025-07-15',
    type: 'exam',
    imageUrl: '/images/nda_harsh.jpg',
    description: 'Cleared the NDA written examination and successfully underwent the rigorous 5-day SSB (Services Selection Board) selection process at 1 Air Force Selection Board, Dehradun.',
    tags: ['Defense', 'Leadership', 'Aptitude'],
  },
  {
    id: '4',
    title: 'CLAT 2024',
    subtitle: 'National Law Entrance Examination',
    date: '2024-12-03',
    type: 'exam',
    imageUrl: '/images/clat_harsh.jpg',
    description: "Appeared for one of India's most competitive law entrance exams, demonstrating academic breadth beyond technical fields and showcasing versatility in competitive examinations.",
    tags: ['Law', 'Competitive Exam', 'Academic'],
  },
  {
    id: '5',
    title: '2nd place - Extempore Event',
    subtitle: 'SRM University Event',
    date: '2025-11-27',
    type: 'certificate',
    imageUrl: '/images/ICextempore_harsh.jpg',
    description: 'Secured 2nd place in the extempore event organized by Internal Committee at SRM University.',
    tags: ['Public Speaking', 'Presentation', 'Communication'],
  },
   {
    id: '6',
    title: '2nd place - Extempore Event',
    subtitle: 'SRM University Event',
    date: '2026-03-30',
    type: 'certificate',
    imageUrl: '/images/ThinkTech_harsh.jpg',
    description: 'Secured 2nd place in the extempore event organized by ThinkTech:STEM Orator\'s Society at SRM University.',
    tags: ['Public Speaking', 'Presentation', 'Communication'],
  },
  {
    id: '7',
    title: '2rd place - Quiz Competition',
    subtitle: 'SRM University Event',
    date: '2026-04-30',
    type: 'certificate',
    imageUrl: '/images/QuizPhy_harsh.jpg',
    description: 'Secured 2nd place in the quiz competition organized by Department of Physics on the theme of "Science is for everyone 3.0" at SRM University.',
    tags: ['Quiz', 'Knowledge', 'Competition'],
  }, 
];

export const accentColors = [
  '#ff102a',
  '#eb6a2e',
  '#facc15',
  '#4ade80',
  '#38bdf8',
];

export function getAccentColor(index: number): string {
  return accentColors[index % accentColors.length];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export function getTypeIcon(type: Achievement['type']): string {
  switch (type) {
    case 'trophy':
      return '🏆';
    case 'certificate':
      return '📜';
    case 'award':
      return '🥇';
    case 'exam':
      return '🏅';
    default:
      return '🏅';
  }
}
