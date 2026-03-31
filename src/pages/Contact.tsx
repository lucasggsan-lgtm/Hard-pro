import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Fale Conosco</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Nossa equipe de especialistas está pronta para ajudar com dúvidas técnicas, orçamentos ou informações sobre pedidos.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Informações de Contato</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefone / WhatsApp</h4>
                  <p className="text-slate-600">(11) 4002-8922</p>
                  <p className="text-sm text-slate-500">Vendas e Suporte Técnico</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600">contato@hardpro.com.br</p>
                  <p className="text-sm text-slate-500">orcamentos@hardpro.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Endereço (Matriz)</h4>
                  <p className="text-slate-600">Av. Industrial, 1000 - Galpão 4</p>
                  <p className="text-slate-600">Distrito Industrial, São Paulo - SP</p>
                  <p className="text-sm text-slate-500">CEP: 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                  <p className="text-slate-600">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-slate-600">Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Envie uma Mensagem</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome Completo</label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">E-mail</label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Assunto</label>
              <select id="subject" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Dúvida Técnica</option>
                <option>Informação sobre Pedido</option>
                <option>Sugestão / Reclamação</option>
                <option>Outros</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensagem</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            
            <Button type="submit" size="lg" variant="primary" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
