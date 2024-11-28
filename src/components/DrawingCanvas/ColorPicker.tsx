import React from 'react';

const colors = [
  '#000000', // Black
  '#ffffff', // White
  '#ff0000', // Red
  '#00ff00', // Green
  '#0000ff', // Blue
  '#ffff00', // Yellow
  '#ff00ff', // Magenta
  '#00ffff', // Cyan
];

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

export default function ColorPicker({ onColorChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorChange(color)}
          className="w-8 h-8 rounded-full border border-gray-300 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: color,
            boxShadow: color === '#ffffff' ? 'inset 0 0 0 1px #e5e7eb' : 'none'
          }}
          aria-label={`Select ${color} color`}
        />
      ))}
    </div>
  );
}