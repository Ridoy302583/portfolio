import React from 'react'

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm John Doe</h1>
          <p className="text-xl mb-6">A passionate Full Stack Developer</p>
          <a
            href="#contact"
            className="bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="John Doe"
            className="rounded-full w-64 h-64 object-cover mx-auto"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
