
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [heartSize, setHeartSize] = useState(16);
  
  // Heart beat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartSize((size) => (size === 16 ? 20 : 16));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-primary/80 text-primary-foreground backdrop-blur-md relative z-10">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-medium mb-4">Nitesh Kumar</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-xs">
              Team Leader with over 7 years of experience in the BPO industry, 
              passionate about driving team performance and achieving business objectives.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#skills" className="opacity-80 hover:opacity-100 transition-opacity">Skills</a></li>
              <li><a href="#experience" className="opacity-80 hover:opacity-100 transition-opacity">Experience</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display font-medium mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 opacity-80" />
                <span>kr.nitesh026@gmaail..om</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 opacity-80" />
                <span>+91 7067393362</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 opacity-80" />
                <span>Bhopal, Madhya Pradesh</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p className="mb-2">&copy; {currentYear} Nitesh Kumar. All rights reserved.</p>
          <p className="flex items-center justify-center text-sm">
            This portfolio is initiative of PageCraft Tech. with love 
            <Heart 
              className="mx-1 text-red-400 transition-all duration-300" 
              fill="currentColor"
              size={heartSize}
            /> 
            by Nitesh Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
