'use client';

import React from 'react';

export interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-2">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gray-900">
            {/* Stylized monkey head */}
            <path d="M50 15c-19.33 0-35 15.67-35 35 0 19.33 15.67 35 35 35s35-15.67 35-35c0-19.33-15.67-35-35-35zm0 60c-13.81 0-25-11.19-25-25s11.19-25 25-25 25 11.19 25 25-11.19 25-25 25z" />
            
            {/* Hair spike */}
            <path d="M50 5c-3 0-9 5-9 10h18c0-5-6-10-9-10z" />
            
            {/* Sunglasses */}
            <path d="M25 40c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h15c2.76 0 5-2.24 5-5v-5c0-2.76-2.24-5-5-5H25zm35 0c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h15c2.76 0 5-2.24 5-5v-5c0-2.76-2.24-5-5-5H60z" />
            
            {/* Connection between glasses */}
            <path d="M45 45h10v5H45z" />
            
            {/* Ears */}
            <path d="M20 35c-3 0-5 2-5 5s2 5 5 5c1 0 2-1 2-2v-6c0-1-1-2-2-2zm60 0c3 0 5 2 5 5s-2 5-5 5c-1 0-2-1-2-2v-6c0-1 1-2 2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 uppercase">Corporate Monkey</h3>
      </div>
    </div>
  );
} 