import React from 'react'
import { Link } from 'react-router-dom'
import { InteractiveButton } from './InteractiveElements'
import { useScrollReveal } from '../hooks/useAnimations'
import { useSoundEffects } from '../hooks/useSoundEffects'

export default function Hero() {
  const [heroRef] = useScrollReveal(0.2);
  const { playClickSound, playHoverSound } = useSoundEffects();

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content with staggered animations */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Greeting with typing effect */}
        <div className="mb-4 sm:mb-6 animate-slide-down">
          <span className="inline-block text-xl sm:text-2xl md:text-3xl text-blue-400 font-medium animate-wave">
            👋
          </span>
          <span className="ml-2 text-base sm:text-lg md:text-xl text-gray-300">
            Bonjour, je suis
          </span>
        </div>

        {/* Main title with enhanced animations */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 animate-scale-in">
          <span className="block gradient-text mb-1 sm:mb-2 leading-tight">
            Nadir El Moutaouakil
          </span>
        </h1>

        {/* Subtitle with liquid glass styling */}
        <div className="animate-slide-up">
          <div className="liquid-glass px-4 sm:px-6 lg:px-8 py-4 sm:py-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-medium">
              <span className="text-blue-300 font-semibold">Étudiant de 20 ans</span> en 3ème année 
              <span className="gradient-text font-semibold"> BUT Informatique</span> à Calais
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 mt-1 sm:mt-2">
              <span className="text-purple-300 font-semibold">Data Engineer</span> en alternance au 
              <span className="text-green-300 font-semibold"> Crédit Agricole PFM</span> à Roubaix
            </p>
          </div>
        </div>

        {/* Tags with liquid glass effect */}
        <div className="animate-fade-in mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {[
              { text: 'Python', color: 'from-green-400 to-emerald-500' },
              { text: 'React', color: 'from-blue-400 to-cyan-500' },
              { text: 'Data Science', color: 'from-purple-400 to-pink-500' },
              { text: 'Power BI', color: 'from-yellow-400 to-orange-500' }
            ].map((tag, index) => (
              <span
                key={tag.text}
                className="liquid-glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg hover:scale-110 transition-transform cursor-default"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${3 + index * 0.2}s`,
                  background: `linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))`
                }}
                data-cursor="hover"
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action buttons with liquid glass effect */}
        <div className="animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/projects">
              <InteractiveButton 
                onClick={playClickSound}
                onMouseEnter={playHoverSound}
                className="text-sm sm:text-base lg:text-lg flex items-center gap-2 group w-full sm:w-auto justify-center" 
                data-cursor="hover"
                variant="glass"
              >
                <span className="relative z-10">Découvrir mes projets</span>
                <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </InteractiveButton>
            </Link>
            
            <InteractiveButton
              onClick={() => {
                playClickSound();
                window.open('https://github.com/ND59', '_blank');
              }}
              onMouseEnter={playHoverSound}
              className="text-sm sm:text-base lg:text-lg flex items-center gap-2 group w-full sm:w-auto justify-center" 
              data-cursor="hover"
              variant="outline"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </InteractiveButton>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 animate-fade-in">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll pour découvrir</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}