import React from 'react';
import NavigationBar from './NavigationBar';

const Header = () => {
  return (
    <header className="p-4 bg-gray-200 flex justify-between items-center">
      <h1 className="text-2xl">Dashboard Shell App</h1>
      <NavigationBar />
    </header>
  );
};

export default Header;