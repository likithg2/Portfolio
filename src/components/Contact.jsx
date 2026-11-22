export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="section-header" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
        <div className="line" style={{ margin: '0 auto 16px auto' }}></div>
        <h2 style={{ width: '100%' }}>Get in Touch</h2>
        <p className="muted-text" style={{ marginTop: '12px', maxWidth: '50ch', margin: '12px auto 0 auto', fontSize: '15px' }}>
          Currently seeking new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%' }}>
        
        {/* Contact Details */}
        <div 
          className="glass-card contact-card" 
          style={{ 
            padding: '48px 36px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '28px', 
            alignItems: 'center', 
            textAlign: 'center', 
            width: '75%', 
            maxWidth: '680px'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 600 }}>Contact Info</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '6px' }}>Email</div>
              <a 
                href="mailto:likithgirish2@gmail.com" 
                className="contact-link-email"
                style={{ fontSize: '17.5px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500, display: 'inline-block' }}
              >
                likithgirish2@gmail.com
              </a>
            </div>
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '6px' }}>Phone</div>
              <a 
                href="tel:+918618177828" 
                className="contact-link-phone"
                style={{ fontSize: '17.5px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500, display: 'inline-block' }}
              >
                +91 86181 77828
              </a>
            </div>
            <div style={{ width: '100%' }}>
              <div style={{ fontSize: '12.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '10px' }}>Socials</div>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="https://github.com/likithg2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  style={{ padding: '8px 18px', fontSize: '14px', borderRadius: '50px' }}
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/likithg2/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  style={{ padding: '8px 18px', fontSize: '14px', borderRadius: '50px' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
