import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, delay = 0 }) => {
  return (
    <motion.div 
      className="border-b border-neutral-200 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <button 
        className="w-full text-left py-4 pr-8 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="font-bold text-lg text-neutral-800">{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <motion.div 
          className="pb-4 text-neutral-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "Our Scratch programming courses are designed for children aged 7-15. We adjust our teaching approach based on age, keeping it fun and engaging for younger kids while providing more challenging content for older ones."
    },
    {
      question: "Do we need any special equipment for the lessons?",
      answer: "A computer or laptop with a stable internet connection is all you need. Scratch runs in a web browser, so there's no need to install any special software. We'll provide all learning materials and project files."
    },
    {
      question: "How long are the lessons?",
      answer: "Our standard lessons are 60 minutes long, which we've found is the optimal time for maintaining focus while making meaningful progress. We also offer 30-minute sessions for younger children or those just starting out."
    },
    {
      question: "Can my child continue working on projects between lessons?",
      answer: "Absolutely! We encourage students to practice between lessons. All projects are saved to the student's Scratch account, allowing them to access and work on their creations anytime. Our instructors also provide optional homework challenges."
    },
    {
      question: "What if we need to reschedule a lesson?",
      answer: "We understand that schedules can change. You can reschedule a lesson up to 24 hours in advance without any penalty. Just let us know through your parent dashboard or by contacting your instructor directly."
    },
    {
      question: "How do you track my child's progress?",
      answer: "We provide detailed progress reports after each lesson, highlighting accomplishments, areas for improvement, and next steps. Premium plan subscribers receive comprehensive monthly progress evaluations with personalized learning recommendations."
    },
    {
      question: "Can my child learn with friends in a group?",
      answer: "While we specialize in one-on-one instruction, we do offer paired or small group sessions (up to 3 children) at a discounted rate per child. This works well for siblings or friends of similar age and skill level."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing">
      <div className="container">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our Scratch programming lessons"
          center
        />
        
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-neutral-600">Still have questions?</p>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;