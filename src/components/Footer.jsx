import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; 2023 John Doe. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition">
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary transition">
              <i className="bi bi-github text-xl"></i>
            </a>
            <a href="#" className="hover:text-primary transition">
              <i className="bi bi-twitter text-xl"></i>
            </a>
          </div>
        </div>
        <p className="text-center mt-4 text-sm">Designed by WebSparks AI</p>
      </div>
    </footer>
  )
}

export default Footer
