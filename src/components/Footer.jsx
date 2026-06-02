export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left text-sm sm:text-base">
          © {new Date().getFullYear()} Nadir El Moutaouakil — Créé avec ❤️ et TailwindCSS
        </p>
        
        <div className="flex gap-4 sm:gap-6">
          {[
            { name: 'GitHub', url: 'https://github.com/ND59' },
            { name: 'LinkedIn', url: 'https://fr.linkedin.com/in/nadir-el-moutaouakil-4449842b8' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all text-sm sm:text-base"
              data-cursor="hover"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}