import React from 'react';
import { Code } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = 'https://chat.whatsapp.com/G6vNIWFrRWn7b2GUxFgJnM';

  return (
    <div className="bg-deep-teal text-light-gray pt-[8rem] pb-[14rem] relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#9FBF6F]">TECH INNOVATORS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Pakistan Computer Science Hub
          </p>
          <p className="text-lg mb-8">
            Empowering the next generation of tech leaders in Pakistan. Join us
            to explore free courses, internships, and exciting opportunities in
            the world of computer science.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg inline-block bg-light-green text-deep-teal px-6 py-2 rounded-full hover:bg-moss-green transition-colors duration-300"
          >
            Join Now
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 animate-slideIn">
          <div className="relative">
            <div className="laptop-screen bg-deep-teal border-4 border-light-green rounded-t-lg p-4 w-80 h-48 mx-auto">
              <div className="typing-animation">
                <Code
                  size={24}
                  className="text-light-green inline-block mr-2"
                />
                <span className="text-light-green">
                  const function = () =&gt; &#123;
                </span>
                <br />
                <span className="text-light-green ml-8">
                  return "Tech Innovators";
                </span>
                <br />
                <span className="text-light-green">&#125;;</span>
              </div>
            </div>
            <div className="laptop-base bg-steel-blue w-96 h-4 mx-auto rounded-b-lg"></div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden h-[14rem]"
        style={{ transform: 'translateY(1px)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#F2F2F2"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
