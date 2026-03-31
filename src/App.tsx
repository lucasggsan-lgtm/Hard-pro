/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Quote } from './pages/Quote';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { CartProvider } from './context/CartContext';
import { QuoteProvider } from './context/QuoteContext';

export default function App() {
  return (
    <CartProvider>
      <QuoteProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="loja" element={<Shop />} />
              <Route path="produto/:id" element={<ProductDetail />} />
              <Route path="orcamento" element={<Quote />} />
              <Route path="carrinho" element={<Cart />} />
              <Route path="sobre" element={<About />} />
              <Route path="contato" element={<Contact />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="blog" element={<Blog />} />
            </Route>
          </Routes>
        </Router>
      </QuoteProvider>
    </CartProvider>
  );
}
