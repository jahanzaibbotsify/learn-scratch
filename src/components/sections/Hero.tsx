import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-scratch-blue-light/10 to-scratch-orange-light/10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-1 mb-4 text-neutral-800">
              Master <span className="text-scratch-blue">Scratch</span> Programming with Personal Guidance
            </h1>
            <p className="subheading mb-8 text-neutral-600 max-w-2xl mx-auto md:mx-0">
              Expert-led, one-on-one coding lessons tailored to your child's pace and learning style
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a href="#contact" className="btn btn-primary">Start Free Trial</a>
              <a href="#curriculum" className="btn btn-outline">Explore Curriculum</a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-scratch-green text-white rounded-full p-1">
                  <Code size={16} />
                </div>
                <span className="font-bold">500+ Students Taught</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-scratch-orange text-white rounded-full p-1">
                  <Code size={16} />
                </div>
                <span className="font-bold">4.9/5 Parent Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-scratch-blue text-white rounded-full p-1">
                  <Code size={16} />
                </div>
                <span className="font-bold">Certified Instructors</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Interactive Animation */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                <div className="rounded-lg overflow-hidden bg-neutral-100 aspect-video">
                  <img 
                    src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Child learning to code with Scratch" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <motion.div 
                    className="h-4 rounded-full bg-scratch-blue-light"
                    animate={{ width: ["60%", "100%", "80%"] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  ></motion.div>
                  <motion.div 
                    className="h-4 rounded-full bg-scratch-orange-light"
                    animate={{ width: ["80%", "60%", "100%"] }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  ></motion.div>
                  <motion.div 
                    className="h-4 rounded-full bg-scratch-green-light"
                    animate={{ width: ["100%", "80%", "60%"] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  ></motion.div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-scratch-orange/10 rounded-full"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 bg-scratch-blue/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;