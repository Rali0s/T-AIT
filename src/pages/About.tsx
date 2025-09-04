import React from 'react';
import { Card } from '@blueprintjs/core';

export default function About() {
  return (
    <Card style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: 1.6, fontFamily: "'Quantico', sans-serif" }}>
      <h2 style={{ fontFamily: "'Baumans', cursive" }}>About Reverb-Net</h2>
      <p>
        Reverb-Net is more than a platform—it’s a living, breathing narrative engine co-authored by you.
        Conceived in the heart of the cypherpunk ethos, Reverb-Net weaves together cryptic architecture and
        fictional storytelling in real time. Every interaction shapes the unfolding world, and every user is
        both reader and creator.
      </p>
      <h3>Living Architecture</h3>
      <p>
        Explore a modular, networked environment where nodes of code and narrative echo and ripple, forming
        cryptic tunnels and poetic structures shaped by your input.
      </p>
      <h3>Collaborative Authorship</h3>
      <p>
        Reverb-Net is the author—yet it's designed to respond, evolve, and adapt as you weave your tale.
        Together, you don’t just write stories—you co-create them.
      </p>
      <h3>Emergent Storyworlds</h3>
      <p>
        Cyborgs, underground crypt-LANs, neon hackers, and ghost-AI whisperers—Reverb-Net is a realm where your
        imagination activates architecture and the architecture responds with stories.
      </p>
    </Card>
  );
}
