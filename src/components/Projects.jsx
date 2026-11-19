import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AgriShield',
    subtitle: 'Agricultural Spoilage Prediction and Logistic Support',
    bullets: [
      'Trained a MobileNetV2 model on 4,680 images across 8 fresh and rotten vegetable classes, achieving 95.94% evaluation accuracy and 95.88% macro F1-score.',
      'Developed spoilage-risk models using XGBoost, Random Forest and Gradient Boosting, achieving 96% macro F1 and 97% weighted F1; implemented shelf-life and post-harvest loss prediction with 0.63-day MAE and 8.24% MAE, respectively.',
      'Built a FastAPI backend with 41 route definitions across 7 routers and 7 SQLAlchemy entities, supporting authentication, predictions, shipment tracking, warehouse management and analytics; integrated OpenWeatherMap and Gemini APIs for weather insights and geospatial cold-storage recommendations.'
    ],
    tags: ['Python', 'TensorFlow/Keras', 'MobileNetV2', 'XGBoost', 'Random Forest', 'Gradient Boosting', 'FastAPI', 'SQLAlchemy', 'React.js', 'JavaScript'],
    link: '#',
    github: 'https://github.com/likithg2/AgriShield'
  },
  {
    title: 'NutriVision AI',
    subtitle: 'Nutrition & Inventory Management',
    bullets: [
      'Developed 2 AI-powered food image-analysis workflows using Gemini Vision with configurable NVIDIA Nemotron and OpenAI integrations to estimate calories, macronutrients and up to 29 nutritional indicators.',
      'Built a Node.js/Express backend with 74 route handlers across 14 routers, 9 controllers and 5 Sequelize models, supporting authentication, meal logging, inventory and notifications; integrated USDA FoodData Central APIs into a React application with 10 pages and 17 component files.',
      'Automated daily inventory-expiry checks with a 3-day alert window, integrating email, push and in-app notifications; added nutrition analytics and AI-assisted recipe recommendations.'
    ],
    tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Sequelize', 'Gemini Vision', 'NVIDIA Nemotron', 'OpenAI API'],
    link: '#',
    github: 'https://github.com/likithg2/NutriVisionAI'
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
                <span className="badge__tag project-category-tag">{project.subtitle}</span>
              </div>
            </div>

            <ul className="muted-text" style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>

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
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiExternalLink style={{ marginRight: '8px' }} /> Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
