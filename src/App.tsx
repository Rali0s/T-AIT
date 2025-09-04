import React, { useState } from 'react';
import {
  Alignment,
  Button,
  Card,
  Classes,
  Elevation,
  Navbar,
  Switch,
  Tab,
  Tabs,
} from '@blueprintjs/core';

interface AIResponse {
  input: string;
  output: string;
  reasoning: string;
  timestamp: string;
}

const mockResponses: Omit<AIResponse, 'timestamp'>[] = [
  {
    input: 'Deploy unit to eastern ridge',
    output:
      'Simulated: Tactical position reinforced. Terrain advantageous under current light conditions.',
    reasoning: 'Inductive heuristic analysis',
  },
  {
    input: 'Scan sector for movement',
    output:
      'Simulated: No hostiles detected. Thermal signatures stable across grid.',
    reasoning: 'Infrared sweep heuristic',
  },
  {
    input: 'Run supply check on battalion',
    output:
      'Simulated: Munitions at 84%. Fuel reserves nominal. Suggested resupply in 12h.',
    reasoning: 'Inventory delta projection',
  },
];

const simulateResponse = (): AIResponse => {
  const base = mockResponses[Math.floor(Math.random() * mockResponses.length)];
  return { ...base, timestamp: new Date().toLocaleString() };
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [aiResponse, setAIResponse] = useState<AIResponse>(simulateResponse());
  const [tabId, setTabId] = useState<string>('dashboard');

  const handleSimulate = () => setAIResponse(simulateResponse());

  return (
    <div
      className={darkMode ? Classes.DARK : ''}
      style={{ display: 'flex', height: '100vh', fontFamily: "'Stolzl','Roboto',sans-serif" }}
    >
      <Navbar style={{ width: 200, minHeight: '100vh', opacity: 0.9 }}>
        <Navbar.Group
          align={Alignment.LEFT}
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <Navbar.Heading style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            ⚔ Layer-4 Terminal
          </Navbar.Heading>
          <Tabs
            id="main-nav"
            vertical
            selectedTabId={tabId}
            onChange={(id) => setTabId(id as string)}
            renderActiveTabPanel={false}
          >
            <Tab id="dashboard" title="Dashboard" />
            <Tab id="log" title="Log" />
            <Tab id="settings" title="Settings" />
          </Tabs>
          <Switch
            label="Dark Mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            style={{ marginTop: 'auto' }}
          />
        </Navbar.Group>
      </Navbar>

      <div
        style={{
          flexGrow: 1,
          padding: '2rem',
          backgroundColor: darkMode ? '#10161A' : '#F5F8FA',
        }}
      >
        {tabId === 'dashboard' && (
          <>
            <Card elevation={Elevation.TWO} style={{ opacity: 0.95, marginBottom: '1rem' }}>
              <h2 style={{ marginBottom: '1rem' }}>AI Tactical Feedback</h2>
              <p>
                <strong>Input:</strong> {aiResponse.input}
              </p>
              <p>
                <strong>Response:</strong> {aiResponse.output}
              </p>
              <p>
                <strong>Reasoning:</strong> {aiResponse.reasoning}
              </p>
              <p>
                <em>Timestamp:</em> {aiResponse.timestamp}
              </p>
              <Button intent="primary" text="Simulate Another" onClick={handleSimulate} />
            </Card>
            <Card elevation={Elevation.ONE} style={{ opacity: 0.9 }}>
              <h3>Tomcat Monitor</h3>
              <p>Placeholder for server metrics...</p>
            </Card>
          </>
        )}

        {tabId === 'log' && (
          <Card elevation={Elevation.ONE} style={{ opacity: 0.9 }}>
            <h3>Log</h3>
            <p>Placeholder: AI interaction history will appear here.</p>
          </Card>
        )}

        {tabId === 'settings' && (
          <Card elevation={Elevation.ONE} style={{ opacity: 0.9 }}>
            <h3>Settings</h3>
            <p>Future-ready stubs:</p>
            <ul>
              <li>Reverb-Net GPT selector</li>
              <li>EPOCH tree selection</li>
              <li>Local cache for auth/session keys</li>
              <li>Story Arc scenario picker</li>
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
}
