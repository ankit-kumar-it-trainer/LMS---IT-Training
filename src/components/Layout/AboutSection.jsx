import { AcademicCapIcon } from '@heroicons/react/24/solid';

const AboutSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0 mb-8 md:mb-0">
        <div className="bg-blue-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mx-auto">
          <AcademicCapIcon className="h-20 w-20 text-blue-600" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">About Ankit Kumar – IT Trainer</h2>
        <p className="text-gray-700 text-lg">
          Ankit Kumar is passionate about making IT education accessible and practical. With years of experience in the industry and a love for teaching, Ankit curates the best YouTube video lessons to help you master new skills at your own pace. The mission is to empower learners with real-world knowledge and hands-on guidance.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
