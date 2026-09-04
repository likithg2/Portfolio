export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
        <div className="line" style={{ margin: '0 auto 16px auto' }}></div>
        <h2 style={{ width: '100%' }}>Get in Touch</h2>
        <p className="muted-text" style={{ marginTop: '16px', maxWidth: '50ch', margin: '16px auto 0 auto' }}>
          Currently seeking new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', width: '100%' }}>
        
        {/* Contact Details */}
        <div className="glass-card" style={{ padding: '60px', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center', width: '70%', maxWidth: '800px', minWidth: '300px' }}>
          <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Contact Info</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
            <div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '8px' }}>Email</div>
              <a href="mailto:likithgirish2@gmail.com" style={{ fontSize: '18px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>likithgirish2@gmail.com</a>
            </div>
            <div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '8px' }}>Phone</div>
              <a href="tel:+918618177828" style={{ fontSize: '18px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}>+91 86181 77828</a>
            </div>
            <div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '8px' }}>Socials</div>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                <a href="https://github.com/likithg2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/likithg2/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: 'var(--ink)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
