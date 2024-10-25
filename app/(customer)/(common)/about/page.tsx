import React from 'react';
import { Heart, Target, Eye, ShieldCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto prose space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed">
          At Ras Healthcare, we believe that the foundation of a nation’s progress lies in good nutrition.
          For over a decade, we&apos;ve combined the latest research, technology, and high-quality ingredients to meet diverse nutritional needs.
          Our goal? To make healthy living simple, empowering you to live your best life and achieve your dreams.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-md shadow-md space-y-4">
        <div className="flex items-center">
          <Heart className="text-red-500 w-8 h-8 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold">Our Philosophy</h2>
            <p className="text-lg">
              With people living longer than ever, maintaining good mental and physical health is essential for a fulfilling life.
              We are committed to providing safe, high-quality products that support your wellness journey.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Eye className="text-blue-500 w-8 h-8 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="text-lg">
              We blend the power of nature with cutting-edge technology to enhance human life, empowering people to thrive and prosper.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Target className="text-green-500 w-8 h-8 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="text-lg">
              We are a consumer-focused, science-driven company. Through continuous innovation, we optimize our products to meet evolving needs.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <ShieldCheck className="text-yellow-500 w-8 h-8 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold">Quality Reassurance</h2>
            <p className="text-lg">
              We adhere to strict CGMP standards for every batch, ensuring transparency and safety. Our products contain exactly what is listed—no more, no less.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
