import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/60b764618fa2b6aaabff93e22bf7916cd9e377e9.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-red-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const links = {
    escola: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Por que Aquarela?', href: '#por-que-aquarela' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Contato', href: '#contato' },
    ],
    ensino: [
      { label: 'Berçário', href: '#bercario' },
      { label: 'Maternal II', href: '#maternal-ii' },
      { label: 'Maternal III', href: '#maternal-iii' },
      { label: 'Infantil I e II', href: '#infantil' },
    ],
  };

  const segments = [
    { label: 'Educação Infantil', href: '#segmentos' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Colégio Aquarela" 
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Há mais de 14 anos transformando vidas através da educação de qualidade, 
              com metodologia inovadora e ambiente acolhedor.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all ${social.color} hover:bg-gray-700`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links - Escola */}
          <div>
            <h3 className="text-lg text-white mb-4">Escola</h3>
            <ul className="space-y-3">
              {links.escola.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Ensino */}
          <div>
            <h3 className="text-lg text-white mb-4">Educação Infantil</h3>
            <ul className="space-y-3">
              {links.ensino.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5561991549109" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                  <div>
                    <p className="text-white">(61) 99154-9109</p>
                    <p>(61) 3041-4444</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:colegioaquarella@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
                  <span className="break-all">colegioaquarella@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                  <span>Brasília - DF</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Colégio Aquarela Brasília. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}