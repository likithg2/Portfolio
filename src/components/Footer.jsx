import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', borderTop: '1px solid rgba(0,0,0,0.05)', marginTop: '80px' }}>
      
      <div style={{ display: 'flex', gap: '24px' }}>
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
            style={{ color: 'var(--ink)', opacity: 0.6, transition: 'opacity 0.2s ease' }}
            onMouseOver={(e) => e.target.style.opacity = '1'}
            onMouseOut={(e) => e.target.style.opacity = '0.6'}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      
      <p className="muted-text" style={{ fontSize: '14px', margin: 0 }}>
        © {new Date().getFullYear()} Likith G. All rights reserved.
      </p>
      
    </footer>
  );
}
