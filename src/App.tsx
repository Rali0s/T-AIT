// BlueprintJS Terminal-Themed Web App (Mock + Stubbed Backend)
// Tailored for Tomcat + DeepSeek future interop

import React from "react";
import {
  Alignment,
  Button,
  Card,
  Elevation,
  Navbar,
  Slider,
  Switch,
  Tab,
  Tabs,
} from "@blueprintjs/core";

// Mock generator for /api/infer (DeepSeek)
type AIResponse = {
  input: string;
  output: string;
  reasoning: string;
  timestamp: string;
};

const samples: Array<Omit<AIResponse, "timestamp" | "reasoning">> = [
  {
    input: "Deploy unit to eastern ridge",
    output:
      "Simulated: Tactical position reinforced. Terrain advantageous under current light conditions.",
  },
  {
    input: "Scan for enemy comms",
    output:
      "Simulated: Low band chatter detected. Source triangulation in progress.",
  },
  {
    input: "Request supply drone to sector 7",
    output: "Simulated: Drop scheduled. ETA 4 minutes.",
  },
];

function generateMockResponse(): AIResponse {
  const sample = samples[Math.floor(Math.random() * samples.length)];
  return {
    ...sample,
    reasoning: "Inductive heuristic analysis",
    timestamp: new Date().toLocaleString(),
  };
}

export default function TerminalApp() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [aiResponse, setAIResponse] = React.useState<AIResponse>(
    generateMockResponse()
  );
  const [activeTab, setActiveTab] = React.useState<string>("dashboard");
  const [opacity, setOpacity] = React.useState<number>(0.9);

  const toggleTheme = () => setDarkMode((m) => !m);

  return (
    <div
      className={darkMode ? "bp5-dark" : ""}
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Stolzl', sans-serif",
      }}
    >
      <Navbar
        style={{
          width: "240px",
          minHeight: "100vh",
          opacity: 0.9,
          boxShadow: "none",
        }}
      >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>⚔️ Layer-4 Terminal</Navbar.Heading>
          <Navbar.Divider />
          <Tabs
            id="MainNav"
            vertical
            selectedTabId={activeTab}
            onChange={(id) => setActiveTab(id.toString())}
            renderActiveTabPanel={false}
          >
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

      <div
        style={{
          flexGrow: 1,
          padding: "2rem",
          backgroundColor: darkMode ? "#10161A" : "#F5F8FA",
        }}
      >
        {activeTab === "dashboard" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Card elevation={Elevation.TWO} style={{ opacity }}>
              <h2 style={{ marginBottom: "1rem" }}>AI Tactical Feedback</h2>
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
              <Button
                intent="primary"
                text="Simulate Another"
                onClick={() => setAIResponse(generateMockResponse())}
                style={{ marginTop: "1rem" }}
              />
            </Card>

            <Card elevation={Elevation.ONE} style={{ opacity }}>
              <h3>Tomcat Server Monitor</h3>
              <p>Awaiting server metrics...</p>
            </Card>
          </div>
        )}

        {activeTab === "history" && (
          <Card elevation={Elevation.ONE} style={{ opacity }}>
            <h3>Log</h3>
            <p>Command log will appear here.</p>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card elevation={Elevation.ONE} style={{ opacity }}>
            <h3>Settings</h3>
            <div style={{ marginTop: "1rem" }}>
              <Slider
                min={0.5}
                max={1}
                stepSize={0.05}
                labelStepSize={0.25}
                onChange={setOpacity}
                value={opacity}
              />
              <p style={{ marginTop: "1rem" }}>
                Future stubs (not yet implemented):
              </p>
              <ul>
                <li>Reverb-Net GPT selector</li>
                <li>EPOCH tree selection</li>
                <li>Local auth/session cache</li>
                <li>Story Arc scenario picker</li>
              </ul>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

