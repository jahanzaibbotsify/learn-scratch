import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const features = [
    "12 weekly sessions (40 minutes each)",
    "Personalized one-on-one instruction",
    "Age-appropriate curriculum (7-15 years)",
    "Project-based learning approach",
    "Progress updates via WhatsApp",
    "Access to project materials",
    "Certificate of completion",
    "100% satisfaction guarantee"
  ];

  return (
    <section id="pricing" className="section-spacing bg-neutral-50">
      <div className="container">
        <SectionHeading 
          title="Program Package"
          subtitle="Affordable coding education for your child"
          center
        />
        
        <div className="mt-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="text-center">
              <h3 className="heading-3 mb-2 text-scratch-blue">Complete Learning Package</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">RM 600</span>
                <span className="text-neutral-500"> / 3 months</span>
              </div>
              <p className="text-neutral-600 mb-8">
                Comprehensive coding education tailored to your child's age and skill level
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <CheckCircle2 size={20} className="text-scratch-green flex-shrink-0" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.google.com/forms/d/1devAZfoIO6dtkP6B4S9wTkH0uR5txwkMiJ-jImxzKUY"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn btn-primary w-full"
                >
                  Book Free Trial
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3 text-center text-scratch-blue">100% Satisfaction Guarantee</h3>
          <p className="text-center text-neutral-600">
            If you're not completely satisfied after your first lesson, we'll refund your payment in full. 
            Your child's learning journey is our top priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;