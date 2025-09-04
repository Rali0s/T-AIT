import React from 'react';
import { Card } from '@blueprintjs/core';

export default function About() {
  return (
    <Card style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: 1.6 }}>
      <h2>About Layer-4 Terminal</h2>
      <p>
        Layer-4 Terminal is a stealthy, minimalist dashboard experiment styled after
        classic Linux terminals. It showcases a mock AI interface and serves as a
        foundation for future integrations.
      </p>
      <p>
        Use the dashboard to explore epoch selections, memory sigils and track your
        status within the story. The interface is intentionally simple—designed to
        keep focus on mission data without distraction.
      </p>
    </Card>
  );
}
