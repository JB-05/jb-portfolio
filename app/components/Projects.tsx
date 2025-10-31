'use client';

import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { Container } from './shared/Container';
import { FaMobileAlt, FaLeaf, FaRobot, FaChartLine, FaHeart } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  period: string;
  features: string[];
  icon: typeof FaMobileAlt;
  iconBg: string;
  borderColor: string;
  bulletColor: string;
  statusColor: string;
}

const projects: Project[] = [
  {
    title: "Malnourishment Tracking & Prevention App",
    description: "An AI-powered mobile application addressing child malnutrition through early detection, prevention, and community support. The app combines smart analytics with community engagement to combat malnutrition at scale.",
    period: "2025 - Present",
    features: [
      "AI-Powered Risk Prediction for early malnutrition detection",
      "Smart meal analysis with nutritional improvement suggestions",
      "Government scheme integration for nutrition benefits",
      "Community-driven support system with &apos;Adopt a Child&apos; feature",
      "Gamified engagement for healthy eating habits",
      "Multi-child health dashboard for parents and healthcare workers"
    ],
    icon: FaHeart,
    iconBg: "bg-gradient-to-br from-rose-500/25 to-amber-400/25 ring-1 ring-rose-400/40",
    borderColor: "border-rose-500/20",
    bulletColor: "bg-rose-400",
    statusColor: "text-rose-300"
  },
  {
    title: "MediBharat",
    description: "A comprehensive health record management application that revolutionizes how users handle their medical information.",
    period: "January 2025 - Present",
    features: [
      "AI-powered medical record summaries",
      "Intelligent symptom checker",
      "Virtual consultation platform",
      "Secure data synchronization",
      "User-friendly interface"
    ],
    icon: FaMobileAlt,
    iconBg: "bg-gradient-to-br from-blue-600/25 to-indigo-500/25 ring-1 ring-blue-400/40",
    borderColor: "border-blue-500/20",
    bulletColor: "bg-blue-400",
    statusColor: "text-blue-300"
  },
  {
    title: "Smart Agricultural Monitoring System (SAMS)",
    description: "An IoT-based agricultural monitoring system that provides real-time insights and predictive analytics for crop management.",
    period: "December 2025 - Present",
    features: [
      "Real-time IoT sensor monitoring",
      "AI-driven crop analytics",
      "Predictive maintenance alerts",
      "Weather integration",
      "Data visualization dashboard"
    ],
    icon: FaLeaf,
    iconBg: "bg-gradient-to-br from-emerald-500/25 to-teal-400/25 ring-1 ring-emerald-400/40",
    borderColor: "border-emerald-500/20",
    bulletColor: "bg-emerald-400",
    statusColor: "text-emerald-300"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my recent projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`rounded-2xl p-6 transform transition-transform duration-300 group-hover:scale-[1.01] bg-[#111827] border ${project.borderColor} shadow-xl shadow-black/40`}> 
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${project.iconBg}`}>
                      <project.icon className="text-2xl" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="text-sm text-gray-300">{project.period}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                          <FaRobot className="text-blue-300" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                             <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                               <span className={`w-1.5 h-1.5 rounded-full ${project.bulletColor}`}></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Project Status */}
                     <div className={`flex items-center gap-2 text-sm ${project.statusColor}`}>
                      <FaChartLine />
                      <span>In Development</span>
                    </div>
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