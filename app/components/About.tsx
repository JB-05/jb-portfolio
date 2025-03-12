'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { Button } from './shared/Button';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { BsAward, BsBook, BsPatchCheck } from 'react-icons/bs';

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
    description: "Currently pursuing coursework in Data Structures, Algorithms, Object-Oriented Programming, Web Development, and Software Engineering."
  },
  {
    degree: "Higher Secondary Education",
    school: "Good Shephered Public School and Junior College Thengana Changancherry Kottayam",
    year: "2021 - 2023",
    description: "Specialization: Computer Science (11th and 12th Grade)"
  }
];

const certifications = [
  {
    name: "NPTEL Java Programming",
    issuer: "IIT Kharagpur",
    year: "2023",
    link: "https://nptel.ac.in/"
  },
  {
    name: "Cyber Security Hardware Workshop",
    issuer: "IEEE SB CEK",
    year: "2023",
    link: "https://ieee.org/"
  },
  {
    name: "Flutter Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
    link: "https://www.udemy.com/"
  }
];

export const About = () => {
  return (
    <Section id="about" fullHeight className="py-8">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
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
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              I&apos;m a passionate Full-Stack and Mobile App Developer with a strong foundation in computer science and engineering.
              My journey in software development is driven by a commitment to creating innovative solutions and continuous learning.
              I believe in writing clean, maintainable code and building user-centric applications that solve real-world problems.
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
                className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors"
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

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <BsBook className="text-blue-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <BsAward className="text-blue-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-white font-medium">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                    >
                      View Certificate <BsPatchCheck className="text-xs" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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