import React, { useRef } from 'react';
import { Download, Eraser } from 'lucide-react';
import { useCanvas } from './useCanvas';
import ColorPicker from './ColorPicker';
import ToolButton from './ToolButton';

interface DrawingCanvasProps {
  backgroundImage: string;
  width: number;
  height: number;
}

export default function Canvas({ 
  backgroundImage,
  width,
  height
}: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    startDrawing,
    draw,
    stopDrawing,
    clearCanvas,
    downloadCanvas,
    setColor,
    setIsErasing
  } = useCanvas(canvasRef, backgroundImage);

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4 flex-wrap justify-center">
        <ColorPicker onColorChange={setColor} />
        <ToolButton
          onClick={() => setIsErasing(true)}
          icon={<Eraser className="w-5 h-5" />}
          label="Eraser"
        />
        <ToolButton
          onClick={clearCanvas}
          label="Clear"
        />
        <ToolButton
          onClick={downloadCanvas}
          icon={<Download className="w-5 h-5" />}
          label="Download"
        />
      </div>
      
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="border border-gray-200 rounded-lg touch-none"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
}