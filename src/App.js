// 3rd Party Dependencies
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import ConfirmationPage from 'components/pages/ConfirmationPage';
import SurveyPage from 'components/pages/SurveyPage';
import SuccessPage from 'components/pages/SuccessPage';
import DownloadPage from 'components/pages/DownloadPage';
import LandingPage from 'components/pages/LandingPage';
import DebuggerPage from 'components/pages/DebuggerPage';

// Shared Components
import Layout from 'components/elements/Layout';
import RequireAuth from 'components/elements/RequireAuth';
import { AuthProvider } from 'hooks/authentication';
// Utilities
import LocaleContext from 'utils/LocaleContext';
import i18n from 'utils/i18n';
import './App.css';

function App() {
  const [locale, setLocale] = useState(i18n.language);

  // Trigger i18n initialization.
  useEffect(() => {
    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  }, [])

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              exact
              path="/confirmation/:otp/:token"
              element={<ConfirmationPage />}
            />

            <Route
              exact
              path="/confirmation"
              element={<ConfirmationPage />}
            />

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

            <Route
              path="/debugger"
              element={
                <DebuggerPage />
              }
            />

            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </LocaleContext.Provider>
  );
}

export default App;
