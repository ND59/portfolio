import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '16px', background: 'rgba(0,0,0,0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '20px', color: '#60a5fa', textDecoration: 'none' }}>
          Nadir El M.
        </Link>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Accueil</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>À propos</Link>
          <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projets</Link>
          <Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link>
        </nav>
      </div>
    </header>
  )
}