
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const BackgroundTheme = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position for parallax effect
  const calculateOpacity = (basePosition: number) => {
    const maxScroll = 2000; // Maximum scroll position to consider
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
    const distance = Math.abs(scrollPercentage - basePosition / 10);
    return Math.max(0, 1 - distance * 2.5);
  };

  // Get theme-specific colors
  const getThemeColors = () => {
    switch (currentTheme) {
      case 'blue':
        return {
          primary: 'from-blue-50 to-indigo-50',
          shapes: ['bg-blue-200', 'bg-indigo-100', 'bg-blue-100'],
          parallax: ['bg-indigo-50', 'bg-blue-50']
        };
      case 'green':
        return {
          primary: 'from-green-50 to-emerald-50',
          shapes: ['bg-emerald-200', 'bg-green-100', 'bg-emerald-100'],
          parallax: ['bg-green-50', 'bg-emerald-50']
        };
      case 'orange':
        return {
          primary: 'from-orange-50 to-amber-50',
          shapes: ['bg-amber-200', 'bg-orange-100', 'bg-amber-100'],
          parallax: ['bg-amber-50', 'bg-orange-50']
        };
      case 'pink':
        return {
          primary: 'from-pink-50 to-rose-50',
          shapes: ['bg-rose-200', 'bg-pink-100', 'bg-rose-100'],
          parallax: ['bg-pink-50', 'bg-rose-50']
        };
      case 'teal':
        return {
          primary: 'from-teal-50 to-cyan-50',
          shapes: ['bg-teal-200', 'bg-cyan-100', 'bg-teal-100'],
          parallax: ['bg-cyan-50', 'bg-teal-50']
        };
      case 'red':
        return {
          primary: 'from-red-50 to-rose-50',
          shapes: ['bg-red-200', 'bg-rose-100', 'bg-red-100'],
          parallax: ['bg-rose-50', 'bg-red-50']
        };
      case 'yellow':
        return {
          primary: 'from-yellow-50 to-amber-50',
          shapes: ['bg-yellow-200', 'bg-amber-100', 'bg-yellow-100'],
          parallax: ['bg-amber-50', 'bg-yellow-50']
        };
      case 'offwhite':
        return {
          primary: 'from-neutral-50 to-gray-50',
          shapes: ['bg-neutral-200', 'bg-gray-100', 'bg-neutral-100'],
          parallax: ['bg-gray-50', 'bg-neutral-50']
        };
      case 'slate':
        return {
          primary: 'from-slate-100 to-gray-100',
          shapes: ['bg-slate-300', 'bg-slate-200', 'bg-slate-100'],
          parallax: ['bg-slate-50', 'bg-gray-100']
        };
      case 'lavender':
        return {
          primary: 'from-violet-50 to-indigo-50',
          shapes: ['bg-violet-200', 'bg-violet-100', 'bg-indigo-100'],
          parallax: ['bg-violet-50', 'bg-indigo-50']
        };
      default: // Purple (default)
        return {
          primary: 'from-purple-50 to-indigo-50',
          shapes: ['bg-purple-200', 'bg-indigo-100', 'bg-purple-100'],
          parallax: ['bg-indigo-50', 'bg-purple-50']
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500">
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary} opacity-70 transition-colors duration-500`}></div>
      
      {/* Animated shapes */}
      <div className={`absolute top-20 right-20 w-72 h-72 rounded-full ${colors.shapes[0]} opacity-20 mix-blend-multiply blur-3xl animate-float transition-colors duration-500`} style={{ animationDelay: '0s' }}></div>
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full ${colors.shapes[1]} opacity-20 mix-blend-multiply blur-3xl animate-float transition-colors duration-500`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full ${colors.shapes[2]} opacity-20 mix-blend-multiply blur-3xl animate-float transition-colors duration-500`} style={{ animationDelay: '1s' }}></div>
      
      {/* Parallax effects based on scroll */}
      <div 
        className={`absolute w-64 h-64 rounded-full ${colors.parallax[0]} blur-3xl mix-blend-multiply transition-all duration-1000`}
        style={{ 
          top: '10%', 
          left: '10%',
          opacity: calculateOpacity(1),
          transform: `translateY(${scrollPosition * 0.02}px)`
        }}
      ></div>
      <div 
        className={`absolute w-96 h-96 rounded-full ${colors.parallax[1]} blur-3xl mix-blend-multiply transition-all duration-1000`}
        style={{ 
          bottom: '5%', 
          right: '15%',
          opacity: calculateOpacity(5),
          transform: `translateY(${-scrollPosition * 0.03}px)`
        }}
      ></div>
      
      {/* Glass pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    </div>
  );
};

export default BackgroundTheme;
