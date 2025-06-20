import * as React from "react";

export function AnimatedGrid() {
    const id = crypto.randomUUID();
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={id}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              className="animate-shift"
            >
              <rect width="40" height="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
    );
  }
  