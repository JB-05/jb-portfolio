'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';

interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'major' | 'hackathon' | 'competition' | 'quiz';
  icon: typeof FaTrophy;
}

const achievements: Achievement[] = [
  {
    title: "1st Place - Genesis Hackathon",
    description: "National-Level hackathon organized by MuLearn PRC, powered by Rasam Season 6 & Lumino, and supported by IEEE SB PRC & PROCESS",
    date: "2025",
    category: "major",
    icon: FaTrophy
  },
  {
    title: "2nd Runner Up - HACKATLY 3.0",
    description: "National level hackathon organised by IEDC College of engineering thalassery",
    date: "2025",
    category: "hackathon",
    icon: FaMedal
  },
  {
    title: "Finalist - IIT Madras Uzhavu Hackathon",
    description: "Top 20 Teams in Shaastra 2025",
    date: "2025",
    category: "hackathon",
    icon: FaAward
  },
  {
    title: "Finalist - InApp Innovate Hackathon",
    description: "IEEE Kerala Young Professionals",
    date: "2025",
    category: "hackathon",
    icon: FaAward
  },
  {
    title: "Finalist - NIT Calicut Hack4Good",
    description: "National level hackathon",
    date: "December 2024",
    category: "hackathon",
    icon: FaAward
  },
  {
    title: "RBI90 Quiz - State Level Qualified",
    description: "Qualified for state level competition",
    date: "2024",
    category: "quiz",
    icon: FaCertificate
  },
  {
    title: "Second Prize - Star Ship Scripting",
    description: "Coding competition conducted by Saintgits CAS Kottayam",
    date: "2024",
    category: "competition",
    icon: FaCertificate
  }
];

const categoryColors = {
  major: "from-blue-500 to-purple-500",
  hackathon: "from-green-500 to-emerald-500",
  competition: "from-yellow-500 to-orange-500",
  quiz: "from-pink-500 to-rose-500"
};

export const Achievements = () => {
  return (
    <Section id="achievements" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
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
              className={`relative group ${
                achievement.category === 'major' ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${categoryColors[achievement.category]} rounded-xl p-6 h-full transform transition-transform duration-300 group-hover:scale-[1.02]`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <achievement.icon className={`text-2xl ${
                      achievement.category === 'major' ? 'text-yellow-300' : 'text-white'
                    }`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold ${
                      achievement.category === 'major' ? 'text-yellow-300' : 'text-white'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-1">{achievement.description}</p>
                    <p className="text-gray-300 text-sm mt-2">{achievement.date}</p>
                  </div>
                </div>
                {achievement.category === 'major' && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full">
                      Major Achievement
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}; 