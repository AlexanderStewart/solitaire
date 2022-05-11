import * as React from "react";

function ThreeSpade(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g transform="translate(.204 -12.362)">
        <g
          id="prefix__a"
          fontSize={144}
          fontWeight={400}
          textAnchor="middle"
          fontFamily="Arial"
        >
          <text
            x={58.666}
            y={158.362}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              x={58.666}
              y={158.362}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"3"}
            </tspan>
          </text>
          <text
            x={62.779}
            y={298.362}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              x={62.779}
              y={298.362}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2660"}
            </tspan>
          </text>
        </g>
        <use
          transform="rotate(180 373.47 535.505)"
          width={747.347}
          height={1046.286}
          xlinkHref="#prefix__a"
        />
        <text
          x={373.469}
          y={310.639}
          id="prefix__b"
          xmlSpace="preserve"
          style={{
            textAlign: "center",
          }}
          fontSize={250}
          fontStyle="normal"
          fontWeight={400}
          textAnchor="middle"
          fill="#000"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity={1}
          fontFamily="Arial"
        >
          <tspan x={373.469} y={310.639}>
            {"\u2660"}
          </tspan>
        </text>
        <use
          transform="matrix(1 0 0 -1 0 1071.01)"
          width={747.347}
          height={1046.286}
          xlinkHref="#prefix__b"
        />
        <use
          transform="translate(0 300)"
          width={747.347}
          height={1046.286}
          xlinkHref="#prefix__b"
        />
      </g>
    </svg>
  );
}

const MemoThreeSpade = React.memo(ThreeSpade);
export default MemoThreeSpade;
