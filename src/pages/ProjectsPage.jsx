export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Topspot",
      description: "Application web permettant de découvrir les meilleurs spots pour sortir en ville. Interface moderne avec géolocalisation et système de notation communautaire.",
      longDescription: "Topspot est une plateforme interactive qui connecte les utilisateurs aux meilleurs lieux de sortie de leur ville. L'application utilise la géolocalisation pour proposer des recommandations personnalisées et inclut un système de review communautaire.",
      image: "/api/placeholder/600/400",
      link: "https://github.com/ND59/Topspot",
      demo: "#",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Mapbox"],
      features: [
        "Géolocalisation en temps réel",
        "Système de notation communautaire", 
        "Interface responsive",
        "API REST complète"
      ],
      color: "from-blue-500 to-cyan-500",
      category: "Web App"
    },
    {
      id: 2,
      name: "EggFortress",
      description: "Jeu web multijoueur inspiré de Tower Defense avec des mécaniques innovantes. Gameplay en temps réel avec Socket.io.",
      longDescription: "EggFortress est un jeu de tower defense multijoueur en temps réel. Les joueurs doivent défendre leur base contre des vagues d'ennemis tout en attaquant celle de leurs adversaires.",
      image: "/api/placeholder/600/400",
      link: "https://github.com/louisprvst/EggFortress",
      demo: "#",
      tech: ["React", "Socket.io", "TailwindCSS", "Express", "Canvas API"],
      features: [
        "Multijoueur temps réel",
        "Animations canvas fluides",
        "Système de progression",
        "Matchmaking automatique"
      ],
      color: "from-purple-500 to-pink-500",
      category: "Gaming"
    },
    {
      id: 3,
      name: "iptflix",
      description: "Plateforme de streaming éducative pour l'apprentissage en ligne. Interface Netflix-like pour les contenus pédagogiques.",
      longDescription: "Plateforme e-learning moderne avec une interface inspirée de Netflix. Permet aux étudiants d'accéder à des contenus pédagogiques organisés par matière et niveau.",
      image: "/api/placeholder/600/400", 
      link: "https://github.com/louisprvst/iptflix",
      demo: "#",
      tech: ["Vue.js", "Firebase","Flutter"],
      features: [
        "Listes de lecture personnalisées",
        "Interface adaptative",
        "Authentification sécurisée"
      ],
      color: "from-green-500 to-teal-500",
      category: "Education"
    },
    {
      id: 4,
      name: "Portfolio Personnel", 
      description: "Site portfolio moderne avec animations avancées et curseur personnalisé. Design glassmorphism et effets de particules.",
      longDescription: "Portfolio personnel développé avec React et TailwindCSS, featuring des animations CSS avancées, un curseur personnalisé et un design glassmorphism moderne.",
      image: "/api/placeholder/600/400",
      link: "#",
      demo: "#",
      tech: ["React", "TailwindCSS", "Vite", "CSS Animations"],
      features: [
        "Curseur personnalisé animé",
        "Effets glassmorphism",
        "Animations CSS fluides", 
        "Design responsive"
      ],
      color: "from-indigo-500 to-purple-500",
      category: "Portfolio"
    },
  ]

  const categories = ["Tous", "Web App", "Gaming", "Education", "Portfolio", "Productivity", "Utility"]
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Découvrez mes projets alliant développement web et data science. 
              Chaque création reflète ma formation en BUT Informatique et mon expérience en tant que Data Engineer.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="glass px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 hover:bg-white/10"
                  data-cursor="hover"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-2">
                      {project.category === 'Gaming' ? '🎮' : 
                       project.category === 'Education' ? '📚' :
                       project.category === 'Portfolio' ? '💼' :
                       project.category === 'Productivity' ? '✅' :
                       project.category === 'Utility' ? '⚡' : '🌐'}
                    </div>
                    <span className="text-sm text-gray-300 bg-black/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.name}
                    </h3>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/5 text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Fonctionnalités:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 group/btn"
                      data-cursor="hover"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary text-center py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 group/btn"
                      data-cursor="hover"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Quelques Statistiques
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "6+", label: "Projets Terminés", icon: "🚀" },
                { number: "10+", label: "Technologies", icon: "⚡" },
                { number: "20", label: "Ans", icon: "📅" },
                { number: "100%", label: "Passion", icon: "❤️" }
              ].map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-3xl">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Une Idée de Projet ?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Je serais ravi de collaborer avec vous 
              pour donner vie à vos idées les plus ambitieuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group" data-cursor="hover">
                <span>Discutons de votre projet</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </a>
              <a href="https://github.com/ND59" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 group" data-cursor="hover">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span>Voir sur GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}