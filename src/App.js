import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import SurveyPage from './components/pages/SurveyPage'
import SuccessPage from './components/pages/SuccessPage'
import DownloadPage from './components/pages/DownloadPage'
import LandingPage from './components/pages/LandingPage'

import Layout from './components/shared/Layout'
import RequireAuth from './components/shared/RequireAuth'
import { AuthProvider } from './hooks/authentication'

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/survey"
              element={
                <RequireAuth>
                  <SurveyPage />
                </RequireAuth>
              }
            />

            <Route
              path="/success"
              element={
                <RequireAuth>
                  <SuccessPage />
                </RequireAuth>
              }
            />

            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
