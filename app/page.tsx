'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useEffect, useState, Suspense } from 'react'; // Added Suspense
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/project-card';
import SkillBadge from '@/components/skill-badge';
import ParallaxHero from '@/components/parallax-hero';
import MagneticButton from '@/components/magnetic-button';
import { ContactForm } from '@/components/ContactForm';

// Ensure all images are in the public directory
const projectImages = {
  credit_card: '/credit_card.png',
  resume: '/resume.png',
  placement: '/placement.png',
  scrapping: '/scrapping.png',
  sign: '/sign.png',
  bin: '/bin.png',
};

export default function Home() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Full Stack Developer', 'AI/ML Practitioner', 'Web3 Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen py-20 md:py-28 overflow-hidden">
        <ParallaxHero imageUrl="/ansh-photo.jpg" />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="container h-full flex items-center relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
            <motion.div
              className="flex-1 space-y-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Hi, I'm <span className="text-primary">ANSH MITTAL</span>
              </h1>
              <motion.div
                className="flex items-center gap-2 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <MapPin className="h-6 w-6" />
                <span>Dehradun, Uttarakhand, India</span>
              </motion.div>
              <motion.p
                className="text-2xl md:text-3xl text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Bachelor of Technology in Computer Science & Engineering
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl text-primary/80 font-semibold h-10 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {skills[currentSkill]}
                </motion.span>
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Transforming complex challenges into elegant solutions through code. Passionate about leveraging cutting-edge technologies to build impactful systems that make a difference.
              </motion.p>
              <motion.div
                className="flex gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <MagneticButton href="#contact" className="text-lg px-8 py-4">
                  Get in touch
                </MagneticButton>
                <Button variant="outline" asChild className="text-lg px-8 py-4">
                  <Link href="#projects">View my work</Link>
                </Button>
              </motion.div>
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Link href="https://github.com/anshmittal2004" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/anshmittal2004" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:anshmittal397@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <MagneticButton className="text-3xl font-bold px-8 py-6">About Me</MagneticButton>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a 3rd year BTech CSE student at Graphic Era University with a passion for building technology that makes a difference. My journey in tech is driven by the belief that code can solve real-world problems and create positive societal impact.
              </p>
              <p className="text-lg mb-4">
                As a full-stack developer and AI enthusiast, I specialize in creating intelligent systems that combine robust backend architecture with intuitive interfaces. My projects focus on practical solutions, from financial fraud prevention to bridging communication gaps for the hearing impaired.
              </p>
              <div className="mb-4 p-4 bg-card rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold mb-2">🌟 Dynamic Soft Skills:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Magnetic Public Speaking</li>
                  <li>• Innovative Team Leadership</li>
                  <li>• Creative Problem Solving</li>
                  <li>• Articulate Communication</li>
                  <li>• Strategic Time Management</li>
                  <li>• Insightful Analytical Thinking</li>
                  <li>• Captivating Presentation Skills</li>
                </ul>
              </div>
              <div className="mb-4 p-4 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">💡 Passionate About:</h4>
                <p className="text-sm">
                  Artificial Intelligence | Cloud Innovation | Web3 & Blockchain | Stock Market Trends | Machine Learning | Quantum Computing
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-semibold mb-2">📚 Hobbies:</h4>
                <p className="text-sm">
                  Book Lover 📖 | Photography Aficionado 📸 | Fitness Enthusiast 🏋️‍♂️ | Space Explorer 🌌 | Crypto Researcher ₿
                </p>
              </div>
              <p className="text-lg mt-4 font-medium">
                Driven to harness technology for a brighter tomorrow. ❤️
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium">Bachelor of Technology in CSE</h4>
                      <span className="text-muted-foreground">2022 - 2026</span>
                    </div>
                    <p className="text-primary">Graphic Era University, Dehradun</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      CGPA: 8.23 | Coursework: Algorithms, Data Structure, Software Engineering, Operating System, Computer Networks, Data Base Management System
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 mt-6">Technical Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="Web3" />
                      <SkillBadge name="Blockchain" />
                      <SkillBadge name="AI/ML" />
                      <SkillBadge name="Cloud Computing" />
                      <SkillBadge name="DevOps" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 mt-6">Coding Profiles</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="LeetCode" href="https://leetcode.com/u/ansh_2004/" />
                      <SkillBadge name="GeeksForGeeks" href="https://www.geeksforgeeks.org/user/anshmitcvpv/" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <MagneticButton className="text-3xl font-bold px-8 py-6">Skills</MagneticButton>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="C/C++" />
                  <SkillBadge name="Python" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="HTML/CSS" />
                  <SkillBadge name="SQL" />
                  <SkillBadge name="Bash" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React.js" />
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Scikit-Learn" />
                  <SkillBadge name="NumPy/Pandas" />
                  <SkillBadge name="Docker" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="VS Code" />
                  <SkillBadge name="Git/GitHub" />
                  <SkillBadge name="GitLab" />
                  <SkillBadge name="Google Cloud" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Data Structures" />
                  <SkillBadge name="Algorithms" />
                  <SkillBadge name="DBMS" />
                  <SkillBadge name="OOP" />
                  <SkillBadge name="OS" />
                  <SkillBadge name="Computer Networks" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <MagneticButton className="text-3xl font-bold px-8 py-6">Certifications</MagneticButton>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Machine Learning Specialization</h3>
                <p className="text-muted-foreground mb-4">Coursera | Stanford University</p>
                <p className="mb-4">Comprehensive training in machine learning algorithms, model evaluation, and practical applications using Python.</p>
                <Button variant="link" asChild>
                  <Link href="https://coursera.org/certificate/machine-learning" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full Stack Web Development</h3>
                <p className="text-muted-foreground mb-4">Udemy</p>
                <p className="mb-4">Mastered MERN stack development, REST APIs, and modern JavaScript frameworks.</p>
                <Button variant="link" asChild>
                  <Link href="https://udemy.com/certificate/fs-web-dev" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Google Cloud Fundamentals</h3>
                <p className="text-muted-foreground mb-4">Google Cloud</p>
                <p className="mb-4">Gained expertise in cloud computing concepts and GCP services.</p>
                <Button variant="link" asChild>
                  <Link href="https://www.cloudskillsboost.google/public_profiles/80441468-e2da-4b4f-add1-b789c6fcc18b" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <MagneticButton className="text-3xl font-bold px-8 py-6">Featured Projects</MagneticButton>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Vaultify-2025"
              description="Real-time cryptocurrency dashboard featuring live price tracking, interactive charts, and news aggregation with portfolio management capabilities, optimized for 100+ cryptocurrencies and 5,000+ concurrent users."
