'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const experience = [
  {
    title: "Front-end Developer",
    period: "2024 - Present",
    description: "Working as a front-end developer at Cybernix Yztha LLP, focusing on building modern web applications.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Developing responsive and user-friendly web interfaces",
      "Collaborating with team members on various projects",
      "Learning and implementing modern front-end technologies"
    ]
  },
  {
    title: "Full-Stack & Mobile App Developer",
    period: "2023 - Present",
    description: "Leading development of innovative solutions using modern technologies.",
    skills: ["React", "Node.js", "Flutter", "MongoDB"],
    achievements: [
      "Developed and deployed multiple full-stack applications",
      "Created cross-platform mobile apps with Flutter",
      "Implemented responsive and user-friendly interfaces"
    ]
  }
];

const education = [
  {
    title: "B.Tech in Computer Science",
    period: "2023 - 2027",
    institution: "IHRD College of Engineering Kallooppara",
    description: "Pursuing degree with focus on software development and computer science fundamentals.",
    achievements: [
      "Maintained high academic performance",
      "Active in technical clubs and events",
      "Completed multiple technical certifications",
    ]
  }
];

const achievements = [
  {
    title: "Hackathon Champion",
    period: "2025",
    description: "Won first place in national level hackathons for innovative solutions.",
    details: [
      "Developed AI-powered healthcare solution",
      "Created IoT-based smart agricultural management system",
      "Built nutrition tracking app for focused on malnourished childern"
    ]
  }
];

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
  skills?: string[];
  achievements?: string[];
  details?: string[];
  icon: React.ComponentType<{ className?: string }>;
  isLast?: boolean;
}

const TimelineItem = ({ title, period, description, skills, achievements, details, icon: Icon, isLast = false }: TimelineItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative pl-8 pb-8 group"
  >
    {!isLast && (
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50"
      />
    )}
    <motion.div 
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300"
    >
      <Icon className="text-white text-sm" />
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className="bg-gray-900/40 rounded-xl p-6 backdrop-blur-xl border border-gray-700/30 group-hover:border-blue-500/30 transition-all duration-300 shadow-xl shadow-black/10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{title}</h3>
        <p className="text-blue-400 font-medium text-sm md:text-base">{period}</p>
      </div>
      <p className="text-gray-300/90 mb-6">{description}</p>
      {skills && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h4 className="text-white/80 font-medium mb-3 text-sm uppercase tracking-wider">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/20 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
      {achievements && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <h4 className="text-white/80 font-medium mb-3 text-sm uppercase tracking-wider">Achievements</h4>
          <ul className="space-y-2.5">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start group/item"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 group-hover/item:bg-blue-400 transition-colors duration-300" />
                <span className="text-gray-300/90 group-hover/item:text-blue-400 transition-colors duration-300">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      {details && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-white/80 font-medium mb-3 text-sm uppercase tracking-wider">Details</h4>
          <ul className="space-y-2.5">
            {details.map((detail, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start group/item"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 group-hover/item:bg-purple-400 transition-colors duration-300" />
                <span className="text-gray-300/90 group-hover/item:text-purple-400 transition-colors duration-300">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  </motion.div>
);

export const Experience = () => {
  return (
    <Section id="experience" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            A journey through my professional experience, education, and notable achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                period={exp.period}
                description={exp.description}
                skills={exp.skills}
                achievements={exp.achievements}
                icon={FaBriefcase}
                isLast={index === experience.length - 1}
              />
            ))}
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.title}
                period={edu.period}
                description={edu.description}
                icon={FaGraduationCap}
                isLast={index === education.length - 1}
              />
            ))}
            {achievements.map((achievement, index) => (
              <TimelineItem
                key={index}
                title={achievement.title}
                period={achievement.period}
                description={achievement.description}
                details={achievement.details}
                icon={FaTrophy}
                isLast={index === achievements.length - 1}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow duration-300 group"
            >
              <span className="mr-2">Download Resume</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}; 