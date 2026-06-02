import React from 'react';

const BackgroundCubes = () => {
  // Générer plusieurs cubes avec des propriétés aléatoires
  const cubes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 60, // Taille entre 60 et 180px
    x: Math.random() * 120 - 10, // Position X en pourcentage (peut sortir légèrement de l'écran)
    y: Math.random() * 120 - 10, // Position Y en pourcentage
    duration: Math.random() * 30 + 20, // Durée d'animation entre 20 et 50 secondes
    delay: Math.random() * 15, // Délai de démarrage
    opacity: Math.random() * 0.15 + 0.05, // Opacité très faible entre 0.05 et 0.2
    rotationSpeed: Math.random() * 2 + 0.5, // Vitesse de rotation
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Cubes animés */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute cube-floating"
          style={{
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            animation: `cubeRotate ${cube.duration}s linear infinite, cubeFloat ${cube.duration * 0.7}s ease-in-out infinite`,
            animationDelay: `${cube.delay}s`,
            opacity: cube.opacity,
            filter: 'blur(2px)',
            '--cube-size': `${cube.size}px`,
          }}
        >
          <div className="cube-3d">
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        </div>
      ))}
      
      {/* Effet de profondeur avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
      
      {/* Effet de vignettage */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none"></div>
    </div>
  );
};

export default BackgroundCubes;