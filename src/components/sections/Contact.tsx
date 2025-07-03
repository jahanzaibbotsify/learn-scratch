import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-spacing bg-neutral-50">
      <div className="container">
        <SectionHeading 
          title="Get Started Today"
          subtitle="Book a free trial lesson and start your child's coding journey"
          center
        />
        
        <div className="mt-12 max-w-xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-scratch-blue-light/20 flex items-center justify-center text-scratch-blue mx-auto mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
            <p className="text-neutral-600 mb-6">
              Book your child's free trial lesson and begin their exciting coding journey with us.
            </p>
            <a 
              href="https://docs.google.com/forms/d/1devAZfoIO6dtkP6B4S9wTkH0uR5txwkMiJ-jImxzKUY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Free Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;