import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="glass dark:bg-white/5 dark:border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center max-w-6xl mx-auto transition-all duration-500">
        <Link to="/" className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-cursor="hover">
          Nadir El M.
        </Link>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {[
            { name: 'Accueil', path: '/' },
            { name: 'À propos', path: '/about' },
            { name: 'Projets', path: '/projects' },
            { name: 'Parcours', path: '/timeline' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/#contact' }
          ].map((item) => (
            item.path.startsWith('/#') ? (
              <a
                key={item.name}
                href={item.path}
                className={`relative group transition-colors duration-300 text-sm lg:text-base ${
                  location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                data-cursor="hover"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group transition-colors duration-300 text-sm lg:text-base ${
                  location.pathname === item.path ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                data-cursor="hover"
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            )
          ))}
        </nav>

        {/* Menu burger pour mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg glass"
        >
          <div className={`w-6 h-0.5 bg-white mb-1 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl p-4 animate-slide-down">
          <nav className="flex flex-col space-y-4">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'À propos', path: '/about' },
              { name: 'Projets', path: '/projects' },
              { name: 'Parcours', path: '/timeline' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/#contact' }
            ].map((item) => (
              item.path.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                  data-cursor="hover"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-blue-400 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                  data-cursor="hover"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}