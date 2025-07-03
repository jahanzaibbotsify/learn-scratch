import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  relation: string;
  rating: number;
  image: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, relation, rating, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold text-neutral-800">{name}</p>
            <p className="text-sm text-neutral-500">{relation}</p>
          </div>
        </div>
        <div className="mb-4 text-scratch-orange">
          <Quote size={24} />
        </div>
        <p className="text-neutral-700 mb-4 flex-grow">{quote}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-scratch-orange fill-scratch-orange" : "text-neutral-300"}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

interface ProjectCardProps {
  title: string;
  studentName: string;
  age: number;
  description: string;
  projectUrl: string;
  image: string;
  skills: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  studentName, 
  age, 
  description, 
  projectUrl, 
  image,
  skills,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="h-48 overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-xl mb-1 text-scratch-blue">{title}</h3>
        <p className="text-scratch-orange font-semibold text-sm mb-3">By {studentName}, Age {age}</p>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-scratch-blue-light/20 text-scratch-blue"
            >
              {skill}
            </span>
          ))}
        </div>
        <a 
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-scratch-blue hover:underline mt-auto"
        >
          View Project on Scratch →
        </a>
      </Card>
    </motion.div>
  );
};

const SuccessStories: React.FC = () => {
  const projects = [
    {
      title: "The Lost Cat Adventure",
      studentName: "NaleliNtee",
      age: 8,
      description: "A heartwarming interactive story where players help guide a lost cat through various environments back to its home. Features engaging animations and simple controls perfect for young creators.",
      projectUrl: "https://scratch.mit.edu/projects/1173291066",
      image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg",
      skills: [
        "Story Development",
        "Character Animation",
        "Event Handling",
        "Sound Effects"
      ]
    },
    {
      title: "Echo Runner",
      studentName: "TheAwesomeKid952",
      age: 11,
      description: "An exciting platformer where sound waves help navigate through neon-lit environments. Players use echo mechanics to solve puzzles and avoid obstacles.",
      projectUrl: "https://scratch.mit.edu/projects/561148598",
      image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg",
      skills: [
        "Game Physics",
        "Sound Integration",
        "Level Design",
        "Score System"
      ]
    },
    {
      title: "Time Travel Simulator V:1.0",
      studentName: "CommonSpence",
      age: 14,
      description: "An ambitious project where players navigate through different time periods, solving puzzles and learning about historical events. Features multiple endings and dynamic storytelling.",
      projectUrl: "https://scratch.mit.edu/projects/244438912",
      image: "https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg",
      skills: [
        "Complex Logic",
        "Multiple Timelines",
        "Historical Research",
        "Branching Narratives"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The creative approach to teaching coding has sparked my daughter's imagination. She's now creating her own interactive stories!",
      name: "Lim Wei Ling",
      relation: "Parent of Jun Jie (9)",
      rating: 5,
      image: "/lim.jpg"
    },
    {
      quote: "The project-based learning really helps concepts stick. My son is proud to show off his games to everyone.",
      name: "Siva Krishnan",
      relation: "Parent of Arjun (12)",
      rating: 5,
      image: "/siva.jpeg"
    },
    {
      quote: "The structured progression from basic to advanced concepts has helped my child build confidence in programming.",
      name: "Faridah Rahman",
      relation: "Parent of Aisyah (14)",
      rating: 5,
      image: "/fardiah.jpeg"
    }
  ];

  return (
    <section id="success-stories" className="section-spacing">
      <div className="container">
        <SectionHeading 
          title="Student Success Stories"
          subtitle="See what our students have created and what parents are saying"
          center
        />
        
        <div className="mt-12 mb-16">
          <h3 className="heading-3 mb-8 text-center text-scratch-blue">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="heading-3 mb-8 text-center text-scratch-orange">Parent Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/601123656152?text=Hi,%20I'm%20interested%20in%20the%20Scratch%20programming%20classes%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get in touch with us on Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;