import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="section-container min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute inset-0 bg-gradient-radial from-premium/10 via-transparent to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-premium/30 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="card-liquid p-12 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in leading-tight">
            Nadir El Moutaouakil
          </h1>
          <div className="text-2xl md:text-3xl mb-8 text-premium animate-slide-up">
            <span className="typing-animation">Développeur Full-Stack</span>
          </div>
        </div>

        <div className="card-liquid p-8 mb-12">
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 animate-slide-up max-w-3xl mx-auto">
            Passionné par la création d'expériences numériques exceptionnelles avec des technologies modernes
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => navigate('/projects')}
            className="btn-liquid-primary group"
            data-cursor="hover"
          >
            <span className="relative z-10">Voir mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-premium to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>
          
          <a
            href="#contact"
            className="btn-liquid-outline group"
            data-cursor="hover"
          >
            <span className="relative z-10">Me contacter</span>
            <div className="absolute inset-0 bg-premium/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </a>
        </div>
      </div>
    </section>
  )
}