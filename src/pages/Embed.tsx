import React from 'react';
import Canvas from '../components/DrawingCanvas/Canvas';

export default function Embed() {
  const params = new URLSearchParams(window.location.search);
  const backgroundImage = params.get('bg') || undefined;

  return (
    <div className="p-2">
      <Canvas
        backgroundImage={backgroundImage}
        width={800}
        height={600}
        showCustomization={false}
      />
    </div>
  );
}