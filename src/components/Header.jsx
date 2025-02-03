import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Portfolio</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-dark hover:text-primary transition">About</a>
          <a href="#skills" className="text-dark hover:text-primary transition">Skills</a>
          <a href="#projects" className="text-dark hover:text-primary transition">Projects</a>
          <a href="#contact" className="text-dark hover:text-primary transition">Contact</a>
        </nav>
        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-dark hover:text-primary transition">About</a>
            <a href="#skills" className="text-dark hover:text-primary transition">Skills</a>
            <a href="#projects" className="text-dark hover:text-primary transition">Projects</a>
            <a href="#contact" className="text-dark hover:text-primary transition">Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
