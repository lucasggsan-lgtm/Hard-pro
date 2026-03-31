import React from 'react';
import { Building2, Users, Target, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Sobre a HardPro</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Mais de 15 anos fornecendo peças industriais, ferramentas e componentes de hardware com excelência para todo o Brasil.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
            alt="Nossa estrutura" 
            className="rounded-2xl object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">Nossa História</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Fundada em 2011, a HardPro nasceu com o objetivo de simplificar o suprimento de peças e ferramentas para indústrias e profissionais autônomos. Começamos como uma pequena distribuidora local e hoje atendemos milhares de clientes em todo o território nacional.
          </p>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Nosso diferencial sempre foi o atendimento técnico especializado e a garantia de procedência de todos os itens que comercializamos.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h4 className="font-bold text-slate-900">+5.000m²</h4>
              <p className="text-sm text-slate-500">De centro de distribuição</p>
            </div>
            <div className="flex flex-col gap-2">
              <Users className="h-8 w-8 text-blue-600" />
              <h4 className="font-bold text-slate-900">+10.000</h4>
              <p className="text-sm text-slate-500">Clientes B2B ativos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-8 text-center border border-slate-200">
          <Target className="mx-auto mb-4 h-12 w-12 text-blue-600" />
          <h3 className="mb-4 text-xl font-bold text-slate-900">Missão</h3>
          <p className="text-slate-600">Fornecer soluções em hardware e peças industriais com agilidade, qualidade e preço justo, impulsionando a produtividade dos nossos clientes.</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-8 text-center border border-slate-200">
          <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-blue-600" />
          <h3 className="mb-4 text-xl font-bold text-slate-900">Visão</h3>
          <p className="text-slate-600">Ser a maior e mais confiável plataforma de suprimentos industriais e ferramentas da América Latina até 2030.</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-8 text-center border border-slate-200">
          <Users className="mx-auto mb-4 h-12 w-12 text-blue-600" />
          <h3 className="mb-4 text-xl font-bold text-slate-900">Valores</h3>
          <p className="text-slate-600">Transparência, foco no cliente, inovação contínua, respeito às pessoas e compromisso com a qualidade.</p>
        </div>
      </div>
    </div>
  );
}
