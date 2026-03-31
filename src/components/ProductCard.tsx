import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../lib/utils';
import { Button } from './ui/Button';
import { useCart } from '../context/CartContext';
import { useQuote } from '../context/QuoteContext';
import { ShoppingCart, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToQuote } = useQuote();

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link to={`/produto/${product.id}`} className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.stock < 50 && (
          <span className="absolute left-2 top-2 rounded bg-orange-500 px-2 py-1 text-xs font-bold text-white">
            Estoque Baixo
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-xs text-slate-500">{product.category} | SKU: {product.sku}</div>
        <Link to={`/produto/${product.id}`} className="mb-2 flex-1">
          <h3 className="font-medium text-slate-900 line-clamp-2 hover:text-blue-600">{product.name}</h3>
        </Link>
        <div className="mb-4">
          <span className="text-xl font-bold text-slate-900">{formatCurrency(product.price)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={() => addToCart(product, 1)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar ao Carrinho
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => addToQuote(product, 1)}
          >
            <FileText className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  );
}
