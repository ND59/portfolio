export default function Footer() {
  return (
    <footer style={{ padding: '24px', borderTop: '1px solid #333', textAlign: 'center', color: '#999' }}>
      <p>© {new Date().getFullYear()} Nadir El Moutaouakil</p>
      <div style={{ marginTop: '12px' }}>
        <a href="https://github.com/ND59" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', marginRight: '16px', textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com/in/nadir-el-moutaouakil" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>LinkedIn</a>
      </div>
    </footer>
  )
}