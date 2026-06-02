import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';

const Blog = () => {
  const [blogRef, isVisible] = useScrollReveal(0.2);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Les tendances du développement web en 2024",
      excerpt: "Découvrez les technologies et frameworks qui définissent l'avenir du développement web.",
      category: "tech",
      date: "15 Mars 2024",
      readTime: "5 min",
      image: "/api/placeholder/400/250",
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Optimisation des performances en React",
      excerpt: "Techniques avancées pour améliorer les performances de vos applications React.",
      category: "react",
      date: "10 Mars 2024",
      readTime: "8 min",
      image: "/api/placeholder/400/250",
      tags: ["React", "Performance", "Optimisation"]
    },
    {
      id: 3,
      title: "L'importance de la Data dans l'entreprise moderne",
      excerpt: "Comment les données transforment la prise de décision dans les organisations.",
      category: "data",
      date: "5 Mars 2024",
      readTime: "6 min",
      image: "/api/placeholder/400/250",
      tags: ["Data Science", "Business Intelligence", "Analytics"]
    },
    {
      id: 4,
      title: "Mon expérience chez Crédit Agricole",
      excerpt: "Retour d'expérience sur mon rôle de Data Engineer et les projets réalisés.",
      category: "experience",
      date: "1 Mars 2024",
      readTime: "10 min",
      image: "/api/placeholder/400/250",
      tags: ["Expérience", "Data Engineering", "Fintech"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous', count: blogPosts.length },
    { id: 'tech', name: 'Tech', count: blogPosts.filter(p => p.category === 'tech').length },
    { id: 'react', name: 'React', count: blogPosts.filter(p => p.category === 'react').length },
    { id: 'data', name: 'Data', count: blogPosts.filter(p => p.category === 'data').length },
    { id: 'experience', name: 'Expérience', count: blogPosts.filter(p => p.category === 'experience').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={blogRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Blog & Articles</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mes réflexions sur le développement, la tech et mon parcours professionnel
          </p>
        </div>

        {/* Filtres de catégorie */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block"
            >
              <article
                className={`liquid-card group cursor-pointer transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} de lecture</span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Extrait */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 text-purple-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lien de lecture */}
                  <div className="pt-4">
                    <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300 flex items-center">
                      Lire l'article
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="btn-liquid">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;