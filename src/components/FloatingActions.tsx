import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, FileText } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export function FloatingActions() {
  const { totalItems } = useQuote();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {totalItems > 0 && (
        <Link
          to="/orcamento"
          className="flex h-14 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-600"
        >
          <FileText className="h-5 w-5" />
          <span className="hidden md:inline">Finalizar Orçamento</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-orange-600">
            {totalItems}
          </span>
        </Link>
      )}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center self-end rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
