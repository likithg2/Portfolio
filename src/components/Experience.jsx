export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <div className="line"></div>
        <h2>Experience</h2>
      </div>

      <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Item 1 */}
        <div style={{ position: 'relative', width: '100%' }}>
          <div className="experience-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '19px', margin: '0 0 4px 0', fontWeight: 600 }}>Project Intern</h3>
              <div style={{ fontSize: '14.5px', color: 'var(--ink)', fontWeight: 500 }}>InnovationHub Technologies Pvt. Ltd. • Bengaluru</div>
            </div>
            <div className="badge__tag" style={{ background: 'rgba(0,0,0,0.04)', fontSize: '12.5px', color: 'var(--muted)' }}>
              Sept 2025 - Nov 2025
            </div>
          </div>
          
          <ul className="muted-text" style={{ margin: 0, paddingLeft: '18px', fontSize: '14.5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Worked on PiConnect, a Kotlin-based Android application with 13 Activities and 15 XML layouts, implementing Raspberry Pi connectivity through SSH/SFTP, remote command execution and automatic reconnection.</li>
            <li>Implemented bidirectional file transfer and remote file management through 6 core operations, real-time progress tracking and 2 device-discovery methods; assisted in integrating Bluetooth RFCOMM keyboard control with 10 buttons supporting 20 character inputs.</li>
            <li>Worked on securing connection credentials using AES-256 encryption and integrating 4 file-viewing modules supporting 16 file formats, including image, audio, PDF and text/document files.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
