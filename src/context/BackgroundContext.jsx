import { createContext, useContext } from 'react';
import { useAnimatedBackground } from '../hooks/useAnimatedBackground';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const backgroundData = useAnimatedBackground();
  
  return (
    <BackgroundContext.Provider value={backgroundData}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within BackgroundProvider');
  }
  return context;
};


