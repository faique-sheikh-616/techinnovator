import React from 'react';

interface SegmentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Segment: React.FC<SegmentProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover-scale transform transition duration-300 hover:-translate-y-2 min-h-[300px]"> {/* Adjust min-h value as needed */}
      <div className="flex items-center mb-4">
        <div className="text-deep-teal mr-4 bg-light-gray p-3 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold mb-2l">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-deep-teal hover:underline">Learn More &rarr;</a>
    </div>
  );
};


export default Segment;