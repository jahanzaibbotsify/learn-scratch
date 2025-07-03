import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Code, PuzzleIcon, Trophy, Cpu, Star } from 'lucide-react';

interface WeeklyContentProps {
  week: number;
  topic: string;
  concepts: string[];
  project: string;
}

const WeeklyContent: React.FC<WeeklyContentProps> = ({ week, topic, concepts, project }) => {
  return (
    <div className="border-b border-neutral-200 last:border-0 py-4">
      <h4 className="font-bold text-lg mb-2 text-scratch-blue">Week {week}: {topic}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-2 text-neutral-700">Core Concepts:</h5>
          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            {concepts.map((concept, index) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-neutral-700">Project:</h5>
          <p className="text-neutral-600">{project}</p>
        </div>
      </div>
    </div>
  );
};

interface LevelProps {
  level: string;
  title: string;
  description: string;
  learningFocus: string[];
  teachingStyle: string[];
  weeklyContent: {
    week: number;
    topic: string;
    concepts: string[];
    project: string;
  }[];
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color: string;
}

const Level: React.FC<LevelProps> = ({ 
  level, 
  title, 
  description, 
  learningFocus,
  teachingStyle,
  weeklyContent,
  icon, 
  active, 
  onClick,
  color
}) => {
  return (
    <div className="mb-6">
      <button 
        className={`w-full text-left p-4 rounded-lg flex items-center gap-4 transition-all ${
          active 
            ? `bg-${color} text-white shadow-md` 
            : 'bg-white border border-neutral-200 hover:border-scratch-blue'
        }`}
        onClick={onClick}
      >
        <div className={`p-2 rounded-full ${active ? 'bg-white/20' : `bg-${color}/10 text-${color}`}`}>
          {icon}
        </div>
        <div>
          <p className="font-bold">{level}</p>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
      </button>
      
      {active && (
        <motion.div 
          className="mt-4 p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-4 text-scratch-blue">Overview</h4>
            <p className="text-neutral-600 mb-6">{description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-2 text-scratch-orange">Learning Focus</h4>
                <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                  {learningFocus.map((focus, index) => (
                    <li key={index}>{focus}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-scratch-green">Teaching Style</h4>
                <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                  {teachingStyle.map((style, index) => (
                    <li key={index}>{style}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h4 className="font-bold text-lg mb-4 text-scratch-blue">6-Week Curriculum</h4>
            <div className="space-y-6">
              {weeklyContent.map((week) => (
                <WeeklyContent key={week.week} {...week} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const Curriculum: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState('beginner');
  
  const levels = [
    {
      id: 'beginner',
      level: 'Ages 7-9',
      title: 'Young Creators',
      description: 'A fun, engaging introduction to coding through storytelling and simple games, perfect for young minds beginning their coding journey.',
      learningFocus: [
        'Building confidence with computers',
        'Understanding basic coding concepts',
        'Developing creative thinking skills',
        'Learning through play and exploration',
        'Building digital literacy foundations'
      ],
      teachingStyle: [
        'Visual and interactive learning',
        'Story-based instruction',
        'Frequent positive reinforcement',
        'Short, focused activities',
        'Hands-on practice with guidance'
      ],
      weeklyContent: [
        {
          week: 1,
          topic: 'Introduction to Scratch',
          concepts: [
            'Understanding the Scratch interface',
            'Basic motion blocks',
            'Simple sprite control',
            'Creating first animations'
          ],
          project: 'Create an animated name with Malaysian elements'
        },
        {
          week: 2,
          topic: 'Storytelling Basics',
          concepts: [
            'Adding backgrounds and sprites',
            'Basic costume changes',
            'Simple dialogue',
            'Event blocks (green flag, clicks)'
          ],
          project: 'Interactive Malaysian folktale'
        },
        {
          week: 3,
          topic: 'Simple Animations',
          concepts: [
            'Loop blocks',
            'Basic timing',
            'Multiple sprite coordination',
            'Sound effects'
          ],
          project: 'Animated Malaysian festival celebration'
        },
        {
          week: 4,
          topic: 'Basic Game Mechanics',
          concepts: [
            'Mouse control',
            'Simple collision detection',
            'Score variables',
            'Win/lose conditions'
          ],
          project: 'Catch the Durian game'
        },
        {
          week: 5,
          topic: 'Music and Art',
          concepts: [
            'Sound blocks',
            'Drawing tools',
            'Costume editor',
            'Rhythm and timing'
          ],
          project: 'Malaysian musical instrument simulator'
        },
        {
          week: 6,
          topic: 'Final Project',
          concepts: [
            'Project planning',
            'Combining learned concepts',
            'Basic debugging',
            'Project presentation'
          ],
          project: 'Interactive Malaysian cultural showcase'
        }
      ],
      icon: <Code size={24} />,
      color: 'scratch-blue'
    },
    {
      id: 'intermediate',
      level: 'Ages 10-12',
      title: 'Junior Coders',
      description: 'Building on basic concepts to create more complex games and interactive stories while introducing fundamental programming principles.',
      learningFocus: [
        'Understanding programming logic',
        'Problem-solving strategies',
        'Project planning skills',
        'Basic game design principles',
        'Collaborative learning'
      ],
      teachingStyle: [
        'Project-based learning',
        'Guided discovery',
        'Peer learning opportunities',
        'Interactive demonstrations',
        'Regular code review practice'
      ],
      weeklyContent: [
        {
          week: 1,
          topic: 'Advanced Motion',
          concepts: [
            'Coordinate system',
            'Rotation styles',
            'Custom movement patterns',
            'Physics basics'
          ],
          project: 'Malaysian sports simulation game'
        },
        {
          week: 2,
          topic: 'Variables & Scoring',
          concepts: [
            'Creating variables',
            'Score tracking',
            'Health systems',
            'High score storage'
          ],
          project: 'Malaysian food collecting game'
        },
        {
          week: 3,
          topic: 'Conditional Logic',
          concepts: [
            'If-then statements',
            'Multiple conditions',
            'Boolean logic',
            'State management'
          ],
          project: 'Malaysian trivia quiz game'
        },
        {
          week: 4,
          topic: 'Lists & Data',
          concepts: [
            'Creating lists',
            'Data storage',
            'List operations',
            'Dynamic content'
          ],
          project: 'Malaysian state and capital matcher'
        },
        {
          week: 5,
          topic: 'Custom Blocks',
          concepts: [
            'Function creation',
            'Parameters',
            'Code organization',
            'Reusable code'
          ],
          project: 'Platform game with Malaysian landmarks'
        },
        {
          week: 6,
          topic: 'Final Project',
          concepts: [
            'Advanced game mechanics',
            'Multiple levels',
            'Sound effects',
            'Project optimization'
          ],
          project: 'Malaysian cultural adventure game'
        }
      ],
      icon: <PuzzleIcon size={24} />,
      color: 'scratch-orange'
    },
    {
      id: 'advanced',
      level: 'Ages 13-15',
      title: 'Young Developers',
      description: 'Advanced programming concepts and complex project development, preparing students for text-based programming languages.',
      learningFocus: [
        'Advanced programming concepts',
        'Complex problem-solving',
        'Project architecture',
        'Code optimization',
        'Independent learning skills'
      ],
      teachingStyle: [
        'Independent project work',
        'Problem-based learning',
        'Code analysis sessions',
        'Debugging workshops',
        'Peer code reviews'
      ],
      weeklyContent: [
        {
          week: 1,
          topic: 'Advanced Game Mechanics',
          concepts: [
            'Complex collision detection',
            'Physics engine basics',
            'Smooth animations',
            'Game state management'
          ],
          project: 'Malaysian traditional games modernized'
        },
        {
          week: 2,
          topic: 'Advanced Data Structures',
          concepts: [
            'Multi-dimensional lists',
            'Complex data management',
            'Data persistence',
            'Dynamic content generation'
          ],
          project: 'Malaysian biodiversity database'
        },
        {
          week: 3,
          topic: 'Message Broadcasting',
          concepts: [
            'Advanced event handling',
            'Multiple broadcast channels',
            'State synchronization',
            'Event-driven programming'
          ],
          project: 'Multi-player Malaysian card game'
        },
        {
          week: 4,
          topic: 'Cloning & Parallel Execution',
          concepts: [
            'Sprite cloning',
            'Memory management',
            'Parallel processes',
            'Performance optimization'
          ],
          project: 'Malaysian night market simulator'
        },
        {
          week: 5,
          topic: 'AI & Algorithms',
          concepts: [
            'Basic AI concepts',
            'Pathfinding',
            'Decision trees',
            'Game AI implementation'
          ],
          project: 'Malaysian wildlife simulation'
        },
        {
          week: 6,
          topic: 'Final Project',
          concepts: [
            'Project architecture',
            'Advanced features',
            'Testing and debugging',
            'Performance optimization'
          ],
          project: 'Complete Malaysian-themed game'
        }
      ],
      icon: <Trophy size={24} />,
      color: 'scratch-green'
    }
  ];

  return (
    <section id="curriculum" className="section-spacing bg-neutral-50">
      <div className="container">
        <SectionHeading 
          title="Our Curriculum"
          subtitle="Age-appropriate learning paths designed for Malaysian students"
          center
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {levels.map((level) => (
            <Level 
              key={level.id}
              level={level.level}
              title={level.title}
              description={level.description}
              learningFocus={level.learningFocus}
              teachingStyle={level.teachingStyle}
              weeklyContent={level.weeklyContent}
              icon={level.icon}
              active={activeLevel === level.id}
              onClick={() => setActiveLevel(level.id)}
              color={level.color}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://docs.google.com/forms/d/1devAZfoIO6dtkP6B4S9wTkH0uR5txwkMiJ-jImxzKUY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;