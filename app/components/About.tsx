'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { Button } from './shared/Button';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaBook, FaBriefcase } from 'react-icons/fa';

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    icon: FaCode
  },
  {
    category: "Frameworks & Libraries",
    items: ["Flutter", "FastAPI", "Node.js", "React", "Next.js"],
    icon: FaLaptopCode
  },
  {
    category: "Databases & Tools",
    items: ["SQL", "MongoDB", "Supabase", "Git", "Docker"],
    icon: FaServer
  },
  {
    category: "Design & UI/UX",
    items: ["Photoshop", "Illustrator", "Figma", "UI/UX Design", "Prototyping"],
    icon: FaMobileAlt
  }
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    school: "College of Engineering Kallooppara, Pathanamthitta",
    year: "2023 - Present",
    description: "Currently pursuing coursework in Data Structures, Algorithms, Object-Oriented Programming, Web Development, and Software Engineering.",
    link: "https://cek.ac.in",
    skills: ["Data Structures", "Algorithms", "Web Development", "Team Leadership"]
  },
  {
    degree: "Higher Secondary Education",
    school: "Good Shepherd Public School and Junior College, Thengana",
    year: "2021 - 2023",
    description: "Computer Science specialization during senior secondary schooling.",
    link: "https://goodshepherdjc.com/",
    skills: ["Problem Solving", "Programming Fundamentals", "STEM Projects"]
  }
];


export const About = () => {
  return (
    <Section id="about" fullHeight className="py-8">
      <Container>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto space-y-3">
              <span>
                I&apos;m a detail-driven Full-Stack and Mobile App Developer with a strong foundation in computer science and engineering.
                I focus on architecting resilient systems, shaping intuitive user experiences, and iterating quickly with modern tooling.
              </span>
              <span>
                My work spans production-grade web platforms, animated interfaces, and cross-platform applications where collaboration,
                performance, and accessibility standards are non-negotiable. Currently studying Artificial Intelligence development and exploring
                advanced AI integration in real-world projects, I continuously evolve my toolkit to deliver measurable impact.
              </span>
              <span>
                I believe in writing clean, maintainable code, documenting decisions, and mentoring peers so that every release raises the bar for quality.
              </span>
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <skill.icon className="text-blue-400 text-xl" />
                  <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Productivity Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaBriefcase className="text-blue-400 text-xl" />
              <h3 className="text-xl font-semibold text-white">Productivity Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Notion', 'Microsoft Office', 'LaTeX'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-xl">
                <FaBook />
              </span>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="space-y-2 border-b border-gray-700/60 pb-6 last:border-none last:pb-0">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    {edu.school}
                  </a>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs uppercase tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let&apos;s Work Together
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}; 