import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-left backdrop-blur-md border-b-[2px] border-white/20 shadow-md shadow-indigo-900/80 z-50">
      <div className="ml-[23%] flex gap-6">
        <a href="#hero" className="text-white text-lg font-semibold px-6 py-4 hover:text-gray-400 transition">HOME</a>
        <a href="#about" className="text-white text-lg font-semibold px-6 py-4 hover:text-gray-400 transition">ABOUT</a>
        <a href="#skills" className="text-white text-lg font-semibold px-6 py-4 hover:text-gray-400 transition">SKILLS</a>
        <a href="#projects" className="text-white text-lg font-semibold px-6 py-4 hover:text-gray-400 transition">PROJECTS</a>
        <a href="#contact" className="text-white text-lg font-semibold px-6 py-4 hover:text-gray-400 transition">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
