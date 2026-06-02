import { useRef, useEffect, useMemo } from 'react';

export const useTilt = (options = {}) => {
  const ref = useRef();

  const defaultOptions = useMemo(() => ({
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    ...options
  }), [options]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeout;

    const getValues = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (defaultOptions.reverse ? -1 : 1) * ((defaultOptions.max / 2) - (y - centerY) * (defaultOptions.max / centerY));
      const rotateY = (defaultOptions.reverse ? -1 : 1) * ((x - centerX) * (defaultOptions.max / centerX));

      return {
        tiltX: rotateX,
        tiltY: rotateY,
        percentageX: (x / rect.width) * 100,
        percentageY: (y / rect.height) * 100,
      };
    };

    const updateTransform = (tiltX, tiltY, scale = 1) => {
      const transform = `perspective(${defaultOptions.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      element.style.transform = transform;
    };

    const handleMouseEnter = () => {
      element.style.willChange = 'transform';
      if (defaultOptions.transition) {
        element.style.transition = `transform ${defaultOptions.speed}ms ${defaultOptions.easing}`;
      }
    };

    const handleMouseMove = (e) => {
      const values = getValues(e);
      updateTransform(values.tiltX, values.tiltY, defaultOptions.scale);
    };

    const handleMouseLeave = () => {
      if (defaultOptions.reset) {
        if (defaultOptions.transition) {
          element.style.transition = `transform ${defaultOptions.speed}ms ${defaultOptions.easing}`;
        }
        updateTransform(0, 0, 1);
        
        timeout = setTimeout(() => {
          element.style.willChange = 'auto';
        }, defaultOptions.speed);
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timeout) clearTimeout(timeout);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [defaultOptions]);

  return ref;
};