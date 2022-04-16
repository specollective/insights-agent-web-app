import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import SurveyPage from './components/pages/SurveyPage'
import SuccessPage from './components/pages/SuccessPage'
import DownloadPage from './components/pages/DownloadPage'
import LandingPage from './components/pages/LandingPage'
import Layout from './components/shared/Layout'

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/survey' element={<SurveyPage />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/download' element={<DownloadPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
