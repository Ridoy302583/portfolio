import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'bi-filetype-html' },
    { name: 'CSS3', icon: 'bi-filetype-css' },
    { name: 'JavaScript', icon: 'bi-filetype-js' },
    { name: 'React', icon: 'bi-react' },
    { name: 'Node.js', icon: 'bi-nodejs' },
    { name: 'MongoDB', icon: 'bi-database' },
    { name: 'Git', icon: 'bi-git' },
    { name: 'Responsive Design', icon: 'bi-laptop' },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <i className={`bi ${skill.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
