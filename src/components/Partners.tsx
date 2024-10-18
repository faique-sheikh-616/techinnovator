// import React from 'react';

// const partners = [
//   {
//     name: 'edX',
//     logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/EdX_newer_logo.svg',
//   },
//   {
//     name: 'Netlify',
//     logo: 'https://seekvectorlogo.com/wp-content/uploads/2022/02/university-of-alberta-vector-logo-2022.png',
//   },
//   {
//     name: 'Transcend',
//     logo: 'https://seekvectorlogo.com/wp-content/uploads/2023/06/common-sense-education-vector-logo.png',
//   },
//   {
//     name: 'Stanford University',
//     logo: 'https://iconape.com/wp-content/files/dy/195131/png/stanford-university-logo.png',
//   },
//   {
//     name: 'Barr Center',
//     logo: 'https://iconape.com/wp-content/files/ll/194365/png/194365.png',
//   },
//   {
//     name: 'University of Stack',
//     logo: 'https://www.svgrepo.com/show/353608/coursera.svg',
//   },
// ];

// const Partners: React.FC = () => {
//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-deep-teal mb-8 text-center animate-fadeIn">
//           Our Collaborators
//         </h2>
//         <div className="slider">
//           <div className="slide-track">
//             {[...partners, ...partners].map((partner, index) => (
//               <div key={index} className="slide">
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from 'react';

const partners = [
  {
    name: 'edX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/EdX_newer_logo.svg',
  },
  {
    name: 'Netlify',
    logo: 'https://seekvectorlogo.com/wp-content/uploads/2022/02/university-of-alberta-vector-logo-2022.png',
  },
  {
    name: 'Transcend',
    logo: 'https://seekvectorlogo.com/wp-content/uploads/2023/06/common-sense-education-vector-logo.png',
  },
  {
    name: 'Stanford University',
    logo: 'https://iconape.com/wp-content/files/dy/195131/png/stanford-university-logo.png',
  },
  {
    name: 'Barr Center',
    logo: 'https://seekvectorlogo.com/wp-content/uploads/2023/07/colorado-mesa-university-vector-logo.png',
  },
  {
    name: 'University of Stack',
    logo: 'https://www.svgrepo.com/show/353608/coursera.svg',
  },
];

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-deep-teal mb-8 text-center animate-fadeIn">
          Our Collaborators
        </h2>
        <div className="slider">
          <div className="slide-track">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="slide">
                <div
                  className={`logo-container ${
                    partner.name === 'Barr Center' ||
                    partner.name === 'University of Stack'
                      ? 'large'
                      : ''
                  }`}
                >
                  <img src={partner.logo} alt={partner.name} className="logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
