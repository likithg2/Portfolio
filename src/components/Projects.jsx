import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AgriShield',
    category: 'Smart Agricultural Supply Chain Optimization Platform',
    description: 'AgriShield is a full-stack smart agriculture platform designed to reduce post-harvest crop losses through AI-powered quality analysis, supply-chain optimization, and intelligent storage recommendations. It uses a fine-tuned MobileNetV2 model to analyze vegetable quality, assess freshness and remaining shelf life, and estimate potential financial loss. The platform also integrates weather-based route optimization, cold-storage recommendations, interactive maps, a Gemini-powered chatbot, and English/Kannada AI voice advisory through a secure FastAPI backend and responsive React dashboard.',
    tags: ['Python', 'FastAPI', 'TensorFlow/Keras', 'MobileNetV2', 'React', 'Vite', 'Tailwind CSS', 'SQLite', 'REST API', 'Gemini AI', 'OpenWeather API', 'Leaflet.js', 'JWT'],
    link: '#',
    github: 'https://github.com/likithg2/AgriShield'
  },
  {
    title: 'NutriVision AI',
    category: 'AI Nutrition & Kitchen Inventory Platform',
    description: 'NutriVision AI is an AI-powered nutrition and kitchen management platform that uses Google Gemini Vision to analyze food images, identify nutritional information, and help users track their daily macros. It manages kitchen inventory, generates personalized recipes from available ingredients, creates smart shopping lists, and provides automated expiry alerts to reduce food waste. The platform includes JWT authentication, activity tracking, CRON-based background jobs, and a responsive interface with smooth animations and dark/light themes.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'Sequelize', 'Google Gemini AI', 'REST API', 'JWT', 'CRON', 'SQL'],
    link: '#',
    github: 'https://github.com/likithg2/NutriVisionAI'
  },
  {
    title: 'PiConnect',
    category: 'Raspberry Pi Remote Control & File Management App',
    description: 'PiConnect is an Android application designed to provide wireless control and file management for Raspberry Pi devices without relying on physical peripherals or USB-based workflows. It supports bi-directional Wi-Fi file transfers, SSH command execution, live file-system browsing, and Bluetooth HID keyboard control. The application also includes built-in PDF, image, and audio viewers, allowing users to interact with and manage Raspberry Pi content directly from an Android device through a unified interface.',
    tags: ['Kotlin', 'Android SDK', 'XML', 'Android Studio', 'Wi-Fi', 'SSH', 'SFTP', 'Bluetooth HID', 'TCP/IP', 'Network Programming'],
    link: '#',
    github: 'https://github.com/likithg2/PiConnect'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Featured projects</h2>
        <p className="muted-text" style={{ marginTop: '16px', maxWidth: '50ch' }}>
          A selection of projects showcasing full-stack engineering, Android development, and AI/ML solutions.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {projects.map((project, i) => (
          <div key={i} className="glass-card project-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <div className="project-card-header">
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)', margin: 0 }}>{project.title}</h3>
                <span className="badge__tag project-category-tag">{project.category}</span>
              </div>
            </div>

            <p className="muted-text" style={{ fontSize: '15px', margin: 0 }}>{project.description}</p>

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

            <div style={{ display: 'flex', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiGithub style={{ marginRight: '8px' }} /> View Code
              </a>
              {project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
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
