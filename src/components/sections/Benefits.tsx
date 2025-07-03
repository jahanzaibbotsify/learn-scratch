import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { UserPlus, Zap, BookOpen, Calendar } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="card hover:border-scratch-blue hover:border-2 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-scratch-blue-light/20 text-scratch-blue">
        {icon}
      </div>
      <h3 className="heading-3 mb-2 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <UserPlus size={24} />,
      title: "Personalized Learning Path",
      description: "Customized curriculum that adapts to your child's skill level, interests, and learning pace."
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Feedback",
      description: "Immediate guidance from expert instructors to reinforce concepts and correct misconceptions."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Project-based Curriculum",
      description: "Engaging, hands-on projects that make learning fun while building practical coding skills."
    },
    {
      icon: <Calendar size={24} />,
      title: "Flexible Scheduling",
      description: "Convenient lesson times that fit your family's busy schedule with no long-term commitments."
    }
  ];

  return (
    <section id="benefits" className="section-spacing bg-neutral-50">
      <div className="container">
        <SectionHeading 
          title="Why Choose Our Approach"
          subtitle="We believe in personalized education that meets each child where they are"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;