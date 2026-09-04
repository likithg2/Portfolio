export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Experience</h2>
      </div>

      <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Item 1 */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', margin: '0 0 8px 0', fontWeight: 600 }}>Android Application Development Intern</h3>
              <div style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: 500 }}>InnovationHub Technologies Pvt. Ltd. • Bengaluru</div>
            </div>
            <div className="badge__tag" style={{ background: '#eef2ee', fontSize: '13px', color: 'var(--muted)' }}>
              Sept 2025 - Nov 2025
            </div>
          </div>
          
          <ul className="muted-text" style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>Developed PiConnect, a wireless Android app interfacing with a Raspberry Pi scanning device via Wi-Fi, SSH, and Bluetooth, replacing manual USB-based workflows.</li>
            <li>Gained production-level experience with Ubuntu OS, Android Studio, and network protocol integration (SSH, TCP/IP, Bluetooth HID) through end-to-end feature development and on-site testing.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
