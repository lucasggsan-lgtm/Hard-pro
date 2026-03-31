import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, Wrench, Zap, Settings, Nut, Cog, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* 1. HERO */}
      <section className="relative flex min-h-[600px] items-center bg-slate-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" 
            alt="Fábrica industrial" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
              Soluções B2B e B2C
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Peças e Ferramentas de <span className="text-blue-500">Alta Performance</span>
            </h1>
            <p className="mb-8 text-lg text-slate-300 md:text-xl">
              Equipamentos duráveis, preços competitivos e entrega rápida para sua indústria, oficina ou projeto. Solicite orçamentos em volume com descontos exclusivos.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/loja">
                <Button size="lg" variant="primary" className="w-full sm:w-auto text-lg px-8">
                  Comprar Agora
                </Button>
              </Link>
              <Link to="/orcamento">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-slate-400 text-white hover:bg-white hover:text-slate-900">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL / CONFIANÇA */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="mb-3 h-10 w-10 text-blue-600" />
              <h3 className="font-bold text-slate-900">Qualidade Garantida</h3>
              <p className="text-sm text-slate-500">Produtos certificados</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="mb-3 h-10 w-10 text-blue-600" />
              <h3 className="font-bold text-slate-900">Entrega Rápida</h3>
              <p className="text-sm text-slate-500">Para todo o Brasil</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="mb-3 h-10 w-10 text-blue-600" />
              <h3 className="font-bold text-slate-900">+15 Anos</h3>
              <p className="text-sm text-slate-500">De experiência no mercado</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="mb-3 h-10 w-10 text-blue-600" />
              <h3 className="font-bold text-slate-900">Suporte Especializado</h3>
              <p className="text-sm text-slate-500">Equipe técnica pronta</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIAS EM DESTAQUE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Categorias em Destaque</h2>
              <p className="mt-2 text-slate-600">Encontre exatamente o que você precisa por setor.</p>
            </div>
            <Link to="/loja" className="hidden font-medium text-blue-600 hover:text-blue-700 md:flex items-center gap-1">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/loja?categoria=${cat.id}`} className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square w-full overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/40 transition-opacity group-hover:bg-slate-900/50"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="text-lg font-bold tracking-wide">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUTOS EM DESTAQUE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Produtos Mais Vendidos</h2>
            <p className="mt-2 text-slate-600">Equipamentos de alta performance recomendados por especialistas.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/loja">
              <Button variant="outline" size="lg">Ver Catálogo Completo</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 & 6. POR QUE ESCOLHER / COMO FUNCIONA (B2B) */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Por que escolher a HardPro?</h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Qualidade Industrial</h4>
                    <p className="mt-1 text-slate-400">Trabalhamos apenas com marcas homologadas e peças com certificação de qualidade.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Preço Competitivo</h4>
                    <p className="mt-1 text-slate-400">Condições especiais para compras em volume e contratos de fornecimento contínuo.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Suporte Técnico</h4>
                    <p className="mt-1 text-slate-400">Engenheiros e técnicos disponíveis para ajudar na especificação correta da sua peça.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-slate-800 p-8 border border-slate-700">
              <h2 className="mb-8 text-2xl font-bold tracking-tight">Fluxo de Compras B2B</h2>
              <div className="relative border-l-2 border-slate-700 pl-8 pb-4">
                <div className="absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">1. Navegue e Selecione</h4>
                <p className="mt-2 text-slate-400">Adicione os produtos desejados à sua lista de orçamento.</p>
              </div>
              <div className="relative border-l-2 border-slate-700 pl-8 py-4">
                <div className="absolute -left-[9px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">2. Solicite o Orçamento</h4>
                <p className="mt-2 text-slate-400">Preencha os dados da sua empresa. Nossa equipe responderá em até 2h úteis.</p>
              </div>
              <div className="relative pl-8 pt-4">
                <div className="absolute -left-[9px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-white">3. Aprovação e Faturamento</h4>
                <p className="mt-2 text-slate-400">Aprove as condições comerciais e receba os produtos com faturamento facilitado.</p>
              </div>
              <div className="mt-8">
                <Link to="/orcamento">
                  <Button variant="primary" className="w-full">Iniciar Orçamento B2B</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">O que dizem nossos clientes</h2>
            <p className="mt-2 text-slate-600">Empresas e profissionais que confiam na HardPro.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mb-6 text-slate-600 italic">"A facilidade de solicitar orçamentos em volume e a rapidez na entrega mudaram a forma como gerenciamos o estoque da nossa construtora. Recomendo fortemente."</p>
              <div>
                <h4 className="font-bold text-slate-900">Roberto Almeida</h4>
                <p className="text-sm text-slate-500">Diretor de Compras, Construtora Alpha</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mb-6 text-slate-600 italic">"Sempre encontro as peças industriais específicas que preciso. O suporte técnico me ajudou a identificar um rolamento que estava fora de linha e sugeriu um substituto perfeito."</p>
              <div>
                <h4 className="font-bold text-slate-900">Mariana Costa</h4>
                <p className="text-sm text-slate-500">Engenheira de Manutenção</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mb-6 text-slate-600 italic">"Preços muito competitivos para compras no atacado. O faturamento facilitado para CNPJ nos ajuda muito no fluxo de caixa da oficina."</p>
              <div>
                <h4 className="font-bold text-slate-900">Carlos Eduardo</h4>
                <p className="text-sm text-slate-500">Proprietário, Oficina Mecânica Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BANNER DE CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Precisa comprar em grande quantidade?</h2>
          <p className="mb-8 text-lg text-blue-100">
            Temos condições exclusivas, descontos progressivos e faturamento para empresas. Fale com um de nossos especialistas agora mesmo.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/orcamento">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-slate-100 sm:w-auto">
                Solicitar Orçamento Personalizado
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="w-full border-blue-400 text-white hover:bg-blue-700 sm:w-auto">
                Falar com Consultor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
