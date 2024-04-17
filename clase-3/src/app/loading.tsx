'use client'
import { useState, useEffect } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading ${isLoading ? 'active' : ''}`}>
      <div className="">CARGANDO</div>
    </div>
  );
};

export default Loading;
