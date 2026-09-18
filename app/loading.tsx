import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Animated circles */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin"></div>
          <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-white border-l-white animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          <div className="absolute inset-6 rounded-full border-2 border-white/50 animate-pulse"></div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">PS&SG Lab</h1>
        <p className="text-white/80 text-lg">Loading Research Portfolio...</p>

        {/* Dots animation */}
        <div className="flex gap-2 justify-center mt-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
