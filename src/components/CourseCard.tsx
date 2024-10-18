import React from 'react';

interface CourseCardProps {
  title: string;
  link: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, link, image }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale transform transition duration-300 hover:-translate-y-2">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-deep-teal mb-2">{title}</h3>
          <p className="text-steel-blue mb-4">
            Enhance your skills with this comprehensive course.
          </p>
          <span className="inline-block bg-light-green text-deep-teal px-4 py-2 rounded-full text-sm font-semibold hover:bg-moss-green transition-colors">
            Learn More
            <img src="C:\Users\FaiqueAhmedSiddiqui\Downloads\cs hub.png"></img>
          </span>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
