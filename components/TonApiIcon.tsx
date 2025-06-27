import { FunctionComponent } from 'react';

export const TonApiIcon: FunctionComponent = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="black" />
    <mask id="mask0_9328_76441" maskUnits="userSpaceOnUse" x="5" y="5" width="22" height="22">
      <path d="M27 16L16 27L5 16L16 5L27 16Z" fill="white" />
    </mask>
    <g mask="url(#mask0_9328_76441)">
      <path opacity="0.75" d="M16 16V5L5 16H16Z" fill="white" />
      <path opacity="0.25" d="M16 16V27L5 16H16Z" fill="white" />
      <path d="M16 16V5L27 16H16Z" fill="white" />
      <path opacity="0.5" d="M16 16V27L27 16H16Z" fill="white" />
    </g>
  </svg>
);
