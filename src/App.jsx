import React, { useEffect, useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Star,
  FolderKanban,
  User,
  ArrowUp,
  Calendar,
  Target,
  Zap,
  ChartBar,
  Download,
  Eye,
  X,
  FileText,
  MessageSquare,
  Award,
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
// Skill logos (placeholder - you'll need to add actual images)
import reactLogo from "./assets/React.jpg";
import jiraLogo from "./assets/Jira.jpg";
import servicenowLogo from "./assets/Servicenow.jpg";
import sqlLogo from "./assets/SQL.jpg";
import agileLogo from "./assets/Agile.jpg";
import resumePDF from "./assets/Updated-ICHHA SHARMA.pdf";
import Avatar from "./assets/Isha-sharma-img.JPG";
export default function PortfolioWebsite() {
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // State to track download status
  const controls = useAnimation();
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    certificates: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  const Logo = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="45" fill="#3B82F6" />
        <circle cx="35" cy="40" r="10" fill="#F97316" />
        <circle cx="65" cy="40" r="10" fill="#F97316" />
        <path d="M35 60 Q50 70, 65 60" stroke="#F97316" stroke-width="4" fill="none" />
      </svg>
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
      // Update active section based on scroll position
      const sections = ["hero", "about", "certificates", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Enhanced entrance animation for the entire page
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);
  const skills = [
    { name: "Agile & Scrum Methodologies", logo: agileLogo, level: 95 },
    { name: "ServiceNow Platform", logo: servicenowLogo, level: 90 },
    { name: "JIRA & Confluence", logo: jiraLogo, level: 92 },
    { name: "SQL & Data Analytics", logo: sqlLogo, level: 85 },
    { name: "CI/CD Pipelines", logo: reactLogo, level: 80 },
    { name: "Stakeholder Management", logo: agileLogo, level: 94 },
    { name: "Release Management", logo: servicenowLogo, level: 88 },
    { name: "Backlog Prioritization", logo: jiraLogo, level: 93 },
  ];
  const experiences = [
    {
      role: "ServiceNow Scrum Master",
      company: "ServiceNow",
      period: "August 2023 — Present",
      location: "Remote",
      highlights: [
        "Facilitated collaborative sessions with Product Owners and stakeholders to define product goals, refine platform roadmap, resulting in 100% stakeholder alignment and 15% reduction in scope-related conflicts.",
        "Managed all Agile ceremonies, increasing meeting efficiency by 20% and sprint delivery predictability by 18%.",
        "Acted as a shield for development team, removing blockers and managing dependencies, reducing sprint disruptions by 25%.",
        "Coached developers, admins, and business stakeholders on Agile best practices, accelerating Agile maturity by 30% over two quarters.",
        "Monitored delivery progress using Agile metrics, driving 20% improvement in sprint velocity and reducing carryover work by 12%.",
        "Protected team from scope creep, ensuring sprint commitments were met with a 95% on-time delivery rate."
      ],
      achievements: [
        "Improved cross-functional engagement scores by 25% in team health surveys",
        "Increased backlog readiness by 35% through effective grooming sessions",
        "Reduced post-release defects by 22% through improved retrospective processes"
      ]
    },
    {
      role: "Scrum Master",
      company: "New York Life Insurance",
      period: "July 2020 — August 2023",
      location: "New York, NY",
      highlights: [
        "Supported Agile delivery teams working on insurance, financial services, and enterprise IT systems, improving workflow efficiency by 20% while ensuring compliance with regulatory requirements.",
        "Assisted in organizing all Scrum ceremonies, helping teams achieve 95% on-time delivery against sprint commitments.",
        "Collaborated with senior Scrum Masters and Product Owners to manage product backlog, ensuring 100% alignment of prioritized user stories with business value.",
        "Helped remove blockers by coordinating with internal stakeholders, QA teams, and business units, reducing critical task delays by 15%.",
        "Contributed to training sessions on Agile best practices, resulting in 25% increase in Agile adoption rate across teams.",
        "Assisted Product Owners in backlog grooming and user story clarification, resulting in 30% fewer story rework instances."
      ],
      achievements: [
        "Improved inter-team coordination scores by 20% in stakeholder feedback surveys",
        "Increased delivery visibility to stakeholders by 40% through burn-down charts and metrics",
        "Improved customer experience ratings by 18% and operational efficiency by 22%"
      ]
    },
    {
      role: "Project Coordinator",
      company: "PLENITUDE TECHNOLOGIES INC",
      period: "May 2018 — July 2020",
      location: "Remote",
      highlights: [
        "Assisted Project Manager in developing and executing detailed project plans, schedules, and work breakdown structures, ensuring 98% on-time, in-scope delivery.",
        "Coordinated cross-functional resources, assigned tasks, and aligned efforts between teams, stakeholders, and vendors, improving team collaboration efficiency by 25%.",
        "Maintained comprehensive project documentation, increasing documentation accuracy by 30%.",
        "Acted as central communication point, facilitating collaboration across departments and resolving conflicts, resulting in 20% reduction in escalation cases.",
        "Monitored project progress using dashboards and tracking tools, improving reporting turnaround time by 40%.",
        "Identified and tracked potential risks, maintaining risk registers that reduced project delays by 18%."
      ],
      achievements: [
        "Helped reduce overspending by 12% through budget tracking and cost control",
        "Achieved 100% audit readiness through contract compliance and documentation",
        "Boosted productivity by 22% through process improvement initiatives"
      ]
    },
  ];
  const certificates = [
    {
      title: "Professional Scrum Master (PSM I)",
      issuer: "Scrum.org",
      date: "2022",
      description: "Certified in Scrum framework, roles, events, and artifacts with practical knowledge of implementing Scrum."
    },
    {
      title: "Professional Scrum Product Owner (PSPO)",
      issuer: "Scrum.org",
      date: "2022",
      description: "Certified in maximizing product value through effective Product Backlog management and stakeholder collaboration."
    },

  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  // Function to handle resume download from assets folder
  const handleDownloadResume = () => {
    setIsDownloading(true);
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumePDF; // Use the imported PDF
    link.download = 'Ichha_Sharma_Resume.pdf'; // The name the file will be saved as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Reset state after download
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };
  // Enhanced floating animation for decorative elements (REMOVED FOR LIGHT THEME)
  const FloatingOrb = ({ delay = 0, size = "w-64 h-64", color = "cyan" }) => {
    return null;
  };
  // Resume content from your PDF (formatted for display)
  const resumeContent = {
    personalInfo: {
      name: "ICHHA SHARMA",
      phone: "+1 925-922-7772",
      email: "4ishasharma@gmail.com",
      location: "United States"
    },
    professionalSummary: `Results-driven Certified Scrum Master (PSM I) and Product Owner (PSPO) with over 7 years of experience driving Agile transformation, delivering enterprise IT, insurance, and ServiceNow platform solutions. Proven track record in sprint planning, backlog prioritization, release management, and stakeholder alignment, achieving measurable gains in delivery predictability, quality, and time-to-market. Adept at fostering cross-functional collaboration, coaching teams on Agile best practices, and removing delivery impediments to maintain high-performance team environments. Skilled in project coordination, workflow optimization, and KPI-driven decision-making, with demonstrated success in improving operational efficiency by up to 30% and stakeholder engagement by 40%. Technically proficient in JIRA, Confluence, Miro, Mural, SQL, and CI/CD pipelines, with expertise across Agile, Waterfall, and hybrid delivery models.`,
    technicalSkills: [
      "Sprint Planning & Execution",
      "Backlog Prioritization",
      "Release Management",
      "Agile Transformation",
      "Scrum & Kanban Methodologies",
      "Iterative Development",
      "Release & Delivery Coordination and Management",
      "Agile Project Management & Documentation",
      "Agile and Waterfall methodologies",
      "Scrum, Lean, SAFe, Kanban Frameworks",
      "Data-Driven Reporting & Decision Making",
      "Conflict Resolution/ Problem Solving",
      "Gap Analysis & Business Value Optimization",
      "Cross-Functional Team Leadership",
      "Risk & Issue Mitigation",
      "Requirements Gathering",
      "Jira, Confluence, Miro, Mural",
      "UX/UI",
      "PRD & User Story Creation",
      "Software Development Lifecycle (SDLC)",
      "Stakeholder Management",
      "Budget & Resource Management",
      "Business & Technical Alignment",
      "Story Mapping & Dependency Mapping",
      "Capacity Planning",
      "Data Analytics & Reporting",
      "Performance Metrics & KPI Tracking",
      "Predictive Analytics",
      "Issue & Impediment Tracking",
      "Root Cause Analysis",
      "Continuous Improvement",
      "Quality Assurance & Testing",
      "Skill Assessment",
      "Agile Maturity Assessment",
      "PAQ (Project Approach Questionnaire)",
      "SaaS Implementation",
      "CI/CD: Continuous Integration/ Continuous Deployment & Delivery",
      "SQL",
      "Stakeholder & Client Engagement and Communication",
      "Workflow Process Optimization and Automation"
    ],
    experience: [
      {
        title: "SERVICE NOW SCRUM MASTER",
        period: "August 2023 to Present",
        bullets: [
          "Facilitated collaborative sessions with Product Owners and ServiceNow stakeholders to define product goals, refine the platform roadmap, and ensure alignment with ITSM, ITOM, and other ServiceNow modules, resulting in 100% stakeholder alignment and a 15% reduction in scope-related conflicts.",
          "Managed all Agile ceremonies for ServiceNow delivery teams, including daily stand-ups, sprint planning, sprint reviews, and retrospectives, increasing meeting efficiency by 20% and sprint delivery predictability by 18%.",
          "Acted as a shield for the ServiceNow development team, removing blockers and managing dependencies, reducing sprint disruptions by 25%.",
          "Coached developers, admins, and business stakeholders on Agile and Scrum best practices, accelerating Agile maturity within the ServiceNow ecosystem by 30% over two quarters.",
          "Collaborated with business and IT stakeholders to align sprint deliverables with enterprise priorities and platform governance, improving release success rate by 15%.",
          "Defined sprint goals in collaboration with the ServiceNow development team, ensuring technical feasibility and compliance with platform standards, leading to a 10% increase in story acceptance rate.",
          "Monitored delivery progress using Agile metrics and platform KPIs, driving a 20% improvement in sprint velocity and reducing carryover work by 12%.",
          "Fostered collaboration across ServiceNow developers, architects, testers, and business users, increasing cross-functional engagement scores by 25% in team health surveys.",
          "Facilitated backlog grooming sessions to refine and prioritize ServiceNow epics/features, increasing backlog readiness by 35%.",
          "Led retrospectives to implement process improvements, improving delivery quality and reducing post-release defects by 22%.",
          "Advocated for Agile principles across ServiceNow delivery streams, resulting in a 15% improvement in time-to-market for platform enhancements.",
          "Protected the team from scope creep, ensuring sprint commitments were met with a 95% on-time delivery rate.",
          "Provided timely updates and reports in ServiceNow Agile boards and dashboards, increasing executive visibility into progress and risks by 40%.",
          "Encouraged a self-organizing team culture, boosting team autonomy scores by 20% and knowledge-sharing activities by 30%."
        ]
      },
      {
        title: "NEW YORK LIFE INSURANCE SCRUM MASTER",
        period: "July 2020 to August 2023",
        bullets: [
          "Supported Agile delivery teams working on insurance, financial services, and enterprise IT systems by facilitating Scrum and Kanban practices, improving workflow efficiency by 20% while ensuring compliance with regulatory, security, and client confidentiality requirements.",
          "Assisted in organizing and participating in all Scrum ceremonies, including daily stand-ups, sprint planning, reviews, and retrospectives, helping teams achieve 95% on-time delivery against sprint commitments.",
          "Collaborated with senior Scrum Masters and Product Owners to manage the product backlog, ensuring 100% alignment of prioritized user stories with business value and stakeholder expectations.",
          "Helped the team remove blockers by coordinating with internal stakeholders, QA teams, and business units, reducing critical task delays by 15%.",
          "Participated in training sessions on Agile and Scrum best practices tailored to the insurance and financial services domain, contributing to a 25% increase in Agile adoption rate across teams.",
          "Assisted Product Owners in backlog grooming and user story clarification, resulting in 30% fewer story rework instances during sprint execution.",
          "Encouraged open communication and collaboration across cross-functional teams, including developers, business analysts, underwriters, and operations staff, improving inter-team coordination scores by 20% in stakeholder feedback surveys.",
          "Contributed to retrospectives by capturing team feedback and suggesting process improvements, leading to a 15% improvement in sprint planning efficiency.",
          "Tracked sprint progress through burn-down charts, task boards, and Agile metrics, increasing delivery visibility to stakeholders by 40%.",
          "Provided support in protecting the team from outside interruptions, helping maintain a 90% focus rate on committed sprint work.",
          "Promoted team ownership and accountability while ensuring 100% role clarity across Agile teams within the insurance technology landscape.",
          "Championed Agile values in the insurance industry context by adapting to evolving business needs, supporting the delivery of solutions that improved customer experience ratings by 18% and operational efficiency by 22%."
        ]
      },
      {
        title: "PLENITUDE TECHNOLOGIES INC. PROJECT COORDINATOR",
        period: "May 2018 to July 2020",
        bullets: [
          "Assisted the Project Manager in developing and executing detailed project plans, schedules, and work breakdown structures, ensuring 98% on-time, in-scope delivery.",
          "Coordinated cross-functional resources, assigned tasks, and aligned efforts between teams, stakeholders, and vendors, improving team collaboration efficiency by 25%.",
          "Maintained and updated comprehensive project documentation, including scope statements, milestones, deliverables, and change logs, increasing documentation accuracy by 30%.",
          "Acted as the central communication point, facilitating collaboration across departments and resolving conflicts, resulting in a 20% reduction in escalation cases.",
          "Scheduled, organized, and led project meetings, capturing agendas and action items, ensuring 95% closure rate of assigned follow-up tasks.",
          "Monitored project progress using dashboards, status reports, and tracking tools, improving reporting turnaround time by 40%.",
          "Identified and tracked potential risks and issues, maintaining risk registers and supporting mitigation strategies that reduced project delays by 18%.",
          "Tracked KPIs and success metrics, providing leadership with actionable insights that led to a 15% improvement in milestone achievement rates.",
          "Assisted in managing project budgets by tracking expenses, reviewing invoices, and supporting cost control initiatives, helping to reduce overspending by 12%.",
          "Supported procurement and vendor management processes, maintaining contract compliance and achieving 100% audit readiness.",
          "Organized and managed project-related events, workshops, and training programs, increasing stakeholder participation by 35%.",
          "Managed project calendars, logistics, and resource availability, ensuring zero downtime in project execution.",
          "Contributed to process improvement initiatives, identifying workflow gaps and recommending solutions that boosted productivity by 22%."
        ]
      }
    ],
    education: [
      "Site Director Qualifications",
      "AMI Primary Teachers Training Course 2010-11 (Milpitas, CA)",
      "Bachelor’s degree, Bangalore, India (1996- 1998)"
    ],
    certifications: [
      "Professional Scrum Master (PSM 1)",
      "Professional Scrum Product Owner (PSPO)"
    ]
  };
  return (
    <motion.div
      className="scroll-smooth bg-white text-slate-900 font-sans" // Main background/text colors
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            // MODIFIED: Changed gradient to solid blue text-blue-700
            className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600"
          >
            Ichha (Isha)Sharma
          </motion.h1>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-2">
            {["About", "Certificates", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${activeSection === item.toLowerCase()
                  ? 'bg-blue-100 text-blue-700 border border-blue-300' // CHANGED: Active link style for blue theme
                  : 'hover:bg-slate-100 hover:text-blue-600 text-slate-600' // CHANGED: Inactive link style
                  }`}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                  className="font-medium text-sm md:text-base"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200"
            >
              <div className="flex flex-col py-4 px-4 space-y-3">
                {["About", "Certificates", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left py-3 px-4 rounded-lg hover:bg-slate-100 transition-all duration-300 text-slate-700 hover:text-blue-600 font-medium text-base" // CHANGED: Mobile link hover color
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden bg-gray-50">
        <FloatingOrb delay={0} size="w-80 h-80" color="cyan" />
        <FloatingOrb delay={2} size="w-64 h-64" color="amber" />
        <FloatingOrb delay={4} size="w-72 h-72" color="purple" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10 max-w-3xl mx-auto relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            className="w-52 sm:w-60 md:w-72 lg:w-80 h-auto mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center shadow-lg border-4 border-white overflow-hidden -mt-6 aspect-square relative" // CHANGED: Profile border gradient to blue
          >
            <img
              src={Avatar}
              alt="Ichha Sharma"
              className="w-full h-full object-cover object-center rounded-full"
              style={{
                objectPosition: 'center',
                objectFit: 'cover',
              }}
            />
          </motion.div>
          {/* Added: Text under the profile picture */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-8"
          >
            Isha Sharma
          </motion.div>
          {/* Contact info under profile */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-slate-600 text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" /> {/* CHANGED: Icon color to blue */}
              +1 925-922-7772
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600" /> {/* CHANGED: Icon color to cyan */}
              4ishasharma@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" /> {/* CHANGED: Icon color to blue */}
              United States
            </div>
          </div>
          <motion.h2
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
>
  Certified Scrum Master & Product Owner
</motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Driving Agile transformations and delivering enterprise IT solutions with 7+ years of experience in ServiceNow, Insurance, and Financial Services domains.
          </motion.p>
          {/* Updated button order with FUNCTION call for download */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            {/* CHANGED: onClick now calls handleDownloadResume */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2" // CHANGED: Blue Gradient Button
            >
              <Download size={14} className="sm:w-4 sm:h-4" />
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-xs sm:text-sm" // CHANGED: Secondary Blue Gradient Button
            >
              <MessageSquare size={14} className="sm:w-4 sm:h-4" />
              Contact Details
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center"
          >
            {[
              { value: "7+", label: "Years Experience", color: "blue-600" },
              { value: "30%", label: "Efficiency Gain", color: "cyan-600" },
              { value: "95%", label: "On-time Delivery", color: "green-600" },
              { value: "40%", label: "Engagement Boost", color: "indigo-600" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-2 sm:p-3 border border-slate-200 shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <ArrowUp className="w-5 h-5 text-slate-500 rotate-180" />
        </motion.div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative"
      >
        <FloatingOrb delay={0} size="w-48 h-48" color="cyan" />
        <FloatingOrb delay={3} size="w-40 h-40" color="amber" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-center gap-2"> {/* CHANGED: Blue Gradient Heading */}
            <User className="w-7 h-7 text-cyan-600" /> About Me {/* CHANGED: Icon color to cyan */}
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div> {/* CHANGED: Blue Gradient Divider */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h4 className="text-2xl font-bold text-slate-800">Professional Summary</h4>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Results-driven Certified Scrum Master (PSM I) and Product Owner (PSPO) with over 7 years of experience driving Agile transformation, delivering enterprise IT, insurance, and ServiceNow platform solutions.
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Proven track record in sprint planning, backlog prioritization, release management, and stakeholder alignment, achieving measurable gains in delivery predictability, quality, and time-to-market.
            </p>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Adept at fostering cross-functional collaboration, coaching teams on Agile best practices, and removing delivery impediments to maintain high-performance team environments.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { value: "30%", label: "Operational Efficiency Improvement", color: "blue-600" }, // CHANGED: Text color
                { value: "40%", label: "Stakeholder Engagement Increase", color: "cyan-600" } // CHANGED: Text color
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-3 rounded-lg border border-slate-200 shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <div className={`text-xl font-bold text-${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-slate-100 p-6 rounded-xl border border-slate-200 shadow-lg"
          >
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Core Competencies</h4>
            <div className="space-y-2">
              {[
                "Agile Transformation & Scrum/Kanban Methodologies",
                "Sprint Planning & Backlog Prioritization",
                "Release Management & Delivery Coordination",
                "Stakeholder Management & Business Alignment",
                "JIRA, Confluence, Miro, Mural, SQL",
                "Cross-Functional Team Leadership & Coaching",
                "Data-Driven Reporting & KPI Tracking",
                "Continuous Improvement & Quality Assurance"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 0, scale: 1.02 }}
                  className="flex items-center gap-1.5 sm:gap-2 p-2 bg-white rounded-lg hover:bg-slate-50 transition-colors border border-slate-200"
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" // CHANGED: Icon color to blue
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  <span className="text-slate-700 text-xs sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-300">
              <div className="flex items-center gap-2 text-cyan-600 mb-2"> {/* CHANGED: Icon color to cyan */}
                <Star className="w-5 h-5" />
                <span className="font-semibold text-lg">Certifications</span>
              </div>
              <div className="space-y-1">
                <div className="text-slate-700 text-base">Professional Scrum Master (PSM I)</div>
                <div className="text-slate-700 text-base">Professional Scrum Product Owner (PSPO)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Certificates Section - Moved right after About Me */}
      <section id="certificates" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative">
        <FloatingOrb delay={0} size="w-48 h-48" color="gold" />
        <FloatingOrb delay={3} size="w-40 h-40" color="purple" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-center gap-2"> {/* CHANGED: Blue Gradient Heading */}
            <Award className="w-7 h-7 text-blue-600" /> Certifications {/* CHANGED: Icon color to blue */}
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div> {/* CHANGED: Blue Gradient Divider */}
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-lg hover:border-blue-400 transition-all duration-300 group" // CHANGED: Card hover border to blue
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold text-blue-700 mb-1">{cert.title}</h4> {/* CHANGED: Text color to blue */}
                  <p className="text-slate-600 text-base">{cert.issuer} • {cert.date}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"> {/* CHANGED: Background color to blue */}
                  <Award className="w-6 h-6 text-blue-600" /> {/* CHANGED: Icon color to blue */}
                </div>
              </div>
              <p className="text-slate-700 text-base leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-4 py-12 md:py-16 bg-slate-50 rounded-2xl border border-slate-200 my-8 relative overflow-hidden"
      >
        <FloatingOrb delay={0} size="w-64 h-64" color="pink" />
        <FloatingOrb delay={3} size="w-56 h-56" color="green" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-center gap-2"> {/* CHANGED: Blue Gradient Heading */}
            <Star className="w-7 h-7 text-blue-600" /> Technical Skills & Expertise {/* CHANGED: Icon color to blue */}
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div> {/* CHANGED: Blue Gradient Divider */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-md hover:border-blue-400 transition-all duration-300" // CHANGED: Card hover border to blue
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors"> {/* CHANGED: Background color to blue */}
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 sm:w-10 h-8 sm:h-10 object-contain filter group-hover:brightness-100 transition-all"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-800">{skill.name}</h4>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs sm:text-sm text-slate-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full" // CHANGED: Blue Gradient Progress Bar
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: Zap, title: "Agile Frameworks", desc: "Scrum, Kanban, SAFe, Lean", color: "blue" }, // CHANGED: Color to blue
            { icon: FolderKanban, title: "Tools & Platforms", desc: "JIRA, Confluence, ServiceNow, Miro", color: "cyan" }, // CHANGED: Color to cyan
            { icon: ChartBar, title: "Analytics & CI/CD", desc: "SQL, KPI Tracking, CI/CD Pipelines", color: "indigo" } // CHANGED: Color to indigo
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`text-center p-3 sm:p-4 bg-${item.color}-50/50 rounded-xl border border-${item.color}-300 shadow-md`}
            >
              <item.icon className={`w-8 sm:w-10 h-8 sm:h-10 text-${item.color}-600 mx-auto mb-2`} />
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative">
        <FloatingOrb delay={0} size="w-48 h-48" color="indigo" />
        <FloatingOrb delay={3} size="w-40 h-40" color="teal" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-center gap-2"> {/* CHANGED: Blue Gradient Heading */}
            <Briefcase className="w-7 h-7 text-blue-600" /> Professional Experience {/* CHANGED: Icon color to blue */}
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div> {/* CHANGED: Blue Gradient Divider */}
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div> {/* CHANGED: Blue Gradient Timeline */}
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -3, boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)" }}
              className={`mb-8 md:ml-12 p-5 md:p-6 bg-white rounded-xl border border-slate-200 shadow-lg relative group hover:shadow-xl transition-all duration-300 ${i === experiences.length - 1 ? 'mb-0' : ''
                }`}
            >
              <div className="absolute -left-16 top-6 w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-2 border-white hidden md:block group-hover:scale-125 transition-transform duration-300"></div> {/* CHANGED: Blue Gradient Timeline Dot */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-blue-700 mb-1">{exp.role}</h4> {/* CHANGED: Text color to blue */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-slate-600 text-xs sm:text-base">
                    <p className="font-medium">{exp.company}</p>
                    <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
                    <p>{exp.period}</p>
                    <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 sm:mt-3 md:mt-0 flex flex-wrap gap-1.5">
                  {exp.achievements && exp.achievements.slice(0, 2).map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-100 text-green-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border border-green-300"
                    >
                      {achievement.split(' ')[0]}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <h5 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-1">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" /> {/* CHANGED: Icon color to blue */}
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        whileHover={{ x: 0 }}
                        className="flex gap-2 text-slate-700 text-xs sm:text-base leading-relaxed"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" // CHANGED: Bullet color to blue
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-3 sm:p-4 rounded-lg border border-slate-200">
                  <h5 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 sm:mb-3 flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" /> {/* CHANGED: Icon color to cyan */}
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        whileHover={{ x: 0 }}
                        className="flex gap-2 text-slate-700 text-xs sm:text-base leading-relaxed"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" // CHANGED: Bullet color to cyan
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        />
                        {a}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-4 py-12 md:py-16 bg-slate-50 rounded-2xl border border-slate-200 my-8 relative overflow-hidden"
      >
        <FloatingOrb delay={0} size="w-64 h-64" color="teal" />
        <FloatingOrb delay={3} size="w-56 h-56" color="purple" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center justify-center gap-2"> {/* CHANGED: Blue Gradient Heading */}
            <FolderKanban className="w-7 h-7 text-blue-600" /> Key Projects & Impact {/* CHANGED: Icon color to blue */}
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div> {/* CHANGED: Blue Gradient Divider */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-lg hover:border-blue-400 transition-all duration-300 group" // CHANGED: Card hover border to blue
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h4 className="text-lg sm:text-xl font-bold text-blue-700">ServiceNow Platform Transformation</h4> {/* CHANGED: Text color to blue */}
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-300"> {/* CHANGED: Badge style to blue */}
                ServiceNow
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
                Led Agile transformation for ServiceNow platform implementation across ITSM, ITOM, and other modules, ensuring alignment with enterprise priorities and platform governance.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center p-2 sm:p-3 bg-slate-100 rounded-lg border border-slate-200">
                {[
                  { value: "15%", label: "Release Success Rate ↑", color: "green-700" },
                  { value: "18%", label: "Sprint Predictability ↑", color: "blue-700" },
                  { value: "25%", label: "Sprint Disruptions ↓", color: "blue-700" }, // CHANGED: Text color to blue
                  { value: "20%", label: "Sprint Velocity ↑", color: "blue-700" } // CHANGED: Text color to blue
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className={`text-lg sm:text-xl font-bold text-${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-slate-300">
              <h5 className="font-semibold text-slate-800 mb-2 text-base sm:text-lg">Key Contributions:</h5>
              <ul className="space-y-1 text-slate-700 text-[10px] sm:text-sm">
                {[
                  "Facilitated collaborative sessions with stakeholders to define product goals and refine roadmap",
                  "Coached developers, admins, and business stakeholders on Agile best practices",
                  "Implemented process improvements that reduced post-release defects by 22%"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ x: 0 }}
                    className="flex items-start gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1 flex-shrink-0 sm:mt-1.5"></span> {/* CHANGED: Bullet color to blue */}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-lg hover:border-blue-400 transition-all duration-300 group" // CHANGED: Card hover border to cyan
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
              <h4 className="text-lg sm:text-xl font-bold text-blue-700">Insurance Systems Optimization</h4> {/* CHANGED: Text color to cyan */}
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-300"> {/* CHANGED: Badge style to cyan */}
                New York Life
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
                Drove Agile adoption across insurance and financial services teams, improving workflow efficiency while ensuring compliance with regulatory and security requirements.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center p-2 sm:p-3 bg-slate-100 rounded-lg border border-slate-200">
                {[
                  { value: "95%", label: "On-time Delivery", color: "green-700" },
                  { value: "30%", label: "Story Rework ↓", color: "cyan-700" }, // CHANGED: Text color to cyan
                  { value: "25%", label: "Agile Adoption ↑", color: "cyan-700" }, // CHANGED: Text color to cyan
                  { value: "22%", label: "Operational Efficiency ↑", color: "cyan-700" } // CHANGED: Text color to cyan
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className={`text-lg sm:text-xl font-bold text-${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-slate-300">
              <h5 className="font-semibold text-slate-800 mb-2 text-base sm:text-lg">Key Contributions:</h5>
              <ul className="space-y-1 text-slate-700 text-[10px] sm:text-sm">
                {[
                  "Supported teams in achieving 95% on-time delivery against sprint commitments",
                  "Reduced critical task delays by 15% through effective blocker removal",
                  "Improved customer experience ratings by 18% through Agile process improvements"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ x: 0 }}
                    className="flex items-start gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-1 flex-shrink-0 sm:mt-1.5"></span> {/* CHANGED: Bullet color to cyan */}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { value: "30%", label: "Average Efficiency Improvement", color: "blue-600" },
            { value: "40%", label: "Stakeholder Engagement Increase", color: "cyan-600" },
            { value: "95%", label: "On-time Delivery Rate", color: "indigo-600" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              className="text-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className={`text-xl sm:text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-slate-700 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center relative">
        <FloatingOrb delay={0} size="w-48 h-48" color="cyan" />
        <FloatingOrb delay={3} size="w-40 h-40" color="amber" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> {/* CHANGED: Blue Gradient Heading */}
            Contact Information
          </h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div> {/* CHANGED: Blue Gradient Divider */}
          <p className="text-slate-600 max-w-xl mx-auto text-base md:text-lg">
            I'm always interested in new opportunities and challenges. Let's discuss how I can help your team achieve Agile excellence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, title: "Phone", value: "+1 925-922-7772", desc: "Available during business hours" },
            { icon: Mail, title: "Email", value: "4ishasharma@gmail.com", desc: "Respond within 24 hours" },
            { icon: MapPin, title: "Location", value: "United States", desc: "Remote work friendly" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors"> {/* CHANGED: Background color to blue */}
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" /> {/* CHANGED: Icon color to blue */}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-slate-700 text-sm sm:text-base break-all">{item.value}</p>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 py-8 text-center relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"> {/* CHANGED: Blue Gradient Footer Title */}
              Ichha(Ishaa)Sharma
            </h4>
            <p className="text-slate-600 text-base">
              Certified Scrum Master & Product Owner | Agile Transformation Specialist
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Ichha Sharma. All rights reserved.</p>
            {/* <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span className="text-blue-600">Built with React</span>
              <span className="text-cyan-600">+ Tailwind CSS</span>
              <span className="text-blue-600">+ Framer Motion</span>
            </div> */}
          </div>
        </div>
      </footer>
      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full shadow-lg z-50 transition-all duration-300" // CHANGED: Blue Gradient Scroll Button
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </motion.div>
  );
}
