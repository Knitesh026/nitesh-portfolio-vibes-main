
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, FileDown, Github, Linkedin, Globe, Code, Camera, Instagram } from 'lucide-react';
import { useGallery } from '@/contexts/GalleryContext';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const externalLinks = [
  { href: "https://github.com/Knitesh026", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/nitesh-kumar-109933104/", label: "LinkedIn", icon: Linkedin },
  { href: "https://niteshkumar656.netlify.app/", label: "Portfolio", icon: Globe },
  { href: "https://www.instagram.com/knitesh656/", label: "Instagram", icon: Instagram },
  { href: "#", label: "Tech Blog", icon: Code },
  { href: "#gallery", label: "Gallery", icon: Camera },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showExternalLinks, setShowExternalLinks] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  
  // Use the gallery context instead of local state
  const { isGalleryVisible, showGallery: showGalleryContext } = useGallery();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the state when gallery visibility changes
  useEffect(() => {
    setShowGallery(isGalleryVisible);
  }, [isGalleryVisible]);

  const handleResumeDownload = () => {
    // Trigger the download of the resume PDF
    const resumePath = "/img/Nitesh-Kumar.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Nitesh-Kumar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGalleryClick = () => {
    setShowGallery(true);
    setShowExternalLinks(false);
    showGalleryContext(); // Use the context function
    
    // Scroll to gallery section
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-display font-semibold"
        >
          Nitesh Kumar
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "active"
              )}
            >
              {link.label}
            </a>
          ))}
          
          {/* Show Gallery in main nav only when it's been clicked */}
          {showGallery && (
            <a
              href="#gallery"
              className={cn(
                "nav-link",
                activeSection === "gallery" && "active"
              )}
            >
              Gallery
            </a>
          )}
          
          {/* External Links Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowExternalLinks(!showExternalLinks)}
              className="nav-link flex items-center gap-1"
              aria-expanded={showExternalLinks}
              aria-haspopup="true"
            >
              Portfolio
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${showExternalLinks ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {showExternalLinks && (
              <div className="absolute top-full right-0 mt-2 w-48 rounded-lg glass-card shadow-lg animate-scale z-50 backdrop-blur-sm border border-white/10">
                <div className="py-2 rounded-lg">
                  {externalLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-primary/5 transition-colors"
                        onClick={(e) => {
                          if (link.href === "#gallery") {
                            e.preventDefault();
                            handleGalleryClick();
                          }
                          setShowExternalLinks(false);
                        }}
                      >
                        <IconComponent size={16} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          {/* Resume Download Button */}
          <button 
            onClick={handleResumeDownload}
            className="resume-btn ml-2"
          >
            <FileDown size={18} />
            Resume
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glass py-4 shadow-md animate-slide-up-enter">
          <div className="container flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 px-3 rounded-md transition-colors",
                  activeSection === link.href.substring(1) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Show Gallery in mobile nav only when it's been clicked */}
            {showGallery && (
              <a
                href="#gallery"
                className={cn(
                  "py-2 px-3 rounded-md transition-colors",
                  activeSection === "gallery" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
            )}
            
            {/* External Links Section for Mobile */}
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-sm text-muted-foreground px-3 py-1">Portfolio Links</p>
              {externalLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-secondary transition-colors"
                    onClick={(e) => {
                      if (link.href === "#gallery") {
                        e.preventDefault();
                        handleGalleryClick();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <IconComponent size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>
            
            {/* Mobile Resume Download Button */}
            <button 
              onClick={handleResumeDownload}
              className="flex items-center gap-2 py-2 px-3 rounded-md bg-primary text-primary-foreground"
            >
              <FileDown size={18} />
              Download Resume
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
