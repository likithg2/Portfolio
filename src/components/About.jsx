export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>About me</h2>
      </div>

      <div className="glass-card about-grid" style={{ display: 'grid', gap: '48px', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
        <div>
          <p className="muted-text" style={{ fontSize: '15.5px', marginBottom: '16px' }}>
            Computer Science undergraduate with strong hands-on experience in full-stack web development and practical exposure to Android application development and AI/ML applications.
          </p>
          <p className="muted-text" style={{ fontSize: '15.5px', marginBottom: '16px' }}>
            Skilled in Python, C, Java, JavaScript and SQL, with experience building responsive web applications, developing REST APIs, integrating databases and external services, and implementing machine learning models for image classification and prediction.
          </p>
          <p className="muted-text" style={{ fontSize: '15.5px', marginBottom: '28px' }}>
            Knowledge of Data Structures and Algorithms, DBMS, Operating Systems and Computer Networks.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
            <div>
              <div style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1 }}>9.1</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '4px' }}>CGPA (B.E. CSE)</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(28px, 6vw, 36px)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.1 }}>94.33%</div>
              <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '4px' }}>Pre-University</div>
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
              padding: '20px 22px',
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.45)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '15.5px', fontWeight: 600 }}>{item.title}</h3>
              <ul className="muted-text" style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
