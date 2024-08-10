import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center" title='Alawa'>
        &copy; {new Date().getFullYear()} My Porfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
