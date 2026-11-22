import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{ padding: '48px 20px 36px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: '60px' }}>
      
      <div style={{ display: 'flex', gap: '18px' }}>
        {[
          { icon: FiGithub, href: 'https://github.com/likithg2', label: 'GitHub' },
          { icon: FiLinkedin, href: 'https://www.linkedin.com/in/likithg2/', label: 'LinkedIn' },
          { icon: FiMail, href: 'mailto:likithgirish2@gmail.com', label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            style={{ 
              color: 'var(--ink)', 
              opacity: 0.7, 
              transition: 'all 0.2s ease',
              padding: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%'
            }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'none'; }}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      
      <p className="muted-text" style={{ fontSize: '13.5px', margin: 0, textAlign: 'center' }}>
        © {new Date().getFullYear()} Likith G. All rights reserved.
      </p>
      
    </footer>
  );
}
