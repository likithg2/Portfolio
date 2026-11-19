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
          <div className="experience-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '20px', margin: '0 0 8px 0', fontWeight: 600 }}>Project Intern</h3>
              <div style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: 500 }}>InnovationHub Technologies Pvt. Ltd. • Bengaluru</div>
            </div>
            <div className="badge__tag" style={{ background: '#eef2ee', fontSize: '13px', color: 'var(--muted)' }}>
              Sept 2025 - Nov 2025
            </div>
          </div>
          
          <ul className="muted-text" style={{ margin: 0, paddingLeft: '20px', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>Worked on PiConnect, a Kotlin-based Android application with 13 Activities and 15 XML layouts, implementing Raspberry Pi connectivity through SSH/SFTP, remote command execution and automatic reconnection.</li>
            <li>Implemented bidirectional file transfer and remote file management through 6 core operations, real-time progress tracking and 2 device-discovery methods; assisted in integrating Bluetooth RFCOMM keyboard control with 10 buttons supporting 20 character inputs.</li>
            <li>Worked on securing connection credentials using AES-256 encryption and integrating 4 file-viewing modules supporting 16 file formats, including image, audio, PDF and text/document files.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
