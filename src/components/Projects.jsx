import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AgriShield',
    category: 'Smart Agriculture Platform',
    description: 'AgriShield is a full-stack smart agriculture platform designed to reduce post-harvest crop losses through AI-powered quality analysis and supply-chain optimization. It uses a fine-tuned MobileNetV2 model to assess vegetable freshness, shelf life, and financial loss, while providing route optimization and cold-storage recommendations. The platform also includes a Gemini chatbot and English/Kannada voice advisory features.',
    tags: ['Python', 'FastAPI', 'TensorFlow/Keras', 'MobileNetV2', 'React', 'Vite', 'Tailwind CSS', 'SQLite', 'REST API', 'Gemini', 'OpenWeather API', 'Leaflet.js'],
    link: '#',
    github: 'https://github.com/likithg2/AgriShield'
  },
  {
    title: 'NutriVision AI',
    category: 'AI Nutrition & Kitchen Inventory Platform',
    description: 'NutriVision AI is an AI-powered nutrition and kitchen inventory platform that analyzes food images using Google Gemini Vision to identify nutritional information and track macros. It manages kitchen inventory, generates personalized recipes and smart shopping lists, and provides automated expiry alerts to reduce food waste. The platform features JWT authentication, activity tracking, and responsive dark/light interfaces.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Sequelize', 'Google Gemini AI', 'REST API', 'JWT', 'CRON'],
    link: '#',
    github: 'https://github.com/likithg2/NutriVisionAI'
  },
  {
    title: 'PiConnect',
    category: 'Raspberry Pi Remote Control & File Management App',
    description: 'PiConnect is an Android application designed for wireless Raspberry Pi control and file management, eliminating the need for physical peripherals. It enables bi-directional Wi-Fi file transfer, SSH command execution, live file-system browsing, and Bluetooth HID keyboard functionality. The app also includes built-in PDF, audio, and image viewers for seamless device operation.',
    tags: ['Kotlin', 'Android SDK', 'XML', 'SSH', 'Bluetooth HID', 'Wi-Fi', 'Network Programming'],
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
