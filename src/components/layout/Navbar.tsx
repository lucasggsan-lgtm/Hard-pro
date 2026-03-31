import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, FileText, Menu, X, Search, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useQuote } from '../../context/QuoteContext';
import { Button } from '../ui/Button';

export function Navbar() {
  const { totalItems: cartItems } = useCart();
  const { totalItems: quoteItems } = useQuote();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/loja?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      {/* Top bar */}
      <div className="hidden bg-slate-900 px-4 py-1 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>Especialistas em peças industriais e hardware B2B/B2C</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> (11) 4002-8922</span>
            <Link to="/contato" className="hover:text-white">Suporte</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 font-bold text-white">HP</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">HardPro</span>
          </Link>
        </div>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden max-w-md flex-1 items-center md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar por nome, SKU ou categoria..."
              className="w-full rounded-md border border-slate-300 bg-slate-50 py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 flex h-full items-center px-3 text-slate-400 hover:text-blue-600">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4">
          <Link to="/orcamento" className="relative flex items-center gap-1 text-slate-700 hover:text-blue-600">
            <div className="relative">
              <FileText className="h-6 w-6" />
              {quoteItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  {quoteItems}
                </span>
              )}
            </div>
            <span className="hidden text-sm font-medium md:block">Orçamentos</span>
          </Link>
          <Link to="/carrinho" className="relative flex items-center gap-1 text-slate-700 hover:text-blue-600">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {cartItems}
                </span>
              )}
            </div>
            <span className="hidden text-sm font-medium md:block">Carrinho</span>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden border-t border-slate-100 bg-white md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3 text-sm font-medium text-slate-700">
          <Link to="/loja" className="hover:text-blue-600">Todos os Produtos</Link>
          <Link to="/loja?categoria=ferramentas" className="hover:text-blue-600">Ferramentas</Link>
          <Link to="/loja?categoria=eletrica" className="hover:text-blue-600">Elétrica</Link>
          <Link to="/loja?categoria=fixadores" className="hover:text-blue-600">Fixadores</Link>
          <Link to="/loja?categoria=pecas-industriais" className="hover:text-blue-600">Peças Industriais</Link>
          <Link to="/sobre" className="hover:text-blue-600">Sobre Nós</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-slate-200 bg-white p-4 shadow-lg md:hidden">
          <form onSubmit={handleSearch} className="mb-4 flex items-center">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full rounded-md border border-slate-300 bg-slate-50 py-2 pl-4 pr-10 text-sm focus:border-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="-ml-8 text-slate-400">
              <Search className="h-4 w-4" />
            </button>
          </form>
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            <Link to="/loja" onClick={() => setIsMenuOpen(false)}>Todos os Produtos</Link>
            <Link to="/loja?categoria=ferramentas" onClick={() => setIsMenuOpen(false)}>Ferramentas</Link>
            <Link to="/loja?categoria=eletrica" onClick={() => setIsMenuOpen(false)}>Elétrica</Link>
            <Link to="/loja?categoria=fixadores" onClick={() => setIsMenuOpen(false)}>Fixadores</Link>
            <Link to="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
