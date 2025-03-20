
import { User, Briefcase, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden animate-on-scroll glass shadow-xl">
                {/* Professional image from Unsplash */}
                <img 
                  src="/img/about.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats cards with glass effect */}
              <div className="absolute -bottom-6 -right-6 glass rounded-lg p-4 shadow-lg animate-on-scroll stagger-1 backdrop-blur-md border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-medium text-sm">7+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass rounded-lg p-4 shadow-lg animate-on-scroll stagger-2 backdrop-blur-md border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Award size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Leadership</p>
                    <p className="font-medium text-sm">Team Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="glass p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
              <div className="section-title animate-on-scroll">About Me</div>
              <h2 className="heading-md mb-6 animate-on-scroll">
                Experienced Team Leader with a Passion for Excellence
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-sm">
                <p className="animate-on-scroll">
                  I am a dedicated Team Leader at TechnoTask Business Solutions Pvt Ltd in Bhopal, bringing over 7 years of experience in the BPO industry. My career includes leadership roles at Airvincible Pvt Ltd in Indore, where I served for over a year, and at Altruist Technology Pvt Ltd, along with nearly 8 months at Vindhya E-Infomedia Pvt Ltd.
                </p>
                
                <p className="animate-on-scroll stagger-1">
                  I thrive on embracing new challenges, as they provide valuable learning experiences and opportunities for professional growth. My extensive background in the BPO and IT sectors has equipped me with a diverse skill set and a strong capacity for team leadership.
                </p>
                
                <p className="animate-on-scroll stagger-2">
                  I am actively seeking new opportunities and challenges where I can apply my skills and experience to contribute meaningfully while continuing to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
