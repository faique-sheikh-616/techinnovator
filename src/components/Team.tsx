import React from 'react';
import TeamMember from './TeamMember';
import Partners from './Partners';

interface TeamMemberData {
  name: string;
  role: string;
  institution: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: "Scott Ryans",
    role: "Director Tech Innovators",
    institution: "Stanford University-California, USA",
  },
  {
    name: "Saud Khan",
    role: "Director Tech Innovators",
    institution: "Stanford University-California, USA",
  },
  {
    name: "Sheikh Faique Ahmed",
    role: "Community / Operational Head",
    institution: "Muhammad Ali Jinnah University (PGC)-Karachi, Pakistan",
  },
  {
    name: "Steve Barret Jonathan",
    role: "Operational Manager",
    institution: "University of Alberta-Edmonton, Canada",
  }
];

const supportPartners = [
  "Naman Kaur","Muhammad Mustafa Shahzad", "Jibran Ali Khan", "Abdul Raheem Siddiqui", "Shahmir Sindhu", "Yousuf Khan Jamali","Mohsin Ali Bukhari"
];

const Team: React.FC = () => {
  return (
    <>
      <section id="team" className="py-16 bg-light-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-deep-teal mb-8 text-center animate-fadeIn">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                institution={member.institution}
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 animate-fadeIn">Support Partners</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {supportPartners.map((partner, index) => (
              <span
                key={index}
                className="bg-moss-green text-white px-4 py-2 rounded-full shadow-md animate-fadeIn hover:bg-deep-teal transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
};

export default Team;