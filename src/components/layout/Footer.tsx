import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 font-bold text-white">HP</div>
              <span className="text-xl font-bold tracking-tight text-white">HardPro</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Sua parceira confiável em peças industriais, ferramentas e componentes de hardware. Atendemos B2B e B2C com excelência e rapidez.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Links Rápidos</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/loja" className="hover:text-blue-400">Todos os Produtos</Link></li>
              <li><Link to="/orcamento" className="hover:text-blue-400">Solicitar Orçamento</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-400">Sobre a Empresa</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog e Notícias</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Categorias</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/loja?categoria=ferramentas" className="hover:text-blue-400">Ferramentas</Link></li>
              <li><Link to="/loja?categoria=eletrica" className="hover:text-blue-400">Elétrica</Link></li>
              <li><Link to="/loja?categoria=fixadores" className="hover:text-blue-400">Fixadores</Link></li>
              <li><Link to="/loja?categoria=pecas-industriais" className="hover:text-blue-400">Peças Industriais</Link></li>
              <li><Link to="/loja?categoria=mecanica" className="hover:text-blue-400">Mecânica</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">Contato</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <span>Av. Industrial, 1000 - Galpão 4<br />São Paulo, SP - 01234-567</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                <span>(11) 4002-8922</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                <span>contato@hardpro.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} HardPro Peças Industriais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
