import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from '../FloatingActions';
import { ExitIntentPopup } from '../ExitIntentPopup';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentPopup />
    </div>
  );
}
