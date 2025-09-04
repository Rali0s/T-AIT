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
      style={{ display: 'flex', height: '100vh', fontFamily: "'Stolzl', sans-serif" }}
    >
      <Navbar
        style={{
          width: '240px',
          minHeight: '100vh',
          opacity: 0.9,
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
        }}
      >
        <div
          style={{
            padding: '1rem 0 2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
          }}
        >
          LAYER-4 TERMINAL
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Button minimal alignText="left" text="Dashboard" onClick={() => setPage('dashboard')} />
          <Button minimal alignText="left" text="About" onClick={() => setPage('about')} />
        </div>
        <div style={{ marginTop: 'auto' }}>
          <Switch label="Dark Mode" checked={darkMode} onChange={toggleTheme} />
        </div>
      </Navbar>

      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: darkMode ? '#10161A' : '#F5F8FA',
        }}
      >
        <main style={{ flexGrow: 1, padding: '2rem', overflowY: 'auto' }}>
          {page === 'dashboard' && <Dashboard />}
          {page === 'about' && <About />}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.8rem' }}>
          © 2025 Layer-4 Terminal
        </footer>
      </div>
    </div>
  );
}
