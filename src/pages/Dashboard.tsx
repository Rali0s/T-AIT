import React from 'react';
import { Navbar, Alignment, Button, Card, Elevation, Collapse, Popover } from '@blueprintjs/core';

export default function Dashboard() {
  const [showControls, setShowControls] = React.useState(false);
  const epochTimestamps = ['1700000000', '1700003600', '1700007200'];
  const sigils = ['Sigil A', 'Sigil B', 'Sigil C'];
  const locations = ['Base', 'Field', 'HQ'];
  const buttonStyle: React.CSSProperties = { boxShadow: '0 0 5px #137CBD' };

  return (
    <>
      <Navbar style={{ marginBottom: '1rem' }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Button minimal text="EPOCH Selection" />
          <Navbar.Divider />
          <Button minimal text="MEMORY Sigils" />
          <Navbar.Divider />
          <Button minimal text="STATUS Location In Story" />
          <Navbar.Divider />
          <Button minimal text="Echo-Market" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button
            minimal
            text={showControls ? 'Hide' : 'Show'}
            onClick={() => setShowControls(!showControls)}
          />
        </Navbar.Group>
      </Navbar>
      <Collapse isOpen={showControls}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
          <Popover
            position="bottom"
            content={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem' }}>
                {epochTimestamps.map((ts) => (
                  <Button key={ts} text={ts} style={buttonStyle} />
                ))}
              </div>
            }
          >
            <Button text="Epochs" rightIcon="caret-down" style={buttonStyle} />
          </Popover>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sigils.map((sig) => (
              <Button key={sig} text={sig} style={buttonStyle} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {locations.map((loc) => (
              <Button key={loc} text={loc} style={buttonStyle} />
            ))}
          </div>
        </div>
      </Collapse>
      <Card elevation={Elevation.THREE} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#001f3f',
            color: '#8be9fd',
            padding: '1rem',
            fontFamily: 'monospace',
            minHeight: '200px',
            borderRadius: '4px',
            boxShadow: 'inset 0 0 10px #000',
          }}
        >
          <pre style={{ margin: 0 }}>$ echo "Welcome to Layer-4 ReverbNet"</pre>
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
