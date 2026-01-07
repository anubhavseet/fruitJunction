import { useState, useEffect } from 'react';

export const useAnimatedBackground = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const fruitBackgrounds = [
    {
      name: 'apple',
      colors: ['#fff5f5', '#ffe5e5', '#fff0f0'],
      gradient: 'linear-gradient(135deg, #fff5f5 0%, #ffe5e5 50%, #fff0f0 100%)',
      primary: '#fff5f5',
      secondary: '#ffe5e5'
    },
    {
      name: 'orange',
      colors: ['#fff8f0', '#fff5e6', '#fffaf0'],
      gradient: 'linear-gradient(135deg, #fff8f0 0%, #fff5e6 50%, #fffaf0 100%)',
      primary: '#fff8f0',
      secondary: '#fff5e6'
    },
    {
      name: 'banana',
      colors: ['#fffef0', '#fffde6', '#fffef5'],
      gradient: 'linear-gradient(135deg, #fffef0 0%, #fffde6 50%, #fffef5 100%)',
      primary: '#fffef0',
      secondary: '#fffde6'
    },
    {
      name: 'grape',
      colors: ['#f8f0ff', '#f5ebff', '#faf5ff'],
      gradient: 'linear-gradient(135deg, #f8f0ff 0%, #f5ebff 50%, #faf5ff 100%)',
      primary: '#f8f0ff',
      secondary: '#f5ebff'
    },
    {
      name: 'berry',
      colors: ['#fff0f5', '#ffeef5', '#fff5fa'],
      gradient: 'linear-gradient(135deg, #fff0f5 0%, #ffeef5 50%, #fff5fa 100%)',
      primary: '#fff0f5',
      secondary: '#ffeef5'
    },
    {
      name: 'kiwi',
      colors: ['#f0fff5', '#e6ffe6', '#f5fff5'],
      gradient: 'linear-gradient(135deg, #f0fff5 0%, #e6ffe6 50%, #f5fff5 100%)',
      primary: '#f0fff5',
      secondary: '#e6ffe6'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % fruitBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [fruitBackgrounds.length]);

  return {
    currentBackground: fruitBackgrounds[currentBg],
    allBackgrounds: fruitBackgrounds
  };
};


