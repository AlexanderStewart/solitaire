import * as React from "react";

function CardsReverse(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <defs>
        <pattern
          id="prefix__a"
          patternTransform="scale(27.51388) rotate(-45 1.061 .807)"
          height={1}
          width={2.5}
          patternUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0-.5h1v2H0z" />
        </pattern>
      </defs>
      <g
        stroke="#007"
        strokeWidth={8.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          fill="#000075"
          fillOpacity={0.645}
          d="M67.541 72.023h614.173V977.12H67.541z"
        />
        <path
          fill="url(#prefix__a)"
          d="M67.337 84.385H681.51v905.097H67.337z"
          transform="translate(.204 -12.362)"
        />
      </g>
    </svg>
  );
}

const MemoCardsReverse = React.memo(CardsReverse);
export default MemoCardsReverse;
