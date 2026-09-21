export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>About me</h2>
      </div>

      <div className="glass-card" style={{ display: 'grid', gap: '64px', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
        <div>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            I enjoy turning ideas into software that solves tangible problems. I’m a Computer Science Engineering student passionate about building practical, user-focused applications across full-stack web development, AI, backend systems, and Android development. I’m particularly interested in creating technology that is both functional and meaningful.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            I have hands-on experience with React, Node.js, Express, FastAPI, REST APIs, JWT authentication, SQL/NoSQL databases, and Kotlin. Through projects like AgriShield, NutriVision AI, and PiConnect, I’ve worked across frontend, backend, AI integration, databases, APIs, authentication, and device communication.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '32px' }}>
            Beyond development, I enjoy solving technical challenges and continuously learning new technologies. My foundation in Data Structures & Algorithms and OOP helps me approach problems systematically, while my NCC experience has strengthened my leadership, discipline, teamwork, and ability to work effectively under responsibility.
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
            {
              title: 'Education',
              points: [
                'B.E. in Computer Science Engineering — Bangalore Institute of Technology (2023 - 2027)',
                'Pre-University (PCMB) — Kumarans PU College (2021 - 2023)'
              ]
            },
            {
              title: 'Certifications',
              points: [
                'DSA Using Java (NPTEL, 2025)',
                'Prompt Engineering (Udemy, 2025)'
              ]
            },
            {
              title: 'Achievements',
              points: [
                'Volunteered at National-Level Hackathon "Ambition" (2024)'
              ]
            },
            {
              title: 'Leadership',
              points: [
                'Former NCC member — Holder of NCC B & C Certificates, developed leadership, discipline, and teamwork through camps and drills.'
              ]
            }
          ].map((item, i) => (
            <div key={i} style={{
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 500 }}>{item.title}</h3>
              <ul className="muted-text" style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
