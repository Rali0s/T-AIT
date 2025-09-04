import React from 'react';
import { Navbar, Alignment, Button, Card, Elevation } from '@blueprintjs/core';

export default function Dashboard() {
  return (
    <>
      <Navbar style={{ marginBottom: '1rem' }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Button minimal text="EPOCH Selection" />
          <Navbar.Divider />
          <Button minimal text="MEMORY Sigils" />
          <Navbar.Divider />
          <Button minimal text="STATUS Location In Story" />
        </Navbar.Group>
      </Navbar>
      <Card elevation={Elevation.THREE} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#1e1e1e',
            color: '#33ff33',
            padding: '1rem',
            fontFamily: 'monospace',
            minHeight: '200px',
            borderRadius: '4px',
            boxShadow: 'inset 0 0 10px #000',
          }}
        >
          <pre style={{ margin: 0 }}>$ echo "Welcome to Layer-4 Terminal"</pre>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <Button text="SITREP" />
          <Button text="CONSOLE" />
          <Button text="User Var Input" />
        </div>
      </Card>
    </>
  );
}
