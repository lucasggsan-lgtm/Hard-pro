import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Como faço para solicitar um orçamento para compras em volume?",
    answer: "Você pode adicionar os produtos desejados à sua lista de orçamento clicando no botão 'Solicitar Orçamento' na página do produto. Depois, acesse a página de Orçamentos no menu superior, preencha os dados da sua empresa e envie. Nossa equipe retornará em até 2 horas úteis."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Para compras B2C (varejo), aceitamos cartões de crédito em até 10x sem juros, PIX com 5% de desconto e boleto bancário à vista. Para compras B2B (atacado/empresas), além dessas opções, oferecemos faturamento para 30, 60 ou 90 dias mediante análise de crédito."
  },
  {
    question: "Qual o prazo de entrega dos produtos?",
    answer: "O prazo varia de acordo com a sua região e a modalidade de frete escolhida. Para capitais e regiões metropolitanas, o prazo médio é de 1 a 3 dias úteis. Para demais regiões, de 3 a 10 dias úteis. Produtos com selo 'Envio Rápido' são despachados em até 24 horas."
  },
  {
    question: "Os produtos possuem garantia?",
    answer: "Sim, todos os produtos comercializados pela HardPro possuem garantia de fábrica contra defeitos de fabricação. O prazo varia de 3 meses a 1 ano, dependendo do fabricante e do tipo de produto. Consulte a página de cada produto para detalhes específicos."
  },
  {
    question: "Posso devolver um produto se me arrepender da compra?",
    answer: "Sim. De acordo com o Código de Defesa do Consumidor, você tem até 7 dias corridos após o recebimento para solicitar a devolução por arrependimento, desde que o produto esteja na embalagem original, sem indícios de uso e acompanhado da nota fiscal."
  },
  {
    question: "Vocês emitem Nota Fiscal para empresas (CNPJ)?",
    answer: "Sim, emitimos Nota Fiscal Eletrônica (NF-e) para todas as compras, tanto para Pessoa Física (CPF) quanto para Pessoa Jurídica (CNPJ). Certifique-se de preencher corretamente os dados de faturamento no momento do checkout ou na solicitação de orçamento."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Perguntas Frequentes</h1>
        <p className="text-lg text-slate-600">
          Encontre respostas rápidas para as dúvidas mais comuns sobre compras, envios e garantias.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:border-blue-300"
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center border border-blue-100">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Ainda tem dúvidas?</h2>
        <p className="mb-6 text-slate-600">Nossa equipe de suporte está pronta para te ajudar com qualquer questão técnica ou comercial.</p>
        <a href="/contato" className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white transition-colors hover:bg-blue-700">
          Falar com Suporte
        </a>
      </div>
    </div>
  );
}
