import React from 'react';
import { Card } from '@blueprintjs/core';

export default function About() {
  return (
    <Card style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: 1.6 }}>
      <h2>About Layer-4 ReverbNet</h2>
      <p>
        Layer-4 ReverbNet is a stealthy, minimalist dashboard experiment styled after
        classic Linux terminals. It showcases a mock AI interface and serves as a
        foundation for future integrations.
      </p>
      <p>
        Use the dashboard to explore epoch selections, memory sigils and track your
        status within the story. The interface is intentionally simple—designed to
        keep focus on mission data without distraction.
      </p>
      <p>
        The project embraces the KISS principle while maintaining a covert aesthetic.
        Under the hood it leverages BlueprintJS for fast prototyping and a terminal
        inspired colour palette to keep operators in the flow.
      </p>
      <p>
        Future iterations aim to plug in real data streams, unlock deeper lore via
        sigil memories and expand the Echo-Market for mission-critical resources.
      </p>
    </Card>
  );
}
