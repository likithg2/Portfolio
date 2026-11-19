const skills = [
  {
    category: "Programming Languages",
    items: ["C", "Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "React.js", "Redux", "Node.js", "Express.js", "EJS", "TailwindCSS", "Bootstrap", "FastAPI"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQLAlchemy", "Sequelize"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Android Studio", "Ubuntu/Linux CLI", "Hoppscotch", "REST APIs", "SSH", "SFTP"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Technical Arsenal</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))', gap: '24px' }}>
        {skills.map((skillGroup, i) => (
          <div key={i} className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 500, margin: '0 0 20px 0', color: 'var(--ink)' }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skillGroup.items.map(item => (
                <span 
                  key={item} 
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.04)', 
                    border: '1px solid rgba(0, 0, 0, 0.05)', 
                    backdropFilter: 'blur(8px)',
                    borderRadius: '8px', 
                    padding: '8px 14px', 
                    fontSize: '14px', 
                    color: 'var(--ink)' 
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
