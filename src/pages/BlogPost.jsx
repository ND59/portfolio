import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postRef, isVisible] = useScrollReveal(0.2);

  // Données des articles de blog (normalement depuis une API)
  const blogPosts = [
    {
      id: 1,
      title: "Les tendances du développement web en 2024",
      excerpt: "Découvrez les technologies et frameworks qui définissent l'avenir du développement web.",
      content: `
        <p>Le développement web continue d'évoluer à un rythme effréné. En 2024, nous assistons à l'émergence de nouvelles technologies et frameworks qui redéfinissent la façon dont nous créons des applications web.</p>
        
        <h3>React et l'écosystème moderne</h3>
        <p>React reste un pilier incontournable du développement frontend. Avec l'introduction des Server Components et des nouvelles fonctionnalités de React 18, nous voyons une évolution vers des applications plus performantes et une meilleure expérience utilisateur.</p>
        
        <h3>TypeScript prend le dessus</h3>
        <p>TypeScript n'est plus une option, c'est devenu un standard. La plupart des nouveaux projets adoptent TypeScript dès le départ pour bénéficier d'une meilleure maintenabilité et d'une détection d'erreurs plus précoce.</p>
        
        <h3>L'essor des Meta-frameworks</h3>
        <p>Next.js, Nuxt.js, et SvelteKit continuent de gagner en popularité. Ces meta-frameworks offrent des solutions complètes avec le rendu côté serveur, la génération statique, et l'optimisation automatique.</p>
        
        <h3>WebAssembly et les performances</h3>
        <p>WebAssembly (WASM) permet d'exécuter du code haute performance directement dans le navigateur. Cette technologie ouvre de nouvelles possibilités pour les applications web complexes.</p>
        
        <h3>Conclusion</h3>
        <p>Le développement web en 2024 se caractérise par une recherche constante de performance, d'accessibilité et d'expérience utilisateur. Les développeurs doivent rester à jour avec ces évolutions pour créer des applications modernes et compétitives.</p>
      `,
      category: "tech",
      date: "15 Mars 2024",
      readTime: "5 min",
      author: "Nadir El Moutaouakil",
      image: "/api/placeholder/800/400",
      tags: ["React", "Next.js", "TypeScript", "WebAssembly", "Développement Web"]
    },
    {
      id: 2,
      title: "Optimisation des performances en React",
      excerpt: "Techniques avancées pour améliorer les performances de vos applications React.",
      content: `
        <p>L'optimisation des performances est cruciale pour offrir une expérience utilisateur fluide. Voici les techniques essentielles pour optimiser vos applications React.</p>
        
        <h3>React.memo et la mémoïsation</h3>
        <p>React.memo permet d'éviter les re-rendus inutiles en mémorisant le résultat du rendu d'un composant. Utilisez-le pour les composants qui reçoivent souvent les mêmes props.</p>
        
        <h3>useMemo et useCallback</h3>
        <p>Ces hooks permettent de mémoriser des valeurs coûteuses à calculer et des fonctions pour éviter leur recréation à chaque rendu.</p>
        
        <h3>Code splitting et lazy loading</h3>
        <p>Divisez votre application en chunks plus petits avec React.lazy() et Suspense pour charger uniquement le code nécessaire.</p>
        
        <h3>Virtualisation des listes</h3>
        <p>Pour les longues listes, utilisez des bibliothèques comme react-window ou react-virtualized pour ne rendre que les éléments visibles.</p>
        
        <h3>Optimisation des images</h3>
        <p>Utilisez des formats modernes comme WebP, implémentez le lazy loading et optimisez la taille des images selon le contexte d'affichage.</p>
      `,
      category: "react",
      date: "10 Mars 2024",
      readTime: "8 min",
      author: "Nadir El Moutaouakil",
      image: "/api/placeholder/800/400",
      tags: ["React", "Performance", "Optimisation", "JavaScript"]
    },
    {
      id: 3,
      title: "L'importance de la Data dans l'entreprise moderne",
      excerpt: "Comment les données transforment la prise de décision dans les organisations.",
      content: `
        <p>À l'ère du numérique, les données sont devenues l'or noir des entreprises. Comprendre leur importance et savoir les exploiter est crucial pour rester compétitif.</p>
        
        <h3>La révolution des données</h3>
        <p>Les entreprises génèrent aujourd'hui des volumes de données sans précédent. Cette explosion d'informations offre des opportunités immenses pour améliorer les processus, comprendre les clients et innover.</p>
        
        <h3>Data-driven decision making</h3>
        <p>Les décisions basées sur les données sont plus objectives et souvent plus efficaces. Les entreprises qui adoptent cette approche voient généralement une amélioration significative de leurs performances.</p>
        
        <h3>Les outils modernes d'analyse</h3>
        <p>Power BI, Tableau, et d'autres outils de Business Intelligence permettent de visualiser et d'analyser les données de manière intuitive, rendant l'analyse accessible à tous les collaborateurs.</p>
        
        <h3>L'intelligence artificielle et le machine learning</h3>
        <p>Ces technologies permettent d'extraire des insights complexes des données et d'automatiser des processus de décision.</p>
        
        <h3>Défis et opportunités</h3>
        <p>La gestion de la qualité des données, la conformité RGPD, et la formation des équipes restent des défis majeurs à relever.</p>
      `,
      category: "data",
      date: "5 Mars 2024",
      readTime: "6 min",
      author: "Nadir El Moutaouakil",
      image: "/api/placeholder/800/400",
      tags: ["Data Science", "Business Intelligence", "Analytics", "IA"]
    },
    {
      id: 4,
      title: "Mon expérience chez Crédit Agricole",
      excerpt: "Retour d'expérience sur mon rôle de Data Engineer et les projets réalisés.",
      content: `
        <p>Depuis mon arrivée chez Crédit Agricole PFM à Roubaix, j'ai eu l'opportunité de travailler sur des projets passionnants en tant que Data Engineer.</p>
        
        <h3>L'environnement de travail</h3>
        <p>Évoluer dans le secteur bancaire m'a permis de comprendre les enjeux de sécurité, de conformité et de performance dans un environnement hautement régulé.</p>
        
        <h3>Projets réalisés</h3>
        <p>J'ai participé au développement de solutions de data engineering, à la création de tableaux de bord Power BI pour le suivi des KPIs métier, et à l'optimisation des processus de traitement de données.</p>
        
        <h3>Technologies utilisées</h3>
        <p>Python pour le traitement de données, SQL pour les requêtes complexes, Power BI pour la visualisation, et diverses technologies big data pour gérer les volumes importants.</p>
        
        <h3>Défis rencontrés</h3>
        <p>La gestion de données sensibles, l'optimisation des performances sur de gros volumes, et la création d'interfaces utilisateur intuitives pour les métiers.</p>
        
        <h3>Apprentissages</h3>
        <p>Cette expérience m'a permis de développer une vision business de la data, de comprendre les enjeux métier et d'améliorer mes compétences techniques et relationnelles.</p>
        
        <h3>Perspectives</h3>
        <p>Je continue à évoluer dans ce domaine passionnant, toujours en quête de nouvelles technologies et méthodologies pour optimiser le traitement et l'analyse des données.</p>
      `,
      category: "experience",
      date: "19 Septembre 2025",
      readTime: "10 min",
      author: "Nadir El Moutaouakil",
      image: "../../assets/CreditAgricole-Roubaix.jpg",
      tags: ["Expérience", "Data Engineering", "Fintech", "Crédit Agricole"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-gray-400 mb-8">L'article que vous recherchez n'existe pas.</p>
          <Link 
            to="/blog" 
            className="btn-professional px-6 py-3 rounded-lg inline-block"
          >
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      tech: 'from-accent-500 to-primary-600',
      react: 'from-primary-600 to-accent-600',
      data: 'from-neutral-600 to-accent-600',
      experience: 'from-accent-600 to-primary-500'
    };
    return colors[category] || 'from-primary-500 to-accent-500';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      tech: 'Technologie',
      react: 'React',
      data: 'Data Science',
      experience: 'Expérience'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Retour
          </button>
        </div>

        {/* Article */}
        <article 
          ref={postRef}
          className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                {getCategoryLabel(post.category)}
              </span>
              <span className="text-gray-400">{post.readTime}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-gray-400">
              <span>Par {post.author}</span>
            </div>
          </header>

          {/* Image */}
          <div className="mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': '#e5e7eb',
              '--tw-prose-headings': '#ffffff',
              '--tw-prose-lead': '#d1d5db',
              '--tw-prose-links': '#0ea5e9',
              '--tw-prose-bold': '#ffffff',
              '--tw-prose-counters': '#9ca3af',
              '--tw-prose-bullets': '#6b7280',
              '--tw-prose-hr': '#374151',
              '--tw-prose-quotes': '#e5e7eb',
              '--tw-prose-quote-borders': '#374151',
              '--tw-prose-captions': '#9ca3af',
              '--tw-prose-code': '#e5e7eb',
              '--tw-prose-pre-code': '#e5e7eb',
              '--tw-prose-pre-bg': '#1f2937',
              '--tw-prose-th-borders': '#374151',
              '--tw-prose-td-borders': '#374151'
            }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation vers d'autres articles */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-6">Autres articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group block p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
                  >
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getCategoryColor(relatedPost.category)} text-white mb-3`}>
                      {getCategoryLabel(relatedPost.category)}
                    </span>
                    <h4 className="font-semibold text-white group-hover:text-accent-400 transition-colors mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;