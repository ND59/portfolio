export default function AboutPage() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Crédit Agricole PFM - Roubaix",
      period: "2023 - Présent",
      description: "Développement de solutions de data engineering, création de tableaux de bord Power BI, analyse et traitement de données massives pour optimiser les processus métier.",
      skills: ["Python", "SQL", "Power BI", "Data Analysis", "ETL"]
    },
    {
      title: "Étudiant BUT Informatique", 
      company: "IUT Calais - Parcours A",
      period: "2022 - 2025",
      description: "Formation en développement logiciel, bases de données, algorithmique et gestion de projet. Spécialisation en développement web et analyse de données.",
      skills: ["Java", "Python", "SQL", "Web Development", "Algorithmique"]
    }
  ]

  const skills = [
    { category: "Data & Analytics", items: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Data Analysis"] },
    { category: "Frontend", items: ["React", "Vue.js", "JavaScript", "TailwindCSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "API REST"] },
    { category: "Outils", items: ["Git", "Docker", "VS Code", "Jupyter", "Excel", "ETL"] }
  ]

  const interests = [
    { icon: "�", title: "Data Science", desc: "Analyse et visualisation de données" },
    { icon: "💻", title: "Développement Web", desc: "Interfaces modernes et performantes" },
    { icon: "�", title: "Finance & Tech", desc: "Solutions innovantes dans la banque" },
    { icon: "🚀", title: "Innovation", desc: "Nouvelles technologies et méthodologies" }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                À propos de moi
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Nadir El Moutaouakil, 20 ans. Étudiant en BUT Informatique et Data Engineer en alternance. 
              Passionné par le développement web moderne et l'analyse de données.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mon Histoire
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                À 20 ans, je suis actuellement en 3ème année de BUT Informatique parcours A à l'IUT de Calais. 
                En parallèle, je travaille en alternance comme Data Engineer au Crédit Agricole PFM à Roubaix.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Cette double casquette me permet de combiner théorie académique et pratique professionnelle, 
                en développant des compétences aussi bien en développement web qu'en analyse de données.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Mon objectif est de devenir un expert polyvalent, capable de créer des solutions innovantes 
                qui allient développement moderne et intelligence des données.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-center">Philosophie de Développement</h3>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Code simple et maintenable" },
                  { icon: "⚡", text: "Performance optimisée" },
                  { icon: "🎨", text: "Design centré utilisateur" },
                  { icon: "🔄", text: "Amélioration continue" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Expérience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300" data-cursor="hover">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="text-sm text-blue-400 font-medium">{exp.period}</div>
                    <div className="text-gray-400">{exp.company}</div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-2 text-center text-gray-300 hover:bg-white/10 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Centres d'Intérêt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{interest.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-gray-400 text-sm">{interest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Vous avez un projet passionnant ? Une idée innovante à développer ? 
              Je serais ravi d'échanger avec vous et de donner vie à vos projets.
            </p>
            <a href="/#contact" className="btn-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto group" data-cursor="hover">
              <span>Contactez-moi</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}