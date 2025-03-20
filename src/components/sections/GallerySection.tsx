
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Camera, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useGallery } from '@/contexts/GalleryContext';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Team Collaboration Session",
    description: "Our team brainstorming during the annual strategy meeting."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Project Planning",
    description: "Team members discussing the roadmap for our next product launch."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Remote Work Session",
    description: "Our team adapting to the new remote work environment."
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Team Building Activity",
    description: "Building stronger bonds during our quarterly team retreat."
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Product Launch Celebration",
    description: "Celebrating the successful launch of our latest product."
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Office Culture",
    description: "A glimpse of our vibrant office environment."
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { isGalleryVisible } = useGallery();
  
  // Display enlarged image modal
  const showEnlargedImage = (index: number) => {
    setSelectedImage(index);
  };
  
  // Close the enlarged image
  const closeEnlargedImage = () => {
    setSelectedImage(null);
  };

  // If gallery isn't visible, return an empty section with an ID for navigation
  if (!isGalleryVisible) {
    return <section id="gallery" className="hidden"></section>;
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-primary/5 relative animate-fade-in">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-title animate-on-scroll">Company Gallery</div>
          <h2 className="heading-md mb-6 animate-on-scroll">Our Memories</h2>
          <p className="text-muted-foreground animate-on-scroll text-lg">
            A visual journey through our company's special moments, celebrations, and milestones.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-12 animate-on-scroll">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id}>
                  <Card className="border-0 shadow-md bg-card/80 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 relative group">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image.url}
                          alt={image.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="bg-background/80 hover:bg-background hover:scale-110 transition-all duration-300"
                          onClick={() => showEnlargedImage(index)}
                        >
                          <Expand className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="p-5 bg-card">
                        <h3 className="font-medium text-xl mb-2">{image.title}</h3>
                        <p className="text-muted-foreground">{image.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-6 shadow-md" />
            <CarouselNext className="right-2 lg:-right-6 shadow-md" />
          </Carousel>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 animate-on-scroll">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="cursor-pointer rounded-md overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              onClick={() => showEnlargedImage(index)}
            >
              <AspectRatio ratio={1}>
                <img 
                  src={image.url} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged image modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeEnlargedImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Button>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={galleryImages[selectedImage].url} 
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-10 w-10"
                onClick={() => setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1))}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-10 w-10"
                onClick={() => setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1))}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="text-white p-4 text-center">
              <h3 className="text-xl font-medium mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
