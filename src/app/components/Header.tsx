import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import logoImage from 'figma:asset/60b764618fa2b6aaabff93e22bf7916cd9e377e9.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnsinoOpen, setIsEnsinoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Por que Aquarela?', href: '#por-que-aquarela' },
    { 
      label: 'Ensino', 
      href: '#educacao-infantil',
      hasDropdown: true,
      submenu: [
        { label: 'Berçário', href: '#bercario' },
        { label: 'Maternal II', href: '#maternal-ii' },
        { label: 'Maternal III', href: '#maternal-iii' },
        { label: 'Infantil I e II', href: '#infantil' },
      ]
    },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappNumber = '5561991549109';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de fazer a matrícula no Colégio Aquarela Brasília.');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>(61) 99154-9109</span>
            </a>
            <a href="mailto:colegioaquarella@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>colegioaquarella@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Colégio Aquarela" 
                className="h-20 w-auto md:h-24"
              />
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              item.hasDropdown ? (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsEnsinoOpen(true)}
                  onMouseLeave={() => setIsEnsinoOpen(false)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </a>
                  {isEnsinoOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50">
                      {item.submenu?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setIsEnsinoOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow"
          >
            Matricule-se
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              item.hasDropdown ? (
                <div key={index}>
                  <button
                    onClick={() => setIsEnsinoOpen(!isEnsinoOpen)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isEnsinoOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isEnsinoOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.submenu?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsEnsinoOpen(false);
                          }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}