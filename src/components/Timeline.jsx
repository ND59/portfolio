import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

const Timeline = () => {
  const [timelineRef, isVisible] = useScrollReveal(0.2);

  const timelineData = [
    {
      year: '2025-Now',
      title: 'Data Engineer',
      company: 'Crédit Agricole PFM Roubaix',
      description: 'Développement de solutions data et optimisation des processus métier',
      type: 'work',
      color: 'from-accent-500 to-primary-600'
    },
    {
      year: '2023-Now',
      title: 'BUT Informatique',
      company: 'IUT Calais',
      description: 'Formation en développement logiciel et technologies web',
      type: 'education',
      color: 'from-primary-600 to-neutral-600'
    },
    {
      year: '2025',
      title: 'Projet Portfolio',
      company: 'Personnel',
      description: 'Création d\'un portfolio moderne avec React et animations avancées',
      type: 'project',
      color: 'from-neutral-600 to-accent-600'
    },
    {
      year: '2023',
      title: 'Baccalauréat',
      company: 'Lycée',
      description: 'Obtention du baccalauréat avec mention',
      type: 'education',
      color: 'from-primary-500 to-accent-500'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      case 'project':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div 
          ref={timelineRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Mon Parcours</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les étapes clés de mon parcours professionnel et académique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                {/* Contenu gauche pour les éléments pairs */}
                {index % 2 === 0 && (
                  <div className="w-1/2 pr-8 text-right">
                    <div className="liquid-card p-6">
                      <div className="flex items-center justify-end mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-300 mb-3">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                )}

                {/* Icône centrale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  {getIcon(item.type)}
                </div>

                {/* Contenu droit pour les éléments impairs */}
                {index % 2 === 1 && (
                  <div className="w-1/2 pl-8 ml-auto">
                    <div className="liquid-card p-6">
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-purple-300 mb-3">{item.company}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                )}

                {/* Espacement pour les éléments pairs */}
                {index % 2 === 0 && <div className="w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;