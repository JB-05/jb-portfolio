'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

type AchievementTier =
  | 'first'
  | 'runnerUp'
  | 'secondRunnerUp'
  | 'finalist'
  | 'qualified'
  | 'secondPrize';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'major' | 'hackathon' | 'competition' | 'quiz';
  icon: typeof FaTrophy;
  tier: AchievementTier;
}

const achievements: Achievement[] = [
  {
    title: "1st Place - Genesis Hackathon",
    description: "National-Level hackathon organized by MuLearn PRC, powered by Rasam Season 6 & Lumino, and supported by IEEE SB PRC & PROCESS",
    date: "2025",
    category: "hackathon",
    icon: FaTrophy,
    tier: 'first',
  },
  {
    title: "Runner-Up - OneAI Hackathon",
    description: "Recognized by Speridian Technologies for AI-driven product innovation in the OneAI Hackathon (Startup Category).",
    date: "2025",
    category: "hackathon",
    icon: FaMedal,
    tier: 'runnerUp',
  },
  {
    title: "2nd Runner Up - HACKATLY 3.0",
    description: "National level hackathon organised by IEDC College of engineering thalassery",
    date: "2025",
    category: "hackathon",
    icon: FaMedal,
    tier: 'secondRunnerUp',
  },
  {
    title: "Finalist - IIT Madras Uzhavu Hackathon",
    description: "Top 20 Teams in Shaastra 2025",
    date: "2025",
    category: "hackathon",
    icon: FaAward,
    tier: 'finalist',
  },
  {
    title: "Finalist - InApp Innovate Hackathon",
    description: "IEEE Kerala Young Professionals",
    date: "2025",
    category: "hackathon",
    icon: FaAward,
    tier: 'finalist',
  },
  {
    title: "Finalist - NIT Calicut Hack4Good",
    description: "National level hackathon",
    date: "December 2024",
    category: "hackathon",
    icon: FaAward,
    tier: 'finalist',
  },
  {
    title: "RBI90 Quiz - State Level Qualified",
    description: "Qualified for state level competition",
    date: "2024",
    category: "quiz",
    icon: FaCertificate,
    tier: 'qualified',
  },
  {
    title: "Second Prize - Star Ship Scripting",
    description: "Coding competition conducted by Saintgits CAS Kottayam",
    date: "2024",
    category: "competition",
    icon: FaCertificate,
    tier: 'secondPrize',
  }
];

const tierGradients: Record<AchievementTier, string> = {
  // Punchy neo‑retro ramps tuned per prize tier
  first: 'from-[#FFE45E] via-[#FF9F1C] to-[#FF577F]', // acid gold → tangerine → neon coral
  runnerUp: 'from-[#C4FFF9] via-[#5BC0EB] to-[#9B5DE5]', // icy cyan → sky → violet
  secondRunnerUp: 'from-[#FEEAFA] via-[#FF6392] to-[#F3A712]', // soft rose → hot pink → warm amber
  finalist: 'from-[#7CFFCB] via-[#46F0F0] to-[#F5D300]', // mint → aqua → retro yellow
  qualified: 'from-[#6C63FF] via-[#E15FED] to-[#FF9B71]', // indigo → magenta → peach
  secondPrize: 'from-[#F9F871] via-[#FF8FAB] to-[#FFC857]', // neon yellow → candy pink → muted gold
};

export const Achievements = () => {
  return (
    <Section id="achievements" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-fg">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-ink-fg-soft text-base md:text-lg max-w-2xl mx-auto">
            A collection of my accomplishments in hackathons, competitions, and academic events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-neu-card p-6 h-full transform transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-r ${tierGradients[achievement.tier]} shadow-neu-soft`}>
                      <achievement.icon className="text-white text-lg" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-ink-fg">
                      {achievement.title}
                    </h3>
                    <p className="text-ink-fg-soft text-sm mt-1">
                      {achievement.description}
                    </p>
                    <p className="text-ink-fg-muted text-xs mt-2 uppercase tracking-[0.18em]">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}; 