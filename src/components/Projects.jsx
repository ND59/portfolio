import React from 'react'

const projects = [
  {
    name: "Topspot",
    description: "Application web permettant de découvrir les meilleurs spots pour sortir en ville.",
    link: "https://github.com/ND59/Topspot",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    color: "from-accent-500 to-primary-600"
  },
  {
    name: "EggFortress",
    description: "Jeu web multijoueur inspiré de Tower Defense avec des mécaniques innovantes.",
    link: "https://github.com/louisprvst/EggFortress",
    tech: ["React", "Socket.io", "TailwindCSS", "Express"],
    color: "from-primary-600 to-accent-600"
  },
  {
    name: "iptflix",
    description: "Plateforme de streaming éducative pour l'apprentissage en ligne.",
    link: "https://github.com/louisprvst/iptflix",
    tech: ["Vue.js", "Firebase"],
    color: "from-neutral-600 to-primary-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient">
          Mes Projets
        </h2>
        
        <div className="text-center mb-6 sm:mb-8">
          <a href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base" data-cursor="hover">
            Voir tous mes projets →
          </a>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name} 
              className="liquid-card p-4 sm:p-6 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-full h-3 bg-gradient-to-r ${project.color} rounded-full mb-4 sm:mb-6 opacity-80`} />
              
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gradient transition-all duration-300 text-white">
                {project.name}
              </h3>
              
              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="liquid-glass px-2 sm:px-3 py-1 text-xs text-white/90 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener"
                className="btn-liquid-outline inline-flex items-center text-sm sm:text-base px-4 py-2 group-hover:scale-105 transition-all duration-300"
                data-cursor="hover"
              >
                <span className="relative z-10">Voir sur GitHub</span>
                <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}