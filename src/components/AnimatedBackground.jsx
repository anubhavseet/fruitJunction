import { useBackground } from '../context/BackgroundContext';

const AnimatedBackground = () => {
  const { currentBackground } = useBackground();

  return (
    <div 
      className="animated-background"
      style={{
        background: currentBackground.gradient,
        transition: 'background 1.5s ease-in-out',
        '--bg-primary': currentBackground.primary,
        '--bg-secondary': currentBackground.secondary
      }}
    >
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;

