import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { CalendarCheck, Monitor, BookOpen, Award } from 'lucide-react';

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description, isLast = false }) => {
  return (
    <div className="relative">
      <motion.div 
        className="card flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-scratch-blue flex items-center justify-center text-white font-bold text-xl">
          {icon}
        </div>
        <div>
          <h3 className="heading-3 mb-2 text-center md:text-left">
            <span className="text-scratch-blue mr-2">{number}.</span> {title}
          </h3>
          <p className="text-neutral-600 text-center md:text-left">{description}</p>
        </div>
      </motion.div>
      
      {!isLast && (
        <div className="hidden md:block absolute top-24 bottom-0 left-8 w-[2px] bg-scratch-blue-light z-0"></div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <CalendarCheck size={24} />,
      title: "Book a Free Trial",
      description: "Schedule a convenient time for your child's first free lesson with one of our expert Scratch instructors."
    },
    {
      icon: <Monitor size={24} />,
      title: "Personalized Evaluation",
      description: "Our instructor assesses your child's current skills and interests to create a tailored learning plan."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Regular Sessions",
      description: "Weekly one-on-one lessons with consistent feedback and support to ensure steady progress."
    },
    {
      icon: <Award size={24} />,
      title: "Final Project + Completion Certificate",
      description: "Watch your child build confidence as they complete increasingly complex projects and gain new skills."
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container">
        <SectionHeading 
          title="How It Works"
          subtitle="A simple process to get your child started on their coding journey"
          center
        />
        
        <div className="mt-12 space-y-12 md:space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">Book Your Free Trial Today</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;