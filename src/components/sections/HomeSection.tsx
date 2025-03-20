import { ArrowDown, FileDown } from 'lucide-react';
import ThemeSelector from '../ui/ThemeSelector';

const HomeSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/img/Nitesh-Kumar.pdf'; // Path to the PDF file in the public folder
    link.download = 'Nitesh-Kumar.pdf'; // Name of the downloaded file
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 animate-spin-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container">
        <div className="max-w-2xl mx-auto md:mx-0">
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full glass text-primary text-xs font-medium mb-2 mx-auto md:mx-0 animate-fade-in backdrop-blur-md border border-white/20">
              Team Leader
            </div>
            
            <h1 className="heading-xl animate-fade-in">
              <span className="block text-muted-foreground">Hi,</span>
              <span className="block">I'm Nitesh</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-display animate-fade-in glass-card p-4 backdrop-blur-sm border border-white/10 rounded-lg" style={{ animationDelay: '0.2s' }}>
              Team Leader with <span className="font-semibold text-foreground">7+ Years Experience</span> in the BPO industry
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all glass-card-hover border border-white/10 text-sm hover:text-black"
              >
                Get in Touch
              </a>
              <button 
                onClick={handleResumeDownload}
                className="resume-btn-outline text-sm"
              >
                <FileDown size={16} />
                Download Resume
              </button>
              <a 
                href="#experience" 
                className="glass px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors glass-card-hover border border-white/10 text-sm"
              >
                See Experience
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-10 top-[30.333333%] hidden lg:block">
        <div className="glass-card p-1 rounded-full animate-float border border-white/20" style={{ animationDelay: '1s' }}>
          <img 
            src="/img/perfil.png" 
            alt="Leadership concept" 
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
      </div>
      
      {/* Theme selector and scroll down arrow positioned separately */}
      <div className="absolute bottom-8 w-full flex items-center justify-center px-6">
        {/* Align ThemeSelector to the right */}
        <div className="absolute right-6 w-12 h-12 flex items-center justify-center">
          <ThemeSelector />
        </div>

        {/* Align ArrowDown to the center */}
        <a 
          href="#about" 
          className="w-12 h-12 rounded-full flex items-center justify-center glass shadow-md hover:shadow-lg animate-float transition-shadow"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
