import React from "react";

export function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Main diagonal gradient background */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{
          background: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 40%, #F97316 60%, #FB923C 100%)"
        }}
      />
      
      {/* Subtle white highlight in center */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)"
        }}
      />
    </div>
  );
}