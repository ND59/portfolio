import React from 'react'
import { InteractiveButton } from './InteractiveElements'
import { useScrollReveal } from '../hooks/useAnimations'
import { useTilt } from '../hooks/useTilt'
import { useSoundEffects } from '../hooks/useSoundEffects'

export default function Contact() {
  const [contactRef, isVisible] = useScrollReveal(0.2);
  const { playClickSound, playHoverSound, playSuccessSound } = useSoundEffects();

  const ContactCard = ({ contact, index }) => {
    const tiltRef = useTilt({ max: 15, scale: 1.05 });

    const handleCardClick = () => {
      playClickSound();
      if (contact.title === 'Email') {
        window.location.href = 'mailto:nadirelmoutaouakil59@gmail.com';
      } else if (contact.title === 'LinkedIn') {
        window.open('https://linkedin.com/in/nadir-el-moutaouakil', '_blank');
      } else if (contact.title === 'GitHub') {
        window.open('https://github.com/ND59', '_blank');
      }
    };

    return (
      <div 
        ref={tiltRef}
        className={`liquid-card p-4 sm:p-6 cursor-pointer transition-all duration-1000 delay-${index * 200} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={handleCardClick}
        onMouseEnter={playHoverSound}
      >
        <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transform transition-transform group-hover:scale-110">
          {contact.icon}
        </div>
        <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-white">
          {contact.title}
        </h3>
        <p className="text-gray-200 text-xs sm:text-sm break-words">
          {contact.value}
        </p>
      </div>
    );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          ref={contactRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Travaillons ensemble
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une idée à concrétiser ? 
            N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            { icon: '📧', title: 'Email', value: 'nadirelmoutaouakil59@gmail.com' },
            { icon: '💼', title: 'LinkedIn', value: 'Nadir El Moutaouakil' },
            { icon: '🐙', title: 'GitHub', value: 'ND59' }
          ].map((contact, index) => (
            <ContactCard key={contact.title} contact={contact} index={index} />
          ))}
        </div>
        
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <InteractiveButton
            onClick={() => {
              playSuccessSound();
              window.location.href = 'mailto:nadirelmoutaouakil59@gmail.com';
            }}
            onMouseEnter={playHoverSound}
            className="text-sm sm:text-base lg:text-lg flex items-center gap-2 sm:gap-3 mx-auto group w-full sm:w-auto justify-center" 
            data-cursor="hover"
            variant="glass"
          >
            <span className="relative z-10">Démarrer un projet</span>
            <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-45 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </InteractiveButton>
        </div>
      </div>
    </section>
  )
}