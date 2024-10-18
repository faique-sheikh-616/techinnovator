import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  institution: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, institution }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale transform transition duration-300 hover:-translate-y-2 animate-fadeIn">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-deep-teal mb-1 animate-slideIn">{name}</h3>
        <p className="text-moss-green font-medium mb-2 animate-slideIn animation-delay-200">{role}</p>
        <p className="text-steel-blue text-sm animate-slideIn animation-delay-400">{institution}</p>
      </div>
    </div>
  );
};

export default TeamMember;