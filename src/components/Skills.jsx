const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "C", "Kotlin (Partial)"]
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"]
  },
  {
    category: "Android Development",
    items: ["Kotlin", "XML", "Android Studio"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQL", "NoSQL"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Ubuntu/Linux CLI", "SSH", "VS Code", "Agile/Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Technical Arsenal</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
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
