import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, Briefcase, Users, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <nav className="bg-deep-teal text-light-gray p-4 sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center">
    <a href="mailto:info@techinnovators.com" className="text-1xl font">contact us: info@techinnovators.com</a>
    <div className="hidden md:flex space-x-6">
      <NavLink href="#" icon={<Home size={20} />} text="Home" />
      <NavLink href="#courses" icon={<BookOpen size={20} />} text="Courses" />
      <NavLink href="#segments" icon={<Briefcase size={20} />} text="Services" />
      <NavLink href="#team" icon={<Users size={20} />} text="Our Team" />
      <NavLink href="https://dev.events/AS/PK/tech" icon={<Calendar size={20} />} text="Events" external />
    </div>
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
  {isOpen && (
    <div className="md:hidden mt-4">
      <NavLink href="#" icon={<Home size={20} />} text="Home" mobile />
      <NavLink href="#courses" icon={<BookOpen size={20} />} text="Courses" mobile />
      <NavLink href="#segments" icon={<Briefcase size={20} />} text="Services" mobile />
      <NavLink href="#team" icon={<Users size={20} />} text="Our Team" mobile />
      <NavLink href="https://dev.events/AS/PK/tech" icon={<Calendar size={20} />} text="Events" external mobile />
    </div>
  )}
</nav>

  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  external?: boolean;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, external = false, mobile = false }) => {
  const baseClasses = "flex items-center hover:text-light-green transition-colors";
  const mobileClasses = mobile ? "block py-2" : "";
  const linkClasses = `${baseClasses} ${mobileClasses}`;

  return (
    <a 
      href={href} 
      className={linkClasses}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  );
};

export default Navbar;