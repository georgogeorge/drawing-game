import React, { ReactNode } from 'react';

interface ToolButtonProps {
  onClick: () => void;
  icon?: ReactNode;
  label: string;
}

export default function ToolButton({ onClick, icon, label }: ToolButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}