import React from 'react';
import loadable from '@loadable/component';

// Dynamically import the remote micro frontend from the Feature Module
const MicroFrontend = loadable(() => import('micro_frontend/App'));

const MicroFrontendContainer = () => (
  <div style={{ padding: '1rem' }}>
    <h2>Micro Frontend Section</h2>
    <MicroFrontend />
  </div>
);

export default MicroFrontendContainer;
