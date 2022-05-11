import * as React from "react";

function TwoDiamond(props) {
  return (
    <svg width={747.347} height={1046.286} {...props}>
      <g transform="translate(.204 -12.362)">
        <g
          id="prefix__a"
          fill="red"
          fontSize={144}
          fontWeight={400}
          textAnchor="middle"
          fontFamily="Arial"
        >
          <text
            style={{
              textAlign: "center",
            }}
            x={59.984}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={59.984}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"2"}
            </tspan>
          </text>
          <text
            y={298.362}
            x={62.867}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={62.867}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2666"}
            </tspan>
          </text>
        </g>
        <use
          xlinkHref="#prefix__a"
          transform="rotate(180 373.47 535.505)"
          width={747.347}
          height={1046.286}
        />
      </g>
      <g transform="translate(48.36 -12.362)">
        <text
          id="prefix__b"
          y={310.639}
          x={325.191}
          style={{
            textAlign: "center",
          }}
          xmlSpace="preserve"
          fontSize={250}
          fontStyle="normal"
          fontWeight={400}
          textAnchor="middle"
          fill="red"
          fillOpacity={1}
          stroke="none"
          strokeWidth={1}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity={1}
          fontFamily="Arial"
        >
          <tspan y={310.639} x={325.191}>
            {"\u2666"}
          </tspan>
        </text>
        <use
          height={1046.286}
          width={747.347}
          transform="matrix(1 0 0 -1 0 1071.01)"
          xlinkHref="#prefix__b"
        />
      </g>
    </svg>
  );
}

const MemoTwoDiamond = React.memo(TwoDiamond);
export default MemoTwoDiamond;
