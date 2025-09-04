# PROCESS.md – BlueprintJS Terminal MVP Guide

## 🧠 Project Goal
Create a **BlueprintJS-based terminal-themed React app** that simulates a locally-hosted AI tactical interface. This serves as a **False MVP** for future DeepSeek AI and Tomcat server integration.

---

## ✅ Features Implemented
- **Mock AI Response**: Fully stubbed DeepSeek output
- **Blueprint.js UI**: Dark mode toggle, tabs, and layout
- **Terminal Aesthetic**: Left-aligned nav bar, translucent card view
- **Typography Ready**: Stolzl-styled font (swap with local/hosted font in prod)
- **ARM/RPi Friendly**: Lightweight React build, no heavy assets
- **Tomcat Monitor Integration**: Placeholder in tabs (future REST endpoint ready)

---

## 🔍 System Strategy
### I. Where Will DeepSeek Render?
- Not in browser
- Runs locally:
  - CPU by default
  - GPU if available (PyTorch + CUDA)

### II. Website Loadtime Impact?
- Minimal impact
- Only fetches lightweight JSON text from local server (FastAPI)
- Ensure AI server is preloaded to reduce latency

---

## 📦 Architecture Blueprint

### 🧩 App Stack
- **React + TypeScript** (via CRA)
- **BlueprintJS** for all UI components
- **FastAPI (Python)** for eventual AI backend
- **Tomcat**: planned integration via REST (not active)

### 🧰 Setup Commands
```bash
npx create-react-app terminal-ui --template typescript
cd terminal-ui
npm install @blueprintjs/core @blueprintjs/icons
```

### 🌐 Blueprint CSS (index.tsx)
```ts
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint.css';
```

---

## 🎨 Design Goals
- Maximize BlueprintJS native components
- Minimalist, terminal-themed, I3WM-inspired layout
- Blue/dark palette with light-mode toggle
- Opacity for glassy effect
- Stolzl or similar geometric sans-serif font
- Mobile and ARM CPU compatible (no bloat)

---

## 🔧 UI Functional Scope
1. **Simulate DeepSeek AI output** with mock JSON
2. **Display results** in Blueprint `Card`
3. **Navigation Tabs**: Dashboard, Log, Settings
4. **Simulate Another** button triggers new mock
5. **Dark Mode Toggle** (`Switch`)
6. **Left-aligned NavBar** with subtle transparency
7. **Future tab for Tomcat output** integration

---

## 🧱 Future-Ready Stubbed Features
- Reverb-Net GPT selector
- Dropdown for EPOCH tree selection
- Local storage for session/auth keys
- Scenario/Story Arc picker

---

## 🏁 File Output
- `App.tsx`: Blueprint terminal interface (mock data)
- `index.tsx`: Setup Blueprint theme, render TerminalApp
- `public/index.html`: Link to font (Stolzl or alternative)

---

## 🧬 Performance & Compatibility
- Lightweight architecture
- No AI/ML runs in-browser
- Prepare REST endpoints for local inference
- Ready for Docker or direct Raspberry Pi builds

---

## 📂 Folder Structure (Planned)
```
terminal-ui/
├── public/
│   └── index.html (font, title, meta)
├── src/
│   ├── App.tsx (Terminal UI)
│   ├── index.tsx
│   └── assets/
│       └── fonts/
└── package.json
```

---

## 🔁 Next Steps
- Integrate actual REST fetch to `/api/infer`
- Build backend stub with FastAPI
- Connect Tomcat's server logs via local REST polling
- Add scenario-based input panel with context switching

---

**Author:** [You, the Strategist ✨]
**Mission Status:** Active, false flag deployed
