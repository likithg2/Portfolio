import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AgriShield',
    category: 'Predictive Post-Harvest Loss Intelligence System',
    description: 'Built a multi-source ML pipeline ingesting crop, weather, and market data to engineer agro-climatic features for hardware-free spoilage prediction. Trained a dual-model engine (XGBoost classifier + Gradient Boosting regressor) with stratified 5-fold CV and SMOTE, served via a FastAPI endpoint returning risk category and financial loss estimates on a live dashboard.',
    tags: ['Python', 'XGBoost', 'FastAPI', 'MongoDB', 'Machine Learning', 'REST API'],
    link: '#',
    github: 'https://github.com/likithg2/AgriPredict'
  },
  {
    title: 'PiConnect',
    category: 'Raspberry Pi Remote Control & File Management App',
    description: 'Engineered an Android app for wireless Raspberry Pi control with bi-directional Wi-Fi file transfer, SSH command execution, and live file-system browsing. Built a multi-format media suite (PDF, audio, image) and a Bluetooth HID keyboard mode enabling fully peripheral-free device operation.',
    tags: ['Kotlin', 'Android SDK', 'SSH', 'Bluetooth HID', 'Network Programming'],
    link: '#',
    github: 'https://github.com/likithg2/PiConnect'
  },
  {
    title: 'SmartShelf',
    category: 'AI-Based Expiry & Inventory Management System',
    description: 'Built a smart inventory backend with automated expiry tracking, a risk-classification engine, and REST endpoints for real-time lifecycle monitoring and alerts. Designed a scalable MongoDB schema with configurable threshold logic, architected as lightweight cloud-ready APIs deployable on free-tier platforms.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Microservices'],
    link: '#',
    github: 'https://github.com/likithg2/Smartshelf-AI'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Featured projects</h2>
        <p className="muted-text" style={{ marginTop: '16px', maxWidth: '50ch' }}>
          A selection of projects showcasing backend engineering, Android development, and AI/ML solutions.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {projects.map((project, i) => (
          <div key={i} className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '24px', margin: 0 }}>{project.title}</h3>
                <span className="badge__tag" style={{ background: '#eef2ee', fontSize: '12px' }}>{project.category}</span>
              </div>
            </div>

            <p className="muted-text" style={{ fontSize: '15px' }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  background: 'rgba(255, 255, 255, 0.15)', 
                  border: '1px solid rgba(255, 255, 255, 0.5)', 
                  borderRadius: '8px', 
                  padding: '4px 12px', 
                  fontSize: '13px', 
                  fontWeight: 500,
                  color: 'var(--ink)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.6)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
              <a href={project.github} className="btn-outline">
                <FiGithub style={{ marginRight: '8px' }} /> View Code
              </a>
              {project.link !== '#' && (
                <a href={project.link} className="btn-outline">
                  <FiExternalLink style={{ marginRight: '8px' }} /> Live Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
