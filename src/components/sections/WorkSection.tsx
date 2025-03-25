
import { useState, useEffect, useRef } from 'react';

// Work items with actual image URLs from Unsplash
const workItems = [
  { 
    id: 1, 
    category: "leadership", 
    title: "Team Leadership",
    imageUrl: "/img/teamleadeship.png"
  },
  { 
    id: 2, 
    category: "operations", 
    title: "Operations Management",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    category: "mentoring", 
    title: "Team Mentoring",
    imageUrl: "/img/Teammentoring.png"
  },
  { 
    id: 4, 
    category: "performance", 
    title: "Performance Management",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, 
    category: "training", 
    title: "Training Sessions",
    imageUrl: "/img/Trainings.png"
  },
  { 
    id: 6, 
    category: "workplace", 
    title: "Workplace Environment",
    imageUrl: "/img/Worke.png"
  },
];

const categories = ["all", "leadership", "operations", "mentoring", "performance", "training"];

const WorkSection = () => {
  const [filter, setFilter] = useState("all");
  const [visibleItems, setVisibleItems] = useState(workItems);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (filter === "all") {
      setVisibleItems(workItems);
    } else {
      setVisibleItems(workItems.filter(item => item.category === filter));
    }
  }, [filter]);

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
  }, [visibleItems]);

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-title animate-on-scroll">My Work</div>
          <h2 className="heading-md mb-6 animate-on-scroll">Professional Gallery</h2>
          <p className="text-muted-foreground animate-on-scroll text-lg">
            A visual showcase of my professional journey, leadership moments, and team achievements.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full text-base transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, index) => (
            <div 
              key={item.id} 
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-on-scroll image-zoom border border-primary/10"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-1">
                  {item.category}
                </div>
                <h3 className="font-medium text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
