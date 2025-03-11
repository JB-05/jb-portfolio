'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const experience = [
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
  },
  {
    title: "Technical Lead",
    period: "2022 - 2023",
    description: "Led technical teams in developing and maintaining applications.",
    skills: ["Team Leadership", "Project Management", "Code Review"],
    achievements: [
      "Led a team of 5 developers",
      "Improved code quality and development efficiency",
      "Mentored junior developers"
    ]
  }
];

const education = [
  {
    title: "B.Tech in Computer Science",
    period: "2020 - 2024",
    institution: "Your University",
    description: "Pursuing degree with focus on software development and computer science fundamentals.",
    achievements: [
      "Maintained high academic performance",
      "Active in technical clubs and events",
      "Completed multiple technical certifications"
    ]
  }
];

const achievements = [
  {
    title: "Hackathon Champion",
    period: "2023",
    description: "Won first place in multiple hackathons for innovative solutions.",
    details: [
      "Developed AI-powered healthcare solution",
      "Created IoT-based smart home system",
      "Built sustainable energy management platform"
    ]
  }
];

const TimelineItem = ({ title, period, description, skills, achievements, details, icon: Icon, isLast = false }) => (
  <div className="relative pl-8 pb-8">
    {!isLast && (
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-700" />
    )}
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
      <Icon className="text-white" />
    </div>
    <div className="bg-gray-800/50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-400 mb-4">{period}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {skills && (
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      {achievements && (
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">Achievements</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      {details && (
        <div>
          <h4 className="text-white font-medium mb-2">Details</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export const Experience = () => {
  return (
    <Section id="experience" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            A journey through my professional experience, education, and notable achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
                icon={FaBriefcase}
                isLast={index === experience.length - 1}
              />
            ))}
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                {...edu}
                icon={FaGraduationCap}
                isLast={index === education.length - 1}
              />
            ))}
            {achievements.map((achievement, index) => (
              <TimelineItem
                key={index}
                {...achievement}
                icon={FaTrophy}
                isLast={index === achievements.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}; 