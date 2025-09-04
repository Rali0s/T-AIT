import React from 'react';
import { Button, Navbar, Switch } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

export default function TerminalApp() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [page, setPage] = React.useState<'dashboard' | 'about'>('dashboard');

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={darkMode ? 'bp5-dark' : ''}
      style={{
        display: 'flex',
        height: '100vh',
        fontFamily: "'Oxanium', sans-serif",
        backgroundColor: darkMode ? '#0a0f1a' : '#F5F8FA',
      }}
    >
      <Navbar
        style={{
          width: '240px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          backgroundColor: darkMode ? '#112240' : '#EBF1F5',
          borderRight: darkMode ? '1px solid #137CBD' : '1px solid #CED9E0',
        }}
      >
        <div
          style={{
            padding: '2rem 0 1.5rem',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            fontFamily: "'Baumans', cursive",
            borderBottom: darkMode ? '1px solid #137CBD' : '1px solid #CED9E0',
            marginBottom: '1rem',
          }}
        >
          Layer-4 ReverbNet
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontFamily: "'Quantico', sans-serif",
            color: darkMode ? '#f8f8f2' : '#394B59',
          }}
        >
          <Button
            minimal
            alignText="left"
            text="Dashboard"
            onClick={() => setPage('dashboard')}
            style={{ color: darkMode ? '#f8f8f2' : '#394B59' }}
          />
          <Button
            minimal
            alignText="left"
            text="About"
            onClick={() => setPage('about')}
            style={{ color: darkMode ? '#f8f8f2' : '#394B59' }}
          />
        </div>
        <div style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
          <Switch label="Dark Mode" checked={darkMode} onChange={toggleTheme} />
        </div>
      </Navbar>

      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: darkMode ? '#0a0f1a' : '#F5F8FA',
        }}
      >
        <main style={{ flexGrow: 1, padding: '2rem', overflowY: 'auto' }}>
          {page === 'dashboard' && <Dashboard />}
          {page === 'about' && <About />}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.8rem' }}>
          © 2025 Layer-4 ReverbNet
        </footer>
      </div>
    </div>
  );
}
