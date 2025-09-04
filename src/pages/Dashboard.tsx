import React from 'react';
import { Navbar, Alignment, Button, Card, Elevation, Collapse, Popover } from '@blueprintjs/core';
import Console from 'react-console-emulator';

export default function Dashboard() {
  const [showControls, setShowControls] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const epochTimestamps = ['1700000000', '1700003600', '1700007200'];
  const sigils = ['Sigil A', 'Sigil B', 'Sigil C'];
  const locations = ['Base', 'Field', 'HQ'];
  const buttonStyle: React.CSSProperties = { boxShadow: '0 0 5px #137CBD' };
  const commands = {
    echo: {
      description: 'Echoes input',
      usage: 'echo <text>',
      fn: (...args: string[]) => args.join(' '),
    },
  };

  return (
    <>
      <Navbar style={{ marginBottom: '1rem', fontFamily: "'Quantico', sans-serif" }}>
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
      <Card
        elevation={Elevation.FOUR}
        style={{ maxWidth: '800px', margin: '0 auto', boxShadow: '0 0 10px #137CBD' }}
      >
        <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
          <div
            style={{
              display: 'flex',
              gap: '0.4rem',
              padding: '0.3rem',
              background: '#2b2d3a',
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <div
            style={{
              backgroundColor: '#000',
              color: '#5c9ded',
              padding: '1rem',
              fontFamily: "'Iceland', monospace",
              minHeight: '200px',
              boxShadow: 'inset 0 0 10px #000',
            }}
          >
            <Console
              commands={commands}
              welcomeMessage="Welcome to Layer-4 ReverbNet"
              promptLabel="reverb$"
              style={{ backgroundColor: 'transparent', color: '#5c9ded' }}
            />
          </div>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
          <Button text="SITREP" />
          <Button text="CONSOLE" />
          <Button text="User Var Input" />
        </div>
      </Card>

      <Card style={{ maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
        <Button
          text={showMenu ? 'Hide Menu' : 'Show Menu'}
          onClick={() => setShowMenu(!showMenu)}
          style={buttonStyle}
        />
        <Collapse isOpen={showMenu}>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Button text="Option A" style={buttonStyle} />
            <Button text="Option B" style={buttonStyle} />
            <Button text="Option C" style={buttonStyle} />
          </div>
        </Collapse>
      </Card>
    </>
  );
}
