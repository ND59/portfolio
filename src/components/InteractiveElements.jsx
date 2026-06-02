import React, { useState, useRef } from 'react';

const InteractiveButton = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef();

  const createRipple = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    // Supprimer le ripple après l'animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (event) => {
    if (!disabled) {
      createRipple(event);
      onClick?.(event);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'btn-liquid-primary';
      case 'outline':
        return 'btn-liquid-outline';
      case 'glass':
        return 'btn-liquid';
      default:
        return 'btn-liquid-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
        relative overflow-hidden
        transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-4 focus:ring-accent-500/50
        group
      `}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {/* Contenu du bouton */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                      transform -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-700 ease-in-out"></div>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </button>
  );
};

const FloatingActionButton = ({ icon, onClick, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        fixed bottom-6 right-6 z-40
        w-14 h-14 rounded-full
        bg-gradient-to-r from-accent-500 to-primary-600
        text-white shadow-lg
        transform transition-all duration-300
        hover:scale-110 hover:shadow-2xl
        active:scale-95
        focus:outline-none focus:ring-4 focus:ring-accent-500/50
        flex items-center justify-center
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      <div className={`flex items-center justify-center transform transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`}>
        {icon}
      </div>
      
      {/* Effet de pulsation */}
      <div className="absolute inset-0 rounded-full bg-accent-500/30 animate-ping"></div>
    </button>
  );
};

const AnimatedIcon = ({ icon, hoverIcon, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transform transition-all duration-300 ${isHovered ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}>
        {icon}
      </div>
      {hoverIcon && (
        <div className={`absolute inset-0 transform transition-all duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`}>
          {hoverIcon}
        </div>
      )}
    </div>
  );
};

export { InteractiveButton, FloatingActionButton, AnimatedIcon };