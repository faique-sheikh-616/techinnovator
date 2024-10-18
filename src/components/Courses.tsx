import React from 'react';

const courses = [
  { title: "CS50's Introduction to Programming with Scratch", link: "https://www.edx.org/learn/scratch-programming/harvard-university-cs50-s-introduction-to-programming-with-scratch" },
  { title: "CS50's Introduction to Artificial Intelligence with Python", link: "https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python" },
  { title: "Introduction to Data Science with Python", link: "https://www.edx.org/learn/data-science/harvard-university-introduction-to-data-science-with-pytho" },
  { title: "Machine Learning and AI with Python", link: "https://www.edx.org/learn/machine-learning/harvard-university-machine-learning-and-ai-with-python?utm_medium=partner-marketing&utm_source=referral&utm_campaign=harvard&utm_content=pll-course-page-machine-learning-ai-python" },
  { title: "Data Science: R Basics", link: "https://www.edx.org/learn/r-programming/harvard-university-data-science-r-basics" },
  { title: "Data Science: Linear Regression ", link: "https://www.edx.org/learn/data-science/harvard-university-data-science-linear-regression" },
  { title: "Data Science: Machine Learning", link: "https://www.edx.org/learn/machine-learning/harvard-university-data-science-machine-learning" },
  { title: "Data Science: Wrangling", link: "https://www.edx.org/learn/data-science/harvard-university-data-science-wrangling" },
  { title: "Data Science: Capstone", link: "https://www.edx.org/learn/data-science/harvard-university-data-science-capstone" },
  { title: "Data Science: Visualization ", link: "https://www.edx.org/learn/data-visualization/harvard-university-data-science-visualization" },
  { title: "Data Science: Probability", link: "https://www.edx.org/learn/probability/harvard-university-data-science-probability" },
  { title: "Data Science: Inference and Modeling", link: "https://www.edx.org/learn/data-science/harvard-university-data-science-inference-and-modeling" },
  { title: "High-Dimensional Data Analysis", link: "https://www.edx.org/learn/data-analysis/harvard-university-high-dimensional-data-analysis" },
  { title: "Statistics and R", link: "https://www.edx.org/learn/r-programming/harvard-university-statistics-and-r" },
  { title: "Applications of TinyML", link: "https://www.edx.org/learn/tinyml/harvard-university-applications-of-tinyml" },
  { title: "Fundamentals of TinyML", link: "https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml" },
  { title: "Deploying TinyML", link: "https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml" },
  { title: "MLOps for Scaling TinyML", link: "https://www.edx.org/learn/tinyml/harvard-university-mlops-for-scaling-tinyml" },
  { title: "UMD, USMx: Agile Leadership Principles and Practices", link: "https://www.edx.org/learn/agile/the-university-of-maryland-college-park-agile-leadership-principles-and-practices?index=product&queryID=3b2e7c9263b01ffe842dda9e089e7a1b&position=7&results_level=second-level-results&term=free+courses+online&objectID=course-8a1d65fc-8ae5-4292-ad7b-e5c6059aeb91&webview=false&campaign=Agile+Leadership+Principles+and+Practices&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },
    { title: "UMD, USMx: Agile Process, Project, and Program Controls", link: "https://www.edx.org/learn/agile/the-university-of-maryland-college-park-agile-process-project-and-program-controls?index=product&queryID=3b2e7c9263b01ffe842dda9e089e7a1b&position=13&results_level=second-level-results&term=free+courses+online&objectID=course-cc116bd5-8879-4c83-bbb5-9523e74fb1ce&webview=false&campaign=Agile+Process%2C+Project%2C+and+Program+Controls&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },
  { title: " UMD, USMx: Agile Innovation and Problem Solving Skills", link: "https://www.edx.org/learn/agile/the-university-of-maryland-college-park-agile-innovation-and-problem-solving-skills?index=product&queryID=3b2e7c9263b01ffe842dda9e089e7a1b&position=14&results_level=second-level-results&term=free+courses+online&objectID=course-1ec75041-a869-471a-a06b-f92553d281a2&webview=false&campaign=Agile+Innovation+and+Problem+Solving+Skills&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },
  { title: "IBM: Introduction to Cloud Native, DevOps, Agile, and NoSQL", link: "https://www.edx.org/learn/cloud-computing/ibm-developing-cloud-native-applications?index=product&queryID=3b2e7c9263b01ffe842dda9e089e7a1b&position=9&results_level=second-level-results&term=free+courses+online&objectID=course-727971ff-3872-4fdc-9133-5a4d6d0077ab&webview=false&campaign=Introduction+to+Cloud+Native%2C+DevOps%2C+Agile%2C+and+NoSQL&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },

  { title: "Introduction to DevOps and Site Reliability Engineering", link: "https://www.edx.org/learn/devops/the-linux-foundation-introduction-to-devops-and-site-reliability-engineering?index=product&queryID=1e9ee4b1bbcba97fea0e4665f8401528&position=7&results_level=second-level-results&term=free+courses+online&objectID=course-55fee42c-4594-4060-8407-9b37ed89779d&webview=false&campaign=Introduction+to+DevOps+and+Site+Reliability+Engineering&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },
  { title: "Machine Learning with Python: from Linear Models to Deep Learning", link: "https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?index=product&queryID=97a8544a43bf74978adacc50b0deb6f2&position=9&results_level=second-level-results&term=free+courses+online&objectID=course-4c70ad9b-9602-49af-bf00-83fa4bf47708&webview=false&campaign=Machine+Learning+with+Python%3A+from+Linear+Models+to+Deep+Learning.&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fcourses" },

];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-16 bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-deep-teal mb-8 text-center">Free Harvard Edx Advanced Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover-scale transform transition duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-deep-teal mb-4">{course.title}</h3>
              <a href={course.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-light-green text-deep-teal px-4 py-2 rounded-full text-sm font-semibold hover:bg-moss-green transition-colors">
                Enroll now on their site 
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;