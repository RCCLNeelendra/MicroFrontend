import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    import('./MyButton');
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl">Home Page</h2>
      <my-button label="Custom Button"></my-button>
    </div>
  );
};

export default Home;