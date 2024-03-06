import React from 'react';
import CallToAction from '../components/CallToAction';

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'Created first Mern based Blog',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: 'https://kiran-blg.onrender.com/',
      date: 'February 2024',
      role: 'Full-stack Developer',
    },
    // Add more projects as needed
  ];

  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3 bg-gray-100 dark:bg-gray-800'>
      <h1 className='text-3xl font-semibold text-gray-800 dark:text-white'>Projects</h1>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className='bg-white dark:bg-gray-700 p-4 rounded-md shadow-md w-full text-gray-800 dark:text-white'
        >
          <h2 className='text-xl font-semibold'>{project.title}</h2>
          <p className='text-gray-500'>{project.description}</p>
          <ul className='mt-2'>
            <li>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </li>
            <li>
              <strong>Date:</strong> {project.date}
            </li>
            <li>
              <strong>Role:</strong> {project.role}
            </li>
          </ul>
          <div className='mt-4 flex gap-2'>
            <a
              href={project.demoLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              Kiran Blog's
            </a>
            {/* Add additional links/buttons as needed */}
          </div>
        </div>
      ))}
      <p className='text-md text-gray-500 dark:text-gray-400'>
        More projects coming soon!
      </p>
      <CallToAction />
    </div>
  );
};

export default Projects;
