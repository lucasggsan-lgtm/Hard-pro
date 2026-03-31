import React, { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-900"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="bg-blue-600 p-8 text-center text-white">
          <FileText className="mx-auto mb-4 h-12 w-12 opacity-80" />
          <h2 className="mb-2 text-2xl font-bold">Esperando por um desconto?</h2>
          <p className="text-blue-100">Não saia ainda! Temos condições especiais para você.</p>
        </div>
        
        <div className="p-8 text-center">
          <p className="mb-6 text-lg text-slate-600">
            Solicite um orçamento agora e garanta até <strong className="text-slate-900">15% de desconto</strong> na sua primeira compra corporativa.
          </p>
          
          <div className="flex flex-col gap-3">
            <Link to="/orcamento" onClick={() => setIsVisible(false)}>
              <Button size="lg" variant="primary" className="w-full text-lg">
                Solicitar Orçamento com Desconto
              </Button>
            </Link>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-sm font-medium text-slate-500 hover:underline"
            >
              Não, obrigado. Quero continuar navegando.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
