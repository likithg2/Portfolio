import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'AgriShield',
    subtitle: 'Agricultural Spoilage Prediction and Logistic Support',
    bullets: [
      'Trained a MobileNetV2 model on 4,680 images across 8 fresh and rotten vegetable classes, achieving 95.94% evaluation accuracy and 95.88% macro F1-score.',
      'Applied XGBoost, Random Forest and Gradient Boosting for spoilage-risk classification, achieving 96% macro F1 and 97% weighted F1; designed shelf-life and post-harvest loss prediction models with 0.63-day MAE and 8.24% MAE, respectively.',
      'Built a FastAPI backend with 41 route definitions across 7 routers and 7 SQLAlchemy entities, supporting authentication, predictions, shipment tracking, warehouse management and analytics; integrated OpenWeatherMap and Gemini APIs for weather insights and geospatial cold-storage recommendations.'
    ],
    tags: ['Python', 'TensorFlow/Keras', 'MobileNetV2', 'XGBoost', 'Random Forest', 'Gradient Boosting', 'FastAPI', 'SQLAlchemy', 'React.js', 'JavaScript'],
    link: 'https://agrishield-app.vercel.app/',
    github: 'https://github.com/likithg2/AgriShield'
  },
  {
    title: 'NutriVision AI',
    subtitle: 'Nutrition & Inventory Management',
    bullets: [
      'Integrated 2 AI-powered food image-analysis workflows using Gemini Vision with configurable NVIDIA Nemotron and OpenAI integrations to estimate calories, macronutrients and up to 29 nutritional indicators.',
      'Engineered a Node.js/Express backend with 74 route handlers across 14 routers, 9 controllers and 5 Sequelize models, supporting authentication, meal logging, inventory and notifications; connected USDA FoodData Central APIs to a React application with 10 pages and 17 component files.',
      'Automated daily inventory-expiry checks with a 3-day alert window, incorporating email, push and in-app notifications; added nutrition analytics and AI-assisted recipe recommendations.'
    ],
    tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Sequelize', 'Gemini Vision', 'NVIDIA Nemotron', 'OpenAI API', 'USDA FoodData Central'],
    link: 'https://nutrivision-ai-app.vercel.app/',
    github: 'https://github.com/likithg2/NutriVisionAI'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Featured projects</h2>
        <p className="muted-text" style={{ marginTop: '12px', maxWidth: '50ch', fontSize: '15px' }}>
          A selection of projects showcasing full-stack engineering, Android development, and AI/ML solutions.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {projects.map((project, i) => (
          <div key={i} className="glass-card project-card" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            <div className="project-card-header">
              <h3 style={{ fontSize: 'clamp(20px, 4.5vw, 24px)', margin: 0, fontWeight: 600 }}>{project.title}</h3>
              <span className="badge__tag project-category-tag">{project.subtitle}</span>
            </div>

            <ul className="muted-text" style={{ margin: 0, paddingLeft: '18px', fontSize: '14.5px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.bullets.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '8px',
                  padding: '3px 10px',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: 'var(--ink)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions" style={{ display: 'flex', gap: '12px', marginTop: '6px', flexWrap: 'wrap' }}>
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
