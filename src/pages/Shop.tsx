import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  const queryParam = searchParams.get('q');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryParam ? product.category.toLowerCase().includes(categoryParam.toLowerCase()) : true;
      const matchesQuery = queryParam ? 
        product.name.toLowerCase().includes(queryParam.toLowerCase()) || 
        product.sku.toLowerCase().includes(queryParam.toLowerCase()) 
        : true;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesCategory && matchesQuery && matchesPrice;
    });
  }, [categoryParam, queryParam, priceRange]);

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) {
      searchParams.set('categoria', categoryId);
    } else {
      searchParams.delete('categoria');
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setPriceRange([0, 5000]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {categoryParam ? categories.find(c => c.id === categoryParam)?.name || 'Produtos' : 'Todos os Produtos'}
          </h1>
          <p className="text-slate-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            {queryParam && ` para "${queryParam}"`}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm text-slate-500">Ordenar por:</span>
            <select className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>Relevância</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Mais Vendidos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Filters */}
        <aside className={`w-full shrink-0 md:w-64 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-24 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">Filtros</h2>
              {(categoryParam || queryParam || priceRange[0] > 0 || priceRange[1] < 5000) && (
                <button onClick={clearFilters} className="text-xs text-blue-600 hover:underline">Limpar</button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Categorias</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <button 
                    onClick={() => handleCategoryChange(null)}
                    className={`text-left hover:text-blue-600 ${!categoryParam ? 'font-medium text-blue-600' : 'text-slate-600'}`}
                  >
                    Todas as Categorias
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-left hover:text-blue-600 ${categoryParam === cat.id ? 'font-medium text-blue-600' : 'text-slate-600'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Faixa de Preço</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                  placeholder="Min"
                />
                <span className="text-slate-400">-</span>
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full rounded border border-slate-300 px-2 py-1 text-sm"
                  placeholder="Max"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">Disponibilidade</h3>
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                Em estoque
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
              <Search className="mb-4 h-12 w-12 text-slate-400" />
              <h3 className="mb-2 text-lg font-medium text-slate-900">Nenhum produto encontrado</h3>
              <p className="mb-6 text-slate-500">Tente ajustar seus filtros ou termo de busca.</p>
              <Button onClick={clearFilters}>Limpar Filtros</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
