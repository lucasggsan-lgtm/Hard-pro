import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { Button } from '../components/ui/Button';

export function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <ShoppingCart className="h-24 w-24 text-slate-300" />
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Seu carrinho está vazio</h1>
        <p className="mb-8 text-lg text-slate-600">
          Navegue por nossas categorias e encontre as melhores peças e ferramentas.
        </p>
        <Link to="/loja">
          <Button size="lg" variant="primary">Continuar Comprando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900">Meu Carrinho ({totalItems} itens)</h1>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="hidden grid-cols-12 border-b border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700 md:grid">
              <div className="col-span-6">Produto</div>
              <div className="col-span-3 text-center">Quantidade</div>
              <div className="col-span-2 text-right">Subtotal</div>
              <div className="col-span-1 text-center"></div>
            </div>

            <div className="divide-y divide-slate-200">
              {items.map((item) => (
                <div key={item.product.id} className="grid grid-cols-1 items-center gap-4 p-4 md:grid-cols-12">
                  <div className="col-span-1 flex items-center gap-4 md:col-span-6">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-white">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-contain p-2" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col">
                      <Link to={`/produto/${item.product.id}`} className="font-medium text-slate-900 hover:text-blue-600 line-clamp-2">
                        {item.product.name}
                      </Link>
                      <span className="mt-1 text-xs text-slate-500">SKU: {item.product.sku}</span>
                      <span className="mt-2 font-bold text-slate-900 md:hidden">{formatCurrency(item.product.price)}</span>
                    </div>
                  </div>

                  <div className="col-span-1 flex items-center justify-between md:col-span-3 md:justify-center">
                    <span className="text-sm font-medium text-slate-500 md:hidden">Quantidade:</span>
                    <div className="flex items-center rounded-md border border-slate-300 bg-white">
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 text-slate-500 hover:text-slate-900"
                      >-</button>
                      <span className="w-10 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, Math.min(item.product.stock, item.quantity + 1))}
                        className="px-3 py-1 text-slate-500 hover:text-slate-900"
                        disabled={item.quantity >= item.product.stock}
                      >+</button>
                    </div>
                  </div>

                  <div className="col-span-1 flex items-center justify-between md:col-span-2 md:justify-end">
                    <span className="text-sm font-medium text-slate-500 md:hidden">Subtotal:</span>
                    <span className="font-bold text-slate-900">{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>

                  <div className="col-span-1 flex justify-end md:col-span-1 md:justify-center">
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 md:text-transparent"
                      title="Remover item"
                    >
                      <Trash2 className="h-5 w-5 md:text-red-500" />
                      <span className="md:hidden">Remover</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 p-4">
              <Link to="/loja" className="text-sm font-medium text-blue-600 hover:underline">
                Continuar Comprando
              </Link>
              <button onClick={clearCart} className="text-sm font-medium text-slate-500 hover:text-red-600 hover:underline">
                Limpar Carrinho
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Resumo do Pedido</h2>
            
            {/* Free Shipping Progress */}
            <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="mb-2 text-sm font-medium text-blue-900">
                {totalPrice >= 500 
                  ? "🎉 Você ganhou Frete Grátis!" 
                  : `Faltam ${formatCurrency(500 - totalPrice)} para Frete Grátis`}
              </p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-blue-200">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${Math.min((totalPrice / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} itens)</span>
                <span className="font-medium text-slate-900">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete</span>
                <span className={totalPrice >= 500 ? "font-bold text-green-600" : "text-slate-900"}>
                  {totalPrice >= 500 ? "Grátis" : "A calcular"}
                </span>
              </div>
            </div>

            <div className="mb-6 border-t border-slate-200 pt-4">
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-900">Total</span>
                <span className="text-2xl font-extrabold text-slate-900">{formatCurrency(totalPrice)}</span>
              </div>
              <p className="mt-1 text-right text-xs text-green-600 font-medium">Em até 10x sem juros no cartão</p>
            </div>

            <Button size="lg" variant="primary" className="mb-4 w-full text-lg shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-transform">
              <ShieldCheck className="mr-2 h-5 w-5" />
              Finalizar Compra Segura
            </Button>

            <div className="flex items-center justify-center gap-4 text-slate-400">
              <img src="https://logospng.org/download/pix/logo-pix-icone-1024.png" alt="Pix" className="h-6 opacity-60 grayscale" />
              <img src="https://logospng.org/download/mastercard/logo-mastercard-2048.png" alt="Mastercard" className="h-6 opacity-60 grayscale" />
              <img src="https://logospng.org/download/visa/logo-visa-2048.png" alt="Visa" className="h-6 opacity-60 grayscale" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
