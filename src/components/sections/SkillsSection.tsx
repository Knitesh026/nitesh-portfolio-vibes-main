
import { useState, useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "Effective Communication", percentage: 95 },
  { name: "Time Management & Multitasking", percentage: 95 },
  { name: "Coaching & Mentoring", percentage: 95 },
  { name: "Emotional Intelligence (EQ)", percentage: 85 },
  { name: "Performance Management", percentage: 65 },
  { name: "Decision-Making", percentage: 85 },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillIndex, setActiveSkillIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          // Start the skill highlighting sequence
          setTimeout(() => {
            animateSkills();
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateSkills = () => {
    // Sequentially highlight each skill
    skills.forEach((_, index) => {
      setTimeout(() => {
        setActiveSkillIndex(index);
        // Reset after a delay
        setTimeout(() => {
          if (index === skills.length - 1) {
            setActiveSkillIndex(null);
          }
        }, 1500);
      }, index * 1500);
    });
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background elements - Updated with teal colors */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 mix-blend-multiply"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-title animate-on-scroll">My Skills</div>
          <h2 className="heading-md mb-6 animate-on-scroll">Professional Expertise</h2>
          <p className="text-muted-foreground animate-on-scroll text-lg glass-card p-4 backdrop-blur-sm border border-primary/10 rounded-lg">
            With over 7 years of proven leadership in the BPO industry, I specialize in driving performance, 
            fostering team growth, and consistently exceeding business objectives in dynamic, high-pressure environments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`animate-on-scroll glass-card-hover p-5 rounded-xl transition-all duration-500 ${
                  activeSkillIndex === index ? 'bg-primary/5 shadow-lg transform -translate-y-1' : 'bg-white/5'
                }`} 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-medium text-lg transition-colors duration-300 ${
                    activeSkillIndex === index ? 'text-primary font-semibold' : ''
                  }`}>
                    {skill.name}
                  </h3>
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    activeSkillIndex === index ? 'text-primary font-semibold' : ''
                  }`}>
                    {skill.percentage}%
                  </span>
                </div>
                <Progress 
                  value={isVisible ? skill.percentage : 0} 
                  className={`h-2 transition-all duration-1000 ease-out ${
                    activeSkillIndex === index ? 'h-2.5' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
