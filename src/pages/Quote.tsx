import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { formatCurrency } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Quote() {
  const { items, removeFromQuote, updateQuantity, clearQuote, totalItems } = useQuote();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      clearQuote();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">Orçamento Solicitado com Sucesso!</h1>
        <p className="mb-8 text-lg text-slate-600">
          Recebemos sua solicitação. Nossa equipe de vendas entrará em contato em até 2 horas úteis com as melhores condições para sua empresa.
        </p>
        <Link to="/loja">
          <Button size="lg" variant="primary">Continuar Navegando</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Solicitação de Orçamento B2B</h1>
        <p className="mt-2 text-slate-600">Preencha os dados abaixo para receber condições exclusivas para compras em volume.</p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
          <FileText className="mb-4 h-16 w-16 text-slate-400" />
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Sua lista de orçamento está vazia</h2>
          <p className="mb-8 text-slate-500">Adicione produtos à sua lista para solicitar um orçamento personalizado.</p>
          <Link to="/loja">
            <Button size="lg" variant="primary">Explorar Produtos</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-xl font-bold text-slate-900">Dados da Empresa</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome Completo *</label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Empresa (CNPJ opcional) *</label>
                    <Input id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="Nome da empresa" />
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">E-mail Corporativo *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="email@empresa.com.br" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefone / WhatsApp *</label>
                    <Input id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Observações adicionais</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Detalhes sobre prazo de entrega, condições de pagamento, etc."
                  ></textarea>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
                  <h4 className="mb-2 font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Vantagens B2B HardPro
                  </h4>
                  <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                    <li>Descontos progressivos por volume</li>
                    <li>Faturamento em até 30/60/90 dias (sujeito a análise)</li>
                    <li>Atendimento prioritário com especialista</li>
                  </ul>
                </div>

                <Button type="submit" size="lg" variant="primary" className="w-full text-lg">
                  Enviar Solicitação de Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-slate-900">Resumo dos Produtos ({totalItems})</h2>
              
              <div className="mb-6 flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-slate-100">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 line-clamp-2">{item.product.name}</h4>
                        <span className="text-xs text-slate-500">SKU: {item.product.sku}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center rounded border border-slate-300">
                          <button 
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                            className="px-2 py-1 text-slate-500 hover:text-slate-900"
                          >-</button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 text-slate-500 hover:text-slate-900"
                          >+</button>
                        </div>
                        <button 
                          onClick={() => removeFromQuote(item.product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500 text-center">
                  Os valores finais serão calculados com base no volume e condições comerciais aplicadas pela nossa equipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
