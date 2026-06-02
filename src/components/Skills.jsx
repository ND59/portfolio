const skills = [
  { name: 'React', level: 90, icon: '⚛️' },
  { name: 'JavaScript', level: 85, icon: '🟨' },
  { name: 'TailwindCSS', level: 95, icon: '🎨' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'Vue.js', level: 75, icon: '💚' },
  { name: 'Firebase', level: 70, icon: '🔥' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 card-hover border border-gray-700/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}