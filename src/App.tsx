// BlueprintJS Terminal-Themed Web App (Mock + Stubbed Backend)
// Tailored for Tomcat + DeepSeek future interop

import React from 'react';
import {
  Button, Card, Elevation, Navbar, Alignment, Switch, Tabs, Tab
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

// Mock response for /api/infer (DeepSeek)
const mockAIResponse = {
  input: "Deploy unit to eastern ridge",
  output: "Simulated: Tactical position reinforced. Terrain advantageous under current light conditions.",
  reasoning: "Inductive heuristic analysis",
  timestamp: new Date().toLocaleString(),
};

export default function TerminalApp() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [aiResponse, setAIResponse] = React.useState(mockAIResponse);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bp5-dark" : ""} style={{ display: "flex", height: "100vh", fontFamily: "'Stolzl', sans-serif" }}>
      <Navbar style={{ width: "240px", minHeight: "100vh", opacity: 0.9 }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>⚔️ Layer-4 Terminal</Navbar.Heading>
          <Navbar.Divider />
          <Tabs id="MainNav" vertical defaultSelectedTabId="dashboard">
            <Tab id="dashboard" title="Dashboard" />
            <Tab id="history" title="Log" />
            <Tab id="settings" title="Settings" />
          </Tabs>
          <Switch
            label="Dark Mode"
            checked={darkMode}
            onChange={toggleTheme}
            style={{ marginTop: "2rem" }}
          />
        </Navbar.Group>
      </Navbar>

      <div style={{ flexGrow: 1, padding: "2rem", backgroundColor: darkMode ? "#10161A" : "#F5F8FA" }}>
        <Card elevation={Elevation.TWO} style={{ opacity: 0.95 }}>
          <h2 style={{ marginBottom: "1rem" }}>AI Tactical Feedback</h2>
          <p><strong>Input:</strong> {aiResponse.input}</p>
          <p><strong>Response:</strong> {aiResponse.output}</p>
          <p><strong>Reasoning:</strong> {aiResponse.reasoning}</p>
          <p><em>Timestamp:</em> {aiResponse.timestamp}</p>
          <Button intent="primary" text="Simulate Another" onClick={() => setAIResponse(mockAIResponse)} />
        </Card>
      </div>
    </div>
  );
}
