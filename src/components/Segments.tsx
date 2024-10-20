import React from 'react';
import Segment from './Segment';
import { Briefcase, Code, Lightbulb, GraduationCap } from 'lucide-react';

const Segments: React.FC = () => {
  return (
   <section className="py-16 bg-light-gray">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Segment
        title="Internships and Job Opportunities"
        description="Explore exciting internships and job opportunities in the tech industry. We collaborate with various companies and software houses to provide you with exclusive roles. Soon, we’ll be registered and licensed in foreign countries, allowing us to offer our own internships that will be highly regarded in the job market. Stay tuned for updates!"
        icon={<Briefcase size={48} />}
        link="https://chat.whatsapp.com/J3h7I6QoPdH17UUs92brjm"
      />
      <Segment
        title="Freelancing Support"
        description="Get tips, guides, and networking opportunities for aspiring freelancers. Our community connects you with experienced freelancers who share their insights on landing clients, setting rates, and managing projects. Plus, we’ll host regular meetups to help you build valuable connections in the freelance space.
        "
        icon={<Code size={48} />}
        link="https://chat.whatsapp.com/LLVI0EWgGQ10swCV5XZS5K"
      />
      <Segment
        title="Skill Development"
        description="Access workshops, mentorship programs, and self-paced learning resources designed to enhance your skills. Our hands-on workshops cover the latest tools and technologies, while our mentorship initiatives pair you with industry leaders. We’re committed to fostering a culture of continuous learning to help you excel in your career."
        icon={<Lightbulb size={48} />}
        link="https://chat.whatsapp.com/GwmivU9H7f62Z0bQmbdBNj"
      />
      <Segment
        title="FYP Ideas and Support"
        description="Get inspiration and guidance for your Final Year Project (FYP). Our platform provides a wealth of resources, including project ideas, expert advice, and peer feedback. Join our community of students and mentors who are eager to share their experiences and support you in bringing your project to life."
        icon={<GraduationCap size={48} />}
        link="https://chat.whatsapp.com/DOqffs05L5SKydt0hCYDID"
      />
    </div>
  </div>
</section>

  );
};

export default Segments;