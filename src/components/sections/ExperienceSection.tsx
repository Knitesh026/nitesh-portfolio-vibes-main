
import { useState, useRef, useEffect } from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface Experience {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Team Leader - Operations",
    company: "Technotask Business Solutions",
    logo: "https://technotaskglobal.com/wp-content/uploads/2021/05/Original-Logo.svg",
    location: "Bhopal, Madhya Pradesh",
    period: "June 2024 – Present",
    responsibilities: [
      "Driving daily/monthly targets and maintaining campaign-wise performance.",
      "Ensuring quality delivery, compliance, and team performance management.",
      "Coaching, guiding, and fostering employee engagement.",
      "Motivating and grooming team members.",
      "Employee engagement and bonding.",
      "Attendance management."
    ]
  },
  {
    id: 2,
    title: "Team Leader - Operations",
    company: "Airvincible",
    logo: "https://airvincible.com/img/logo.png", 
    location: "Indore, Madhya Pradesh",
    period: "January 2023 – March 2024",
    responsibilities: [
      "Led a team of 50+ across multiple processes in Airtel Telemedia operations.",
      "Managed performance, guided team members, and ensured stakeholder collaboration.",
      "Guided and motivated individuals to achieve common goals.",
      "Facilitated communication and collaboration among team members.",
      "Monitored progress and took corrective action as needed."
    ]
  },
  {
    id: 3,
    title: "Team Leader - Operations",
    company: "Altruist Technologies Pvt. Ltd.",
    logo: "/img/Altruist-removebg-preview.png",
    location: "Indore, Madhya Pradesh",
    period: "September 2021 – September 2022",
    responsibilities: [
      "Oversaw daily operations, staff workloads, and performance reporting.",
      "Focused on motivating the team and achieving KPI targets.",
      "Led and motivated the team to achieve high standards and KPI targets.",
      "Solved problems and addressed responsibilities as a team leader."
    ]
  },
  {
    id: 4,
    title: "RTM - Operations",
    company: "Altruist Technologies Pvt. Ltd.",
    logo: "/img/Altruist-removebg-preview.png",
    location: "Indore, Madhya Pradesh",
    period: "September 2021 – September 2022",
    responsibilities: [
      "Managed real-time floor operations, including break/schedule adherence and service levels (SLA).",
      "Handled escalations, resolved process-related queries, and addressed grievances.",
      "Published client/process-specific reports timely.",
      "Was responsible for daily service levels and abandonment rates."
    ]
  },
  
  
];

const ExperienceSection = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-title animate-on-scroll">My Journey</div>
          <h2 className="heading-md mb-6 animate-on-scroll">Professional Experience</h2>
          <p className="text-muted-foreground animate-on-scroll text-lg">
            A chronological overview of my career progression and key responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          {/* Company tabs - Increased width from 300px to 320px */}
          <div className="flex flex-row lg:flex-col overflow-x-auto gap-3 pb-4 lg:pb-0 animate-on-scroll">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`flex-shrink-0 p-4 h-auto min-h-[90px] rounded-lg transition-all text-left lg:border-l-4 ${
                  activeExperience === exp.id
                    ? "bg-primary/10 lg:border-l-primary shadow-sm"
                    : "bg-transparent lg:border-l-transparent hover:bg-secondary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-background border-2 border-primary/20">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis text-base">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Experience details */}
          {isMobile ? (
            <div className="space-y-6 animate-on-scroll">
              {experiences.map((exp) => (
                <Card key={exp.id} className="glass rounded-xl p-6 shadow-sm backdrop-blur-sm bg-background/50 border border-primary/10">
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-background">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-medium mb-0">{exp.title}</h3>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-base text-muted-foreground">
                        <Briefcase size={18} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-base text-muted-foreground">
                        <Calendar size={18} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <h4 className="font-medium mb-3 text-lg">Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex text-base">
                          <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass rounded-xl p-6 md:p-8 shadow-sm animate-on-scroll backdrop-blur-sm bg-background/50 border border-primary/10">
              {experiences
                .filter((exp) => exp.id === activeExperience)
                .map((exp) => (
                  <div key={exp.id} className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-background">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-medium mb-0">{exp.title}</h3>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-base text-muted-foreground">
                        <Briefcase size={18} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center text-base text-muted-foreground">
                        <Calendar size={18} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <h4 className="font-medium mb-3 text-lg">Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex text-base">
                          <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
