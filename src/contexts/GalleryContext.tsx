
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GalleryContextType {
  isGalleryVisible: boolean;
  showGallery: () => void;
  hideGallery: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export const GalleryProvider = ({ children }: { children: ReactNode }) => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  const showGallery = () => {
    setIsGalleryVisible(true);
  };

  const hideGallery = () => {
    setIsGalleryVisible(false);
  };

  return (
    <GalleryContext.Provider value={{ isGalleryVisible, showGallery, hideGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = (): GalleryContextType => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
