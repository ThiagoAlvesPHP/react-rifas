// LIBs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// VIEWs
import { HomeView } from '../../views/home';
import { SweepstakesView } from '../../views/sweepstakes';
import { DoubtView } from '../../views/doubt';
import { ContactView } from '../../views/contact';
import { NotFoundView } from '../../views/notfound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/sweepstakes' element={<SweepstakesView />} />
        <Route path='/doubt' element={<DoubtView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  )
}