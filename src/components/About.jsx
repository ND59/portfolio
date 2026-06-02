import React from 'react'

export default function About() {
  const skills = [
    { name: 'Python', level: 85, color: 'from-primary-500 to-primary-600' },
    { name: 'SQL', level: 80, color: 'from-accent-500 to-accent-600' },
    { name: 'React', level: 75, color: 'from-accent-600 to-primary-500' },
    { name: 'Power BI', level: 70, color: 'from-neutral-500 to-neutral-600' },
    { name: 'TailwindCSS', level: 85, color: 'from-primary-600 to-accent-500' }
  ]

  return (
    <section id="apropos" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          À propos de moi
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="liquid-card p-6 sm:p-8">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4">
                Étudiant de 20 ans en 3ème année de BUT Informatique parcours A à Calais, je suis également Data Engineer en alternance au Crédit Agricole PFM à Roubaix. Je me spécialise dans le développement web moderne et l'analyse de données.
              </p>
              
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Mon objectif est de combiner mes compétences en développement et en data science pour créer des solutions innovantes et performantes, alliant créativité technique et analyse de données.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['React', 'TailwindCSS', 'Python', 'SQL', 'Power BI', 'Node.js', 'Vue.js', 'Firebase'].map((tech) => (
                <span 
                  key={tech}
                  className="liquid-glass px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:scale-105 transition-transform cursor-default text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 order-first lg:order-last">
            <div className="liquid-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Compétences</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm sm:text-base text-gray-100">{skill.name}</span>
                    <span className="text-gray-300 text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 liquid-glass">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}