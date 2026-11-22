const skills = [
  {
    category: "Programming Languages",
    items: ["C", "Python", "Java", "JavaScript", "SQL"]
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "EJS", "TailwindCSS", "Bootstrap"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
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

      <div 
        className="skills-grid"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', 
          gap: '24px' 
        }}
      >
        {skills.map((skillGroup, i) => (
          <div key={i} className="glass-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 600, margin: '0 0 16px 0', color: 'var(--ink)' }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillGroup.items.map(item => (
                <span 
                  key={item} 
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.04)', 
                    border: '1px solid rgba(0, 0, 0, 0.06)', 
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '8px', 
                    padding: '6px 12px', 
                    fontSize: '13px', 
                    color: 'var(--ink)',
                    display: 'inline-block'
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
