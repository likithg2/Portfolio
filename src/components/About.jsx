export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>About me</h2>
      </div>

      <div className="glass-card" style={{ display: 'grid', gap: '64px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            I enjoy turning ideas into software that solves tangible problems.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            I'm a Computer Science Engineering student at Bangalore Institute of Technology, focused on backend development, Android applications, and intelligent software systems.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            I've worked across the stack, from designing REST APIs and database architectures to building Android applications that communicate with Raspberry Pi devices and developing machine-learning systems for real-world prediction.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '32px' }}>
            I work primarily with Java, Python, JavaScript, Node.js, FastAPI, MongoDB, SQL, and Android/Kotlin, while continuously strengthening my foundations in algorithms, system design, and software engineering.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)' }}>9.1</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase' }}>CGPA (B.E. CSE)</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)' }}>94.3%</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase' }}>Pre-University</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { title: 'Education', desc: 'B.E. in Computer Science Engineering — Bangalore Institute of Technology (2023 - 2027)\nPre-University (PCMB) — Kumarans PU College (2021 - 2023)' },
            { title: 'Certifications', desc: 'DSA Using Java (NPTEL, 2025), Prompt Engineering (Udemy, 2025)' },
            { title: 'Achievements', desc: 'Volunteered at National-Level Hackathon "Ambition" (2024)' },
            { title: 'Leadership', desc: 'Former NCC member — developed leadership, discipline, and teamwork through camps and drills.' }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: '24px', 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '12px', 
              border: '1px solid rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 500 }}>{item.title}</h3>
              <p className="muted-text" style={{ margin: 0, fontSize: '14px', whiteSpace: 'pre-wrap' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
