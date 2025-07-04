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

            <h4 className="font-bold text-lg mb-4 text-scratch-blue">12-Week Curriculum</h4>
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
        'Build Confidence/Familiarize with using a computer',
        'Understand basic coding in a fun way',
        'Encourage creativity and imagination',
        'Learn by playing and making things'
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
          topic: 'Exploration of Scratch',
          concepts: [
            'What is scratch?',
            'Meeting Cat Sprite',
            'Animating Sprite'
          ],
          project: 'Make your Sprite dance, jump, move around'
        },
        {
          week: 2,
          topic: 'Your World of Imagination',
          concepts: [
            'Add new Sprites (Child\'s choice, e.g. Unicorn, Horse, Dog, Dragon, etc)',
            'Choose a background (Child\'s choice, e.g. Forest, Space, etc)',
            'Use motion blocks to make characters fly, jump, hop, walk, dance',
            'Use "say" blocks to make them talk',
            'Learn "when green flag clicked" to start their created story'
          ],
          project: 'Create ANOTHER/YOUR OWN scene'
        },
        {
          week: 3,
          topic: 'Create a mini story',
          concepts: [
            'Add background and characters of choice',
            'Make them talk/interact with speech bubbles',
            'Use the green flag to start'
          ],
          project: 'Interactive story with multiple characters'
        },
        {
          week: 4,
          topic: 'Interactive Lesson',
          concepts: [
            'Use arrow keys or mouse to move around a Sprite',
            'Use "go to" blocks',
            'Add obstacles',
            'Learn how to start movement when the green flag is clicked'
          ],
          project: 'Interactive navigation game'
        },
        {
          week: 5,
          topic: 'Add Music or Sounds',
          concepts: [
            'Use sound blocks',
            'Add sound effects',
            'Change costumes with sounds'
          ],
          project: 'A mini project'
        },
        {
          week: 6,
          topic: 'Loops',
          concepts: [
            '"Forever" and "Repeat" Blocks',
            'Repeating movement (e.g. spinning, jumping, dancing, etc)',
            'Looping sounds',
            'Nesting blocks inside loops'
          ],
          project: 'A cat that repeats a dance move 5 times'
        },
        {
          week: 7,
          topic: 'Create a game (part 1)',
          concepts: [
            'Add two Sprites',
            'Use "touching blocks"',
            'Add a score (1 point each)'
          ],
          project: 'Create a game, one character required, and tally up your score'
        },
        {
          week: 8,
          topic: 'Create a game (part 2)',
          concepts: [
            'Interactive game',
            'Use an object and make it move',
            'Add a timer or more points'
          ],
          project: 'Create a game and catch the object'
        },
        {
          week: 9,
          topic: 'Let\'s Animate a Festival',
          concepts: [
            'Use bright colors and music',
            'Add fireworks background',
            'Use loops for spinning or dancing'
          ],
          project: 'Malaysia Day or Eid Celebration'
        },
        {
          week: 10,
          topic: 'Make your own Robot',
          concepts: [
            'Choose your robot',
            'Assign dialogues',
            'Use keys to move its arms'
          ],
          project: 'Interactive robot with dialogue and movement'
        },
        {
          week: 11,
          topic: 'Scratch Remix',
          concepts: [
            'Open a previous project and add new ideas',
            'Choose what to add (e.g. more Sprites, music, background, etc)',
            'Change the storyline or theme',
            'Learn how to save the new file / versions ("My Project 2.0)'
          ],
          project: 'Remix and enhance a previous project'
        },
        {
          week: 12,
          topic: 'Scratch Talent Show',
          concepts: [
            'Share one project',
            'Say 1-2 sentences about what they built',
            'Give feedback about the project to their peers',
            'Receive a small certificate'
          ],
          project: 'Invite parents to join if possible'
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
          topic: 'Welcome to Scratch',
          concepts: [
            'Introduction to Scratch interface',
            'Add and animate sprites',
            'Change costumes and backgrounds',
            'Use the Green Flag & Event blocks'
          ],
          project: 'Animate your name or favorite word with effects'
        },
        {
          week: 2,
          topic: 'Storytelling with Code',
          concepts: [
            'Use scenes, dialogue, and timing (say, wait)',
            'Switch backdrops for scene changes',
            'Character costume changes'
          ],
          project: 'Make a mini story (e.g. "The Lost Robot" or "Cat in the City")'
        },
        {
          week: 3,
          topic: 'Loops & Repetition',
          concepts: [
            'Learn repeat, forever, repeat until',
            'Use loops for movement and sound'
          ],
          project: 'Looping dance party or fireworks celebration'
        },
        {
          week: 4,
          topic: 'Keyboard Control',
          concepts: [
            'Use when key pressed, point in direction, and move blocks',
            'Move sprites with arrows'
          ],
          project: 'Create a simple maze or movement-based challenge'
        },
        {
          week: 5,
          topic: 'Let\'s Add Some Logic',
          concepts: [
            'Explore if and if-else statements',
            'Make things happen because of touching colors or sprites'
          ],
          project: 'Sprite responds when it collides with a wall or overlaps another sprite'
        },
        {
          week: 6,
          topic: 'Variables and Scores',
          concepts: [
            'Introduce variables (score, timer, lives)',
            'Update variables in gameplay'
          ],
          project: '"Catch the Falling Fruit" or a point-scoring platformer'
        },
        {
          week: 7,
          topic: 'Make It a Game!',
          concepts: [
            'Put controls, logic, and score together',
            'Implement a start screen and win/lose message'
          ],
          project: 'Design a complete mini-game such as "Avoid the Spikes" or "Jumping Ninja"'
        },
        {
          week: 8,
          topic: 'Broadcast & Multi-Screen Projects',
          concepts: [
            'Use broadcast to switch between scenes or levels',
            'Create intro screens, instructions, and endings'
          ],
          project: 'Create a story or game with 2–3 scenes or levels'
        },
        {
          week: 9,
          topic: 'Quizzes & Interactive Games',
          concepts: [
            'Develop Q&A type games',
            'Employ ask and answer blocks',
            'Monitor correct/incorrect answers using variables'
          ],
          project: 'Develop a quiz game: "Know Your Animals" or "Space Facts Challenge"'
        },
        {
          week: 10,
          topic: 'Sound, Music & Design',
          concepts: [
            'Add sound effects and background music',
            'Enhance sprite appearances using costume editor',
            'Create menus, assist buttons, and transitions'
          ],
          project: 'Refine your favorite project from past weeks'
        },
        {
          week: 11,
          topic: 'Final Project Build',
          concepts: [
            'Design and construct their own original concept',
            'Put together ideas: animation, games, or quiz'
          ],
          project: 'Make Your Own Game or Interactive Story'
        },
        {
          week: 12,
          topic: 'Scratch Showcase & Celebration',
          concepts: [
            'Showcase their final projects',
            'Exchange peer critiques',
            'Share progress with badges or certificates'
          ],
          project: 'Present Their Own Imaginative Creations!'
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
          topic: 'Scratch Refresher & Creative Kickoff',
          concepts: [
            'Explore the interface',
            'Review sprites, stage, blocks',
            'Animate a sprite with keyboard or click'
          ],
          project: 'Creative "Meet My Sprite" intro'
        },
        {
          week: 2,
          topic: 'Events and Sequences',
          concepts: [
            'Explore event-driven programming (green flag, clicks, broadcasts)',
            'Use sequencing to control sprite actions'
          ],
          project: 'Sprite Talent Show (dance, talk, sing on command)'
        },
        {
          week: 3,
          topic: 'Loops in Motion',
          concepts: [
            'Understand repeat and forever',
            'Loop sprite movements and costume changes'
          ],
          project: 'Dance party or fireworks scene with looping'
        },
        {
          week: 4,
          topic: 'Storytelling Through Code',
          concepts: [
            'Scenes, costumes, and sprite dialogue',
            'Storyboard planning',
            'Using wait, say, next costume, and background switch'
          ],
          project: 'Animated short story or comic strip'
        },
        {
          week: 5,
          topic: 'Keyboard Control & Motion',
          concepts: [
            'Use arrow keys or WASD to control movement',
            'Pointing directions, gliding, jumping'
          ],
          project: 'Maze Escape or Space Travel'
        },
        {
          week: 6,
          topic: 'Variables and Scoring Systems',
          concepts: [
            'Intro to variables',
            'Create a scoreboard',
            'Use variables for points, lives, or timers'
          ],
          project: 'Catch the Falling Objects or Obstacle Dodge'
        },
        {
          week: 7,
          topic: 'Conditions and Challenges',
          concepts: [
            'Use if and if-else blocks',
            'Add win/lose conditions',
            'Create reactions for touching colors or sprites'
          ],
          project: 'Platformer or "Avoid the Enemy" game'
        },
        {
          week: 8,
          topic: 'Cloning & Level Design',
          concepts: [
            'Use create clone of',
            'Change levels with broadcasts',
            'Design multi-screen games'
          ],
          project: 'Add a second level to any past project'
        },
        {
          week: 9,
          topic: 'Quiz & Interactive Games',
          concepts: [
            'Design a question/answer system',
            'Add feedback using say, think, or color changes',
            'Use timers and score updates'
          ],
          project: 'Build a "Guess the Flag" or "Math Quiz" game'
        },
        {
          week: 10,
          topic: 'Polish & Design Thinking',
          concepts: [
            'UI elements: buttons, instructions, and menus',
            'Sound design: adding background music and effects',
            'Debugging: fixing movement issues, timing bugs'
          ],
          project: 'Refine any past project into a polished version'
        },
        {
          week: 11,
          topic: 'Final Project Development',
          concepts: [
            'Choose: animation, game, quiz, or simulation',
            'Plan scenes, characters, interactions',
            'Build with guidance and creativity'
          ],
          project: 'Final Project'
        },
        {
          week: 12,
          topic: 'Final Showcase & Presentation',
          concepts: [
            'Present their finished game/story/quiz',
            'Receive feedback and certificates',
            'Share Scratch links or record demo videos'
          ],
          project: 'Final showcase and presentation'
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