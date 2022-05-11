import * as React from "react";

function ThreeHeart(props) {
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
            x={58.807}
            y={158.362}
            transform="translate(2.768 .682)"
          >
            <tspan
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              x={58.807}
              y={158.362}
              fontFamily="Arial Narrow"
            >
              {"3"}
            </tspan>
          </text>
          <text
            y={298.362}
            x={62.779}
            style={{
              textAlign: "center",
            }}
            transform="translate(2.768 .682)"
          >
            <tspan
              y={298.362}
              x={62.779}
              style={{
                textAlign: "center",
                InkscapeFontSpecification: "Arial Narrow",
              }}
              fontFamily="Arial Narrow"
            >
              {"\u2665"}
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
      <g transform="translate(82.174 -12.362)">
        <text
          id="prefix__b"
          y={310.639}
          x={291.499}
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
          <tspan y={310.639} x={291.499}>
            {"\u2665"}
          </tspan>
        </text>
        <use
          height={1046.286}
          width={747.347}
          transform="matrix(1 0 0 -1 0 1071.01)"
          xlinkHref="#prefix__b"
        />
        <use
          transform="translate(0 300)"
          height={1046.286}
          width={747.347}
          xlinkHref="#prefix__b"
        />
      </g>
    </svg>
  );
}

const MemoThreeHeart = React.memo(ThreeHeart);
export default MemoThreeHeart;