tags={['React.js', 'Chart.js', 'TailwindCSS', 'Redux', 'Firebase']}
              imageUrl={projectImages.cryptomy}
              demoUrl="https://vaultify-2025.vercel.app/"
              repoUrl="https://github.com/anshmittal2004/Vaultify-2025"
            />
            <ProjectCard
              title="Credit Card Fraud Detection"
              description="ML model detecting fraudulent transactions with 95% accuracy, reducing false positives by 40% and processing 10,000+ transactions/sec."
              tags={['Python', 'Scikit-Learn', 'Random Forest', 'Streamlit']}
              imageUrl={projectImages.credit_card}
              repoUrl="https://github.com/anshmittal2004/Credit-Card-Fraud-Detection"
            />
            <ProjectCard
              title="AI-Based Resume Screening"
              description="NLP-powered system reducing manual effort by 60% with 45% better accuracy in candidate shortlisting."
              tags={['Python', 'Flask', 'SpaCy', 'NLP']}
              imageUrl={projectImages.resume}
              repoUrl="https://github.com/anshmittal2004/Resume-Screening-System-Project"
            />
            <ProjectCard
              title="Placement Prediction System"
              description="Predictive tool with 85% accuracy forecasting student placements, increasing interview rates by 30%."
              tags={['Python', 'Machine Learning', 'Scikit-Learn', 'Pandas']}
              imageUrl={projectImages.placement}
              repoUrl="https://github.com/anshmittal2004/Placement-Prediction-System"
            />
            <ProjectCard
              title="Amazon Laptop Price Scraper"
              description="Web scraper tracking 500+ laptops daily, helping users save up to 15% on purchases."
              tags={['Python', 'Selenium', 'Pandas', 'BeautifulSoup']}
              imageUrl={projectImages.scrapping}
              demoUrl="#"
              repoUrl="https://github.com/anshmittal2004/Amazon-Laptop-Price-Scraper-with-Selenium"
            />
            <ProjectCard
              title="ISL Translation Solution"
              description="Team project developing AI tool for Indian Sign Language translation from audio-visual content (5-member team lead)."
              tags={['Python', 'OpenCV', 'Deep Learning', 'Flask']}
              imageUrl={projectImages.sign}
            />
            <ProjectCard
              title="IOT Based Smart Garbage Monitoring System"
              description="The unhygienic and nasty areas are increasing due to the overflow of garbage in public areas. To maintain cleanliness we made IOT-based garbage Monitoring System that will tell us whether the trash can is empty or full through the web server and you can know the status of your ‘Trash Can’ or 'Dumpsters'."
              tags={['C++', 'Arduino']}
              imageUrl={projectImages.bin}
              repoUrl="https://github.com/anshmittal2004/IOT-Smart-Garbage-Monitoring-System"
            />
          </div>
        </div>
      </section>

      {/* Contact Section with Suspense */}
      <section id="contact" className="py-16 sm:py-20 bg-muted/50">
        <div className="container max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
            <MagneticButton className="text-2xl sm:text-3xl font-bold px-6 sm:px-8 py-4 sm:py-6">
              Get In Touch
            </MagneticButton>
          </h2>
          <Card>
            <CardContent className="p-4 sm:p-8">
              <Suspense fallback={<div>Loading contact form...</div>}>
                <ContactForm />
              </Suspense>
              <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:anshmittal397@gmail.com" className="hover:text-primary text-sm sm:text-base">
                    anshmittal397@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/anshmittal2004" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/anshmittal2004" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Ansh Mittal. All rights reserved.</p>
            <p className="text-muted-foreground">Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
