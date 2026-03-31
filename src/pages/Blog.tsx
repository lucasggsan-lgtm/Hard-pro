import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Como escolher o rolamento ideal para o seu motor elétrico",
    excerpt: "Entenda as diferenças entre os tipos de rolamentos, folgas internas e vedações para garantir a máxima vida útil do seu equipamento industrial.",
    image: "https://images.unsplash.com/photo-1580983546591-9126607c3164?w=800&q=80",
    date: "15 Mar 2026",
    author: "Eng. Roberto Silva",
    category: "Manutenção"
  },
  {
    id: 2,
    title: "Guia definitivo de ferramentas a bateria: Vale a pena o investimento?",
    excerpt: "Comparamos o desempenho, custo-benefício e durabilidade das ferramentas a bateria modernas em relação às tradicionais com fio.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    date: "02 Mar 2026",
    author: "Carlos Mendes",
    category: "Ferramentas"
  },
  {
    id: 3,
    title: "A importância da classe de resistência em parafusos estruturais",
    excerpt: "Descubra por que usar o parafuso correto (8.8, 10.9 ou 12.9) é fundamental para a segurança e estabilidade de estruturas metálicas.",
    image: "https://images.unsplash.com/photo-1584646098378-0874589d79b1?w=800&q=80",
    date: "18 Fev 2026",
    author: "Ana Oliveira",
    category: "Fixadores"
  }
];

export function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Blog HardPro</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Dicas técnicas, guias de manutenção e novidades do setor industrial e de ferramentas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden bg-slate-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-600">{post.category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
              </div>
              <h2 className="mb-3 text-xl font-bold leading-tight text-slate-900 hover:text-blue-600">
                <a href="#">{post.title}</a>
              </h2>
              <p className="mb-6 flex-1 text-sm text-slate-600 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
                    <User className="h-4 w-4 text-slate-500" />
                  </div>
                  {post.author}
                </div>
                <a href="#" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
