// import React from 'react';
// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-deep-teal text-white relative">
//       <div className="absolute left-0 w-full overflow-hidden " style={{ top: '-20px' }}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
//           <path fill="#F2F2F2" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div>
//       <div className="container mx-auto px-4 pt-24 pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Tech Innovators</h3>
//             <p>Pakistan Computer Science Hub</p>
//             <div>
//               <h4 className="text-xl font-semibold mb-4 mt-6">About Us</h4>
//               <p>Tech Innovators is dedicated to empowering the next generation of tech leaders in Pakistan. We provide free courses, internships, and exciting opportunities in the world of computer science.</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-light-green">Home</a></li>
//               <li><a href="#courses" className="hover:text-light-green">Courses</a></li>
//               <li><a href="#internships" className="hover:text-light-green">Internships</a></li>
//               <li><a href="#freelancing" className="hover:text-light-green">Freelancing</a></li>
//               <li><a href="#skills" className="hover:text-light-green">Skills</a></li>
//               <li><a href="#events" className="hover:text-light-green">Events</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
//             <form className="mb-4 flex">
//               <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-full text-deep-teal" />
//               <button type="submit" className="bg-moss-green text-white px-4 py-2 rounded-r-full hover:bg-opacity-90 transition-colors">Subscribe</button>
//             </form>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-light-green"><Facebook size={24} /></a>
//               <a href="#" className="hover:text-light-green"><Twitter size={24} /></a>
//               <a href="#" className="hover:text-light-green"><Linkedin size={24} /></a>
//               <a href="#" className="hover:text-light-green"><Instagram size={24} /></a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 text-right">
//           <p>&copy; 2024 Tech Innovators Pakistan. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-teal text-white relative">
      {/* <div className="absolute left-0 w-full overflow-hidden" style={{ top: '-10px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#F2F2F2" d="M0,100 C200,0 600,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div> */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tech Innovators</h3>
            <p>Pakistan Computer Science Hub</p>
            <div>
              <h4 className="text-xl font-semibold mb-4 mt-6">About Us</h4>
              <p>
                Tech Innovators is dedicated to empowering the next generation
                of tech leaders in Pakistan. We provide free courses,
                internships, and exciting opportunities in the world of computer
                science.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-light-green">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-light-green">
                  Courses
                </a>
              </li>
              <li>
                <a href="#internships" className="hover:text-light-green">
                  Internships
                </a>
              </li>
              <li>
                <a href="#freelancing" className="hover:text-light-green">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-light-green">
                  Skills
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-light-green">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <form className="mb-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-full text-deep-teal"
              />
              <button
                type="submit"
                className="bg-moss-green text-white px-4 py-2 rounded-r-full hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-light-green">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-light-green">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-light-green">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-light-green">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right">
          <p>&copy; 2024 Tech Innovators Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
