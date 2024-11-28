import React from 'react';
import Canvas from './components/DrawingCanvas/Canvas';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Canvas
        backgroundImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800&h=600"
        width={800}
        height={600}
      />
    </div>
  );
}

export default App;