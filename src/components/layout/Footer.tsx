import React from 'react';
import { Code, Apple as WhatsApp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={32} className="text-scratch-orange" />
              <span className="font-bold text-xl">Learn Scratch</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Personalized coding education for Malaysian children aged 7-15. 
              One-on-one Scratch programming instruction tailored to your child's pace.
            </p>
            <a 
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-scratch-orange transition-colors"
            >
              <WhatsApp size={20} />
              <span>WhatsApp: +60 11-2365 6152</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#curriculum" className="text-neutral-300 hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#success-stories" className="text-neutral-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal Information</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-neutral-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Learn Scratch. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm">
            SSM Registration No: 202401234567 (MY)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;