import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, lastUpdated, children }) => {
  return (
    <motion.div 
      className="pt-24 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-4xl">
        <h1 className="heading-1 mb-6 text-neutral-800">{title}</h1>
        <p className="text-neutral-600 mb-8">Last Updated: {lastUpdated}</p>
        <div className="prose prose-lg max-w-none [&>section]:mb-8 [&>section>p:first-of-type]:mb-6 [&>section>p]:mb-4 [&>section>ul]:mt-4 [&>section>ul]:mb-6 [&_strong]:text-neutral-800 [&_strong]:mb-4 [&_li]:mb-2">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default LegalPage;