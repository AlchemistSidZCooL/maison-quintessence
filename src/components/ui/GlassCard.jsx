import React from 'react';

export default function GlassCard({ children, className = '', hover = false }) {
  const hoverEffect = hover ? 'transition-all duration-500 hover:border-mq-cyan/30 hover:shadow-[0_0_30px_rgba(6,214,160,0.1)] hover:-translate-y-1' : '';
  
  return (
    <div className={`glass-card rounded-3xl shadow-2xl ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
}
