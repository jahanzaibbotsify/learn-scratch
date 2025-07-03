import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import Button from '../common/Button';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Header background change on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element && location.pathname === '/') {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.pathname === '/' && activeSection === path.substring(1);
    }
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Curriculum', path: '/#curriculum' },
    { name: 'Success Stories', path: '/#success-stories' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Code size={32} className="text-scratch-orange" />
          <span className="font-bold text-xl md:text-2xl text-scratch-blue">Learn Scratch</span>
        </Link>
      

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => link.path.includes('#') ? handleNavClick(e, link.path.substring(2)) : undefined}
              className={`font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-scratch-blue'
                  : 'text-neutral-600 hover:text-scratch-blue'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="hidden md:flex items-center gap-2">
            <a 
              href="https://docs.google.com/forms/d/1devAZfoIO6dtkP6B4S9wTkH0uR5txwkMiJ-jImxzKUY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Your Child's Free Trial
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-scratch-blue" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {mainNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.includes('#')) {
                    handleNavClick(e, link.path.substring(2));
                  }
                  setIsMenuOpen(false);
                }}
                className={`font-semibold py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-scratch-blue'
                    : 'text-neutral-600 hover:text-scratch-blue'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2">
              <a 
                href="https://docs.google.com/forms/d/1devAZfoIO6dtkP6B4S9wTkH0uR5txwkMiJ-jImxzKUY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your Child's Free Trial
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;