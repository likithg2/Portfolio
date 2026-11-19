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
            Computer Science undergraduate with experience developing AI/ML applications, full-stack web platforms and Android applications. Skilled in Python, C, Java, JavaScript and SQL, with practical experience using React, Node.js, Express and FastAPI.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '16px' }}>
            Experienced in developing REST APIs, integrating databases and external services, and implementing machine learning models for image classification and prediction.
          </p>
          <p className="muted-text" style={{ fontSize: '16px', marginBottom: '32px' }}>
            Knowledge of Data Structures and Algorithms, DBMS, Operating Systems and Computer Networks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)' }}>9.1</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase' }}>CGPA (B.E. CSE)</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--ink)' }}>94.33%</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase' }}>Pre-University</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            {
              title: 'Education',
              points: [
                "B.E. Computer Science Engineering — Bangalore Institute of Technology, Bangalore (2023 – 2027) | CGPA: 9.1",
                "Pre-University (PCMB) — Kumaran's Home Composite PU College, Bengaluru (2021 – 2023) | 94.33%"
              ]
            },
            {
              title: 'Achievements & Certifications',
              points: [
                'NCC: Completed 3 years of training, earning B and C Certificates and attending 2 training camps.',
                'National-Level Hackathon: Volunteered at the 24-hour Ambition hackathon featuring approximately 80 participating teams.'
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
