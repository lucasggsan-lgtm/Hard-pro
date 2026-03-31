import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, FileText, CheckCircle, Truck, ShieldCheck, Star, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { useCart } from '../context/CartContext';
import { useQuote } from '../context/QuoteContext';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToQuote } = useQuote();

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-3xl font-bold text-slate-900">Produto não encontrado</h1>
        <Link to="/loja">
          <Button>Voltar para a Loja</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => product.relatedIds.includes(p.id));

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setQuantity(prev => (prev < product.stock ? prev + 1 : prev));
    } else {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex text-sm text-slate-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/loja" className="hover:text-blue-600">Loja</Link>
        <span className="mx-2">/</span>
        <Link to={`/loja?categoria=${product.category.toLowerCase()}`} className="hover:text-blue-600">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{product.name}</span>
      </nav>

      {/* Product Main Info */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-contain p-8"
              referrerPolicy="no-referrer"
            />
            {product.stock < 50 && (
              <span className="absolute left-4 top-4 rounded bg-orange-500 px-3 py-1 text-sm font-bold text-white">
                Últimas unidades
              </span>
            )}
          </div>
          {/* Thumbnails placeholder */}
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`aspect-square w-24 cursor-pointer overflow-hidden rounded-lg border ${i === 1 ? 'border-blue-600' : 'border-slate-200'} bg-white`}>
                <img src={product.image} alt="" className="h-full w-full object-contain p-2" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm text-slate-500">SKU: {product.sku}</div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{product.name}</h1>
          
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">{product.reviews} avaliações</span>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-extrabold text-slate-900">{formatCurrency(product.price)}</span>
            <p className="mt-1 text-sm text-slate-500">Preço unitário. Descontos aplicáveis para compras em volume.</p>
          </div>

          <div className="mb-8 rounded-lg bg-slate-50 p-4 border border-slate-200">
            <div className="mb-4 flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle className="h-5 w-5" />
              Em estoque ({product.stock} unidades)
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-700">Quantidade:</span>
              <div className="flex items-center rounded-md border border-slate-300 bg-white">
                <button onClick={() => handleQuantityChange('dec')} className="px-3 py-2 text-slate-500 hover:text-slate-900 disabled:opacity-50" disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => handleQuantityChange('inc')} className="px-3 py-2 text-slate-500 hover:text-slate-900 disabled:opacity-50" disabled={quantity >= product.stock}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="primary" 
              className="flex-1 text-lg"
              onClick={() => addToCart(product, quantity)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 text-lg border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => addToQuote(product, quantity)}
            >
              <FileText className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 rounded-lg border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-slate-400" />
              <div>
                <h4 className="font-medium text-slate-900">Envio Rápido</h4>
                <p className="text-xs text-slate-500">Despacho em até 24h</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-slate-400" />
              <div>
                <h4 className="font-medium text-slate-900">Garantia</h4>
                <p className="text-xs text-slate-500">1 ano de fábrica</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Specs Tabs */}
      <div className="mt-16 border-t border-slate-200 pt-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Descrição do Produto</h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-6">{product.description}</p>
              <h3 className="mb-4 text-lg font-bold text-slate-900">Principais Características:</h3>
              <ul className="list-inside list-disc space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Especificações Técnicas</h2>
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                      <th className="border-b border-slate-200 px-4 py-3 font-medium text-slate-900 w-1/2">{key}</th>
                      <td className="border-b border-slate-200 px-4 py-3 text-slate-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 border-t border-slate-200 pt-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
