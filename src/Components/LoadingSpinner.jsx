import React from "react";
import "animate.css";

function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50
      animate__animated animate__fadeIn"
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full
          border-t-4 border-blue-500/30
          w-24 h-24 animate-[spin_3s_linear_infinite]"
        ></div>

        <div
          className="absolute inset-0 rounded-full
          border-r-4 border-purple-500/40
          w-20 h-20 m-2 animate-[spin_2s_linear_infinite_reverse]"
        ></div>

        <div
          className="absolute inset-0 rounded-full
          border-b-4 border-pink-500/50
          w-16 h-16 m-4 animate-[spin_1s_linear_infinite]"
        ></div>

        <div
          className="absolute inset-0 m-8 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
          animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]
          shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        ></div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full
              bg-gradient-to-r from-blue-400 to-purple-400
              animate-[ping_${1 + i * 0.5}s_cubic-bezier(0,0,0.2,1)_infinite]
              opacity-75`}
            style={{
              left: `${Math.sin((i * 60 * Math.PI) / 180) * 50 + 50}%`,
              top: `${Math.cos((i * 60 * Math.PI) / 180) * 50 + 50}%`,
              transform: "translate(-50%, -50%)",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <div className="flex items-center space-x-1">
            {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
              <span
                key={index}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600
                  text-lg font-medium animate-[bounce_1s_ease-in-out_infinite]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                  animate-[bounce_1s_ease-in-out_infinite]"
                style={{ animationDelay: `${(i + 7) * 0.1}s` }}
              >
                .
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 
          bg-blue-300/20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 
          bg-purple-300/20 rounded-full blur-3xl animate-pulse 
          animation-delay-1000"
        ></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
